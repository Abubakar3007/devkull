import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/sections";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Devkull | Salesforce Integration Consultation" },
      {
        name: "description",
        content:
          "Tell Devkull what you're trying to connect, automate or customize in Salesforce. Get a consultation on integration, automation and e-commerce connectivity.",
      },
      { property: "og:title", content: "Contact Devkull" },
      {
        property: "og:description",
        content: "Talk to Devkull about Salesforce customization, integration and automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devkull-connect.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://devkull-connect.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Integration"
        subtitle="Tell us what you're trying to connect, automate or customize. We'll respond with a practical approach and next steps."
      />
      <ContactSection />
    </>
  );
}
