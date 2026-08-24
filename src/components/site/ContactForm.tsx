import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import { serviceOptions, platformOptions, CONTACT_EMAIL } from "./data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initial = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  service: serviceOptions[0] ?? "",
  platform: platformOptions[0] ?? "",
  message: "",
};

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof typeof initial) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("sending");
    try {
      await send({ data: values });
      setStatus("sent");
      setValues(initial);
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.message
          ? err.message
          : `Something went wrong. Please email ${CONTACT_EMAIL}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="card-surface flex flex-col items-start gap-4 p-8 sm:p-10">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-brand">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="text-2xl font-semibold">Thank you — your enquiry has been received.</h3>
        <p className="text-muted-foreground">
          A member of the Devkull team will review your requirement and reply to your work email.
          You can also reach us directly at{" "}
          <a className="text-brand-soft underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Button variant="outline" className="rounded-full" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-surface hover:!translate-y-0 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required>
          <Input
            id="fullName"
            required
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => set("fullName")(e.target.value)}
            placeholder="Jane Doe"
          />
        </Field>
        <Field id="email" label="Work Email" required>
          <Input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="jane@company.com"
          />
        </Field>
        <Field id="company" label="Company">
          <Input
            id="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Company name"
          />
        </Field>
        <Field id="phone" label="Phone Number">
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+91 00000 00000"
          />
        </Field>
        <Field id="service" label="Service Required" required>
          <NativeSelect
            id="service"
            value={values.service}
            onChange={set("service")}
            options={serviceOptions}
          />
        </Field>
        <Field id="platform" label="Current Platform" required>
          <NativeSelect
            id="platform"
            value={values.platform}
            onChange={set("platform")}
            options={platformOptions}
          />
        </Field>
        <Field id="message" label="Message" required className="sm:col-span-2">
          <Textarea
            id="message"
            required
            rows={5}
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Tell us what you're trying to connect, automate or customize."
          />
        </Field>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" className="rounded-full px-7" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send Inquiry"
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          Your enquiry is delivered to {CONTACT_EMAIL}.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 text-sm font-medium">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}

function NativeSelect({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
    >
      {options.map((option) => (
        <option key={option} value={option} className="bg-popover text-popover-foreground">
          {option}
        </option>
      ))}
    </select>
  );
}
