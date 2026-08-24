import { createFileRoute } from "@tanstack/react-router";
import { CoreServices, FinalCta, SalesforceGrid, UseCases } from "@/components/site/sections";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Salesforce & Integration Services | Devkull" },
      {
        name: "description",
        content:
          "Salesforce customization, integration, automation, development, data migration and e-commerce integration services from Devkull.",
      },
      { property: "og:title", content: "Salesforce & Integration Services | Devkull" },
      {
        property: "og:description",
        content:
          "Salesforce customization, integration, automation and e-commerce integration services built around your business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devkull-connect.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://devkull-connect.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Salesforce & Digital Integration Services"
        subtitle="From Salesforce customization to complex e-commerce integrations, Devkull builds solutions around the way your business actually works."
      />
      <CoreServices heading={false} />
      <SalesforceGrid />
      <UseCases />
      <FinalCta />
    </>
  );
}
