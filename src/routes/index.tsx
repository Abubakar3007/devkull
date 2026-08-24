import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  ContactSection,
  CoreServices,
  EcommerceEcosystem,
  FinalCta,
  Hero,
  Industries,
  Process,
  SalesforceGrid,
  Solutions,
  TechStack,
  TrustStrip,
  UseCases,
  WhyDevkull,
} from "@/components/site/sections";

const TITLE = "Devkull | Salesforce Customization & Integration Services";
const DESCRIPTION =
  "Devkull delivers Salesforce customization, automation, API and e-commerce integration services — connecting Salesforce with WooCommerce, WordPress, Magento, PrestaShop and OpenCart.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Devkull",
          description: DESCRIPTION,
          email: "info@devkull.in",
          areaServed: "Worldwide",
          serviceType: [
            "Salesforce integration services",
            "Salesforce customization services",
            "Salesforce consulting",
            "Salesforce e-commerce integration",
            "Salesforce API integration",
            "Salesforce automation services",
            "Salesforce development services",
            "Salesforce data migration",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CoreServices />
      <SalesforceGrid />
      <EcommerceEcosystem />
      <Process />
      <UseCases />
      <WhyDevkull />
      <Industries />
      <TechStack />
      <Solutions />
      <About />
      <ContactSection />
      <FinalCta />
    </>
  );
}
