import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bolt,
  Check,
  Code2,
  Database,
  LayoutGrid,
  Plug,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading, Eyebrow } from "./SectionHeading";
import { IntegrationDiagram } from "./IntegrationDiagram";
import { ContactForm } from "./ContactForm";
import {
  CONTACT_EMAIL,
  coreServices,
  industries,
  platforms,
  process,
  salesforceCapabilities,
  solutions,
  techStack,
  useCases,
  whyDevkull,
} from "./data";
import { Button } from "@/components/ui/button";

const icons = {
  sliders: SlidersHorizontal,
  plug: Plug,
  cart: ShoppingCart,
  grid: LayoutGrid,
  bolt: Bolt,
  database: Database,
  code: Code2,
  shield: ShieldCheck,
} as const;

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-wash)] pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-56 -left-32 size-[46rem] rounded-full bg-[image:var(--gradient-brand)] opacity-[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 -bottom-52 size-[36rem] rounded-full bg-[image:var(--gradient-brand)] opacity-[0.08] blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <Eyebrow>Salesforce Customization & Integration</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.03] font-semibold text-balance sm:text-5xl lg:text-[3.9rem]">
              Transform Salesforce Into a{" "}
              <span className="text-gradient">Connected Business Platform</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Devkull specializes in Salesforce customization, automation, and e-commerce
              integrations that connect your business systems into one scalable ecosystem.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/contact">
                  Talk to an Expert <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-10 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Salesforce • E-commerce • APIs • Automation • Custom Solutions
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <IntegrationDiagram />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Trust strip ------------------------------ */

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-surface/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 sm:px-8">
        {techStack.slice(0, 9).map((tech) => (
          <span
            key={tech}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Core services ---------------------------- */

export function CoreServices({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="services">
      {heading ? (
        <SectionHeading
          eyebrow="Services"
          title="Salesforce & Digital Integration Services"
          subtitle="From Salesforce customization to complex e-commerce integrations, Devkull builds solutions around the way your business actually works."
        />
      ) : null}
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {coreServices.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <article className="card-surface flex h-full flex-col p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-brand/12 text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-5 grid gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
                {service.title === "Salesforce Customization" ? (
                  <Link
                    to="/salesforce"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-soft transition-colors hover:text-brand"
                  >
                    Explore Salesforce Customization <ArrowRight className="size-4" />
                  </Link>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* --------------------------- Salesforce mega grid ------------------------- */

export function SalesforceGrid() {
  return (
    <Section light id="salesforce">
      <SectionHeading
        eyebrow="Salesforce"
        align="center"
        title="Everything You Need To Customize Salesforce"
        subtitle="A complete capability set covering consulting, configuration, development, automation, integration and long-term optimization."
      />
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {salesforceCapabilities.map((item, i) => (
          <Reveal key={item} delay={(i % 3) * 60}>
            <div className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 shadow-[var(--shadow-soft)] transition-colors hover:border-brand/40">
              <span className="size-1.5 shrink-0 rounded-full bg-brand transition-transform group-hover:scale-150" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 flex justify-center">
        <Button asChild size="lg" className="rounded-full px-7">
          <Link to="/contact">
            Discuss Your Salesforce Requirement <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}

/* ------------------------- E-commerce ecosystem -------------------------- */

export function EcommerceEcosystem() {
  return (
    <Section id="integrations">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="E-commerce Integration"
            title="Connect Salesforce With Your E-commerce Ecosystem"
            subtitle="Devkull connects Salesforce with the storefronts your business already runs on — synchronizing customers, orders, products and inventory across every platform."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {platforms.map((platform, i) => (
              <Reveal key={platform.name} delay={(i % 2) * 70}>
                <div className="card-surface p-4">
                  <p className="text-sm font-semibold">{platform.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{platform.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120} className="flex justify-center">
          <EcosystemTree />
        </Reveal>
      </div>
    </Section>
  );
}

function Node({ label, primary = false }: { label: string; primary?: boolean }) {
  return (
    <span
      className={
        primary
          ? "inline-flex items-center rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)]"
          : "inline-flex items-center rounded-xl border border-border bg-surface px-3.5 py-2.5 text-xs font-medium shadow-[var(--shadow-soft)] transition-colors hover:border-brand/50 sm:text-sm"
      }
    >
      {label}
    </span>
  );
}

function EcosystemTree() {
  const columns = [
    ["WooCommerce", "WordPress"],
    ["Magento", "OpenCart"],
    ["PrestaShop", "Custom Store"],
  ];
  return (
    <div className="relative w-full max-w-lg rounded-3xl border border-border bg-surface/50 p-6 backdrop-blur sm:p-9">
      <div className="flex justify-center">
        <Node label="Salesforce" primary />
      </div>
      <div className="relative mx-auto h-14 w-full">
        <svg viewBox="0 0 300 56" className="size-full" aria-hidden="true" preserveAspectRatio="none">
          <path
            d="M150 0 V22 M50 56 V34 H250 V56 M150 22 V34"
            fill="none"
            stroke="color-mix(in oklab, var(--brand) 45%, transparent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M150 0 V22 M50 56 V34 H250 V56"
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 60"
            style={{ animation: "dk-dash 4s linear infinite" }}
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            {col.map((label) => (
              <Node key={label} label={label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Process -------------------------------- */

export function Process() {
  return (
    <Section light>
      <SectionHeading
        eyebrow="Workflow"
        align="center"
        title="How We Connect Your Systems"
        subtitle="A structured delivery approach that keeps integrations predictable, documented and maintainable."
      />
      <div className="relative mt-16">
        <div className="pointer-events-none absolute top-9 right-0 left-0 hidden h-px lg:block">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 110}>
              <div className="relative">
                <span className="relative z-10 grid size-18 place-items-center rounded-2xl border border-border bg-surface font-display text-lg font-bold text-brand shadow-[var(--shadow-soft)]">
                  {item.step}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Use cases ------------------------------- */

export function UseCases() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Use Cases"
        title="What We Can Help You Build"
        subtitle="Common requirements Devkull delivers for teams running Salesforce alongside e-commerce and internal business systems."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, i) => (
          <Reveal key={item} delay={(i % 3) * 70}>
            <div className="card-surface flex items-center gap-4 p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand/12 text-xs font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Why Devkull ------------------------------ */

export function WhyDevkull() {
  return (
    <Section light>
      <SectionHeading
        eyebrow="Why Devkull"
        title="Technology Built Around Your Business"
        subtitle="We design systems that reflect how your teams actually operate — and keep them maintainable as the business grows."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyDevkull.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80}>
            <article className="card-surface h-full p-7">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Industries ------------------------------ */

export function Industries() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Industries"
        align="center"
        title="Industries We Can Support"
        subtitle="Salesforce and integration work Devkull is equipped to deliver across these sectors."
      />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {industries.map((industry, i) => (
          <Reveal key={industry} delay={(i % 4) * 60}>
            <span className="inline-flex rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium shadow-[var(--shadow-soft)] transition-colors hover:border-brand/50 hover:text-brand-soft">
              {industry}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Tech stack ------------------------------- */

export function TechStack() {
  return (
    <Section light>
      <SectionHeading
        eyebrow="Technology"
        title="The Stack We Work With"
        subtitle="Platforms, APIs and frameworks Devkull uses to build and connect business systems."
      />
      <div className="mt-14 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {techStack.map((tech, i) => (
          <Reveal key={tech} delay={(i % 4) * 55}>
            <div className="card-surface flex items-center justify-center px-4 py-6 text-sm font-semibold">
              {tech}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Solutions ------------------------------- */

export function Solutions() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Solutions"
        title="Solutions We Build"
        subtitle="Representative solution architectures Devkull delivers for Salesforce and e-commerce environments."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {solutions.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 90}>
            <article className="card-surface h-full p-8">
              <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-wrap items-center gap-4">
        <p className="text-base font-medium">Have a similar requirement? Let's discuss it.</p>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/contact">Tell Us Your Requirement</Link>
        </Button>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- About --------------------------------- */

export function About() {
  return (
    <Section light id="about">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="About Devkull"
          title="Technology That Connects Your Business"
          subtitle="Devkull is a technology services company focused on Salesforce customization, system integrations, e-commerce connectivity, automation and custom digital solutions."
        />
        <Reveal delay={120} className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            We help businesses connect disconnected systems, automate repetitive processes and
            create scalable technology ecosystems — so information moves reliably between your CRM,
            storefronts and internal tools.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Every engagement starts with your processes, not a template. The result is a Salesforce
            environment your teams can actually work in, backed by integrations that are documented,
            observable and built to be extended.
          </p>
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/contact">
              Work With Devkull <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Contact -------------------------------- */

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Your Integration"
            subtitle="Tell us what you're trying to connect, automate or customize."
          />
          <Reveal delay={100} className="card-surface mt-10 p-7 hover:!translate-y-0">
            <p className="font-display text-lg font-semibold">Devkull</p>
            <p className="mt-3 text-sm text-muted-foreground">Email</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-base font-medium text-brand-soft underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-full">
                <a href={`mailto:${CONTACT_EMAIL}`}>Start a Conversation</a>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------- Final CTA ------------------------------- */

export function FinalCta() {
  return (
    <section className="section-y relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-brand)] opacity-12" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
            Ready to connect Salesforce with the rest of your business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Share your requirement and we'll come back with a practical integration approach.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">
                Start Your Project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href={`mailto:${CONTACT_EMAIL}`}>Get a Consultation</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
