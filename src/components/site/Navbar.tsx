import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "./data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-border bg-background/80 shadow-[0_1px_0_0_var(--color-border),0_10px_30px_-24px_oklch(0.28_0.05_258/0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/40",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-[height] duration-500 sm:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link
          to="/"
          aria-label="Devkull home"
          onClick={() => setOpen(false)}
          className="transition-transform duration-300 hover:scale-[1.03]"
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "!text-brand after:!scale-x-100" }}
                className="link-underline relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <Link to="/contact">Get a Consultation</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/60 text-foreground transition-all duration-300 hover:border-brand/40 hover:text-brand active:scale-95 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 ease-out lg:hidden",
          open ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link, i) => (
            <li
              key={link.to}
              className={cn(
                "transition-all duration-400 ease-out",
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
              )}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
            >
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-brand bg-accent/70" }}
                className="block rounded-xl px-3 py-3 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Consultation
              </Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Talk to an Expert
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
