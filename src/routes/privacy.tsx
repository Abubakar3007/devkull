import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { CONTACT_EMAIL } from "@/components/site/data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Devkull" },
      {
        name: "description",
        content:
          "How Devkull collects, uses and protects the information you share through the devkull.in website and contact form.",
      },
      { property: "og:title", content: "Privacy Policy | Devkull" },
      {
        property: "og:description",
        content: "How Devkull handles information submitted through this website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This policy explains what information Devkull collects through this website and how it is used."
      />
      <Section>
        <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Block title="Information we collect">
            We only collect the information you voluntarily submit through our contact form: your
            name, work email, company, phone number, the service and platform you select, and your
            message.
          </Block>
          <Block title="How we use it">
            Submitted information is used solely to respond to your enquiry and to discuss a
            potential engagement. We do not sell or rent your information.
          </Block>
          <Block title="Email delivery">
            Contact form submissions are delivered to {CONTACT_EMAIL} through an email delivery
            provider. That provider processes the message on our behalf.
          </Block>
          <Block title="Retention">
            Enquiry emails are retained for as long as needed to handle your request and maintain
            business records.
          </Block>
          <Block title="Your choices">
            You can request access to, correction of, or deletion of the information you submitted
            by emailing {CONTACT_EMAIL}.
          </Block>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
