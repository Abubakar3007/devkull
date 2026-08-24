import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "./data";

const serviceLinks = [
  "Salesforce Customization",
  "Salesforce Integration",
  "Salesforce Development",
  "Salesforce Automation",
  "E-commerce Integration",
  "API Integration",
];

const platformLinks = [
  "WooCommerce",
  "WordPress",
  "Magento",
  "PrestaShop",
  "OpenCart",
  "Salesforce",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Salesforce customization, integrations, automation and e-commerce technology
              solutions.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block text-sm font-semibold text-brand underline-offset-4 transition-colors hover:text-brand-deep hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </Reveal>

          <Reveal delay={80}>
            <FooterColumn title="Services" items={serviceLinks} to="/services" />
          </Reveal>
          <Reveal delay={160}>
            <FooterColumn title="Platforms" items={platformLinks} to="/integrations" />
          </Reveal>

          <Reveal delay={240}>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {(
                [
                  ["/about", "About"],
                  ["/services", "Services"],
                  ["/integrations", "Integrations"],
                  ["/salesforce", "Salesforce"],
                  ["/contact", "Contact"],
                ] as const
              ).map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-block text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={100}
          className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-xs text-muted-foreground">© 2026 Devkull. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link
              to="/privacy"
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground transition-colors hover:text-brand">
              Terms of Service
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  to,
}: {
  title: string;
  items: string[];
  to: "/services" | "/integrations";
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item}>
            <Link
              to={to}
              className="inline-block text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-brand"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
