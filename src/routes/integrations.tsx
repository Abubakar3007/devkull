import { createFileRoute } from "@tanstack/react-router";
import {
  EcommerceEcosystem,
  FinalCta,
  Process,
  Solutions,
  TechStack,
} from "@/components/site/sections";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Salesforce E-commerce & API Integration Services | Devkull" },
      {
        name: "description",
        content:
          "Connect Salesforce with WooCommerce, WordPress, Magento, Adobe Commerce, PrestaShop, OpenCart and custom APIs. Customer, order, product and inventory synchronization.",
      },
      { property: "og:title", content: "Salesforce E-commerce & API Integrations | Devkull" },
      {
        property: "og:description",
        content:
          "Salesforce integrations for WooCommerce, Magento, PrestaShop, OpenCart, WordPress and custom platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devkull-connect.lovable.app/integrations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://devkull-connect.lovable.app/integrations" }],
  }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Connect Salesforce With Your E-commerce Ecosystem"
        subtitle="REST and SOAP APIs, webhooks, middleware and custom synchronization — connecting Salesforce with storefronts and internal business systems."
      />
      <EcommerceEcosystem />
      <Process />
      <Solutions />
      <TechStack />
      <FinalCta />
    </>
  );
}
