import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().default(""),
  phone: z.string().trim().max(60).optional().default(""),
  service: z.string().trim().max(120),
  platform: z.string().trim().max(120),
  message: z.string().trim().min(10).max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const to = "info@devkull.in";
    const apiKey = process.env["RESEND_API_KEY"];

    const rows: Array<[string, string]> = [
      ["Full Name", data.fullName],
      ["Work Email", data.email],
      ["Company", data.company || "—"],
      ["Phone", data.phone || "—"],
      ["Service Required", data.service],
      ["Current Platform", data.platform],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#101828">
        <h2 style="margin:0 0 16px">New enquiry from devkull.in</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="color:#667085">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top:16px;white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>`;

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not configured — enquiry logged only", {
        to,
        from: data.email,
        service: data.service,
      });
      return { ok: true as const, delivered: false as const };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Devkull Website <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `New enquiry — ${data.service} — ${data.fullName}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[contact] email delivery failed", res.status, await res.text());
      throw new Error("We couldn't send your message right now. Please email info@devkull.in.");
    }

    return { ok: true as const, delivered: true as const };
  });

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
