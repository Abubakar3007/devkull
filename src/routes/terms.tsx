import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { CONTACT_EMAIL } from "@/components/site/data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Devkull" },
      {
        name: "description",
        content:
          "The terms that apply to your use of the Devkull website and to enquiries submitted through it.",
      },
      { property: "og:title", content: "Terms of Service | Devkull" },
      {
        property: "og:description",
        content: "Terms that apply to the Devkull website and enquiries submitted through it.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devkull-connect.lovable.app/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://devkull-connect.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="These terms apply to your use of this website and to enquiries submitted through it."
      />
      <Section>
        <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Block title="Website content">
            Content on this website describes services Devkull can provide. It is provided for
            information only and does not form a contract or a guarantee of any specific outcome.
          </Block>
          <Block title="Enquiries">
            Submitting the contact form does not create a client relationship. Any engagement is
            governed by a separate written agreement covering scope, timelines and fees.
          </Block>
          <Block title="Intellectual property">
            The Devkull name, wordmark and website content are owned by Devkull. Third-party product
            names such as Salesforce, WooCommerce, WordPress, Magento, Adobe Commerce, PrestaShop
            and OpenCart are trademarks of their respective owners and are referenced only to
            describe integration capabilities.
          </Block>
          <Block title="Limitation of liability">
            Devkull is not liable for any loss arising from reliance on website content. Liability
            for delivered work is defined in the applicable engagement agreement.
          </Block>
          <Block title="Contact">Questions about these terms can be sent to {CONTACT_EMAIL}.</Block>
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
