import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
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
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Salesforce customization, integrations, automation and e-commerce technology
              solutions.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block text-sm font-medium text-brand-soft underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <FooterColumn title="Services" items={serviceLinks} to="/services" />
          <FooterColumn title="Platforms" items={platformLinks} to="/integrations" />

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">© 2026 Devkull. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
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
            <Link to={to} className="text-muted-foreground transition-colors hover:text-foreground">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
