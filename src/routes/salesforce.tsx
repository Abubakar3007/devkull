import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, Process, SalesforceGrid, WhyDevkull } from "@/components/site/sections";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/salesforce")({
  head: () => ({
    meta: [
      { title: "Salesforce Customization & Development Services | Devkull" },
      {
        name: "description",
        content:
          "Salesforce consulting, customization, configuration, Apex and Lightning Web Component development, Flow automation, reports and optimization by Devkull.",
      },
      { property: "og:title", content: "Salesforce Customization & Development | Devkull" },
      {
        property: "og:description",
        content:
          "Configure, customize and extend Salesforce around your business processes with Devkull.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/salesforce" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/salesforce" }],
  }),
  component: SalesforcePage,
});

function SalesforcePage() {
  return (
    <>
      <PageHero
        eyebrow="Salesforce"
        title="Customize Salesforce Around How You Work"
        subtitle="Configuration, custom objects, validation rules, Flow automation, Apex, Lightning Web Components, dashboards and permissions — designed around your actual processes."
      />
      <SalesforceGrid />
      <Process />
      <WhyDevkull />
      <FinalCta />
    </>
  );
}
