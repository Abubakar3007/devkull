import { createFileRoute } from "@tanstack/react-router";
import { About, FinalCta, Industries, WhyDevkull } from "@/components/site/sections";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Devkull | Salesforce & Integration Technology Company" },
      {
        name: "description",
        content:
          "Devkull is a technology services company focused on Salesforce customization, system integrations, e-commerce connectivity, automation and custom digital solutions.",
      },
      { property: "og:title", content: "About Devkull" },
      {
        property: "og:description",
        content:
          "A technology services company focused on Salesforce customization, integration and automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology That Connects Your Business"
        subtitle="Devkull helps businesses connect disconnected systems, automate repetitive processes and create scalable technology ecosystems."
      />
      <About />
      <WhyDevkull />
      <Industries />
      <FinalCta />
    </>
  );
}
