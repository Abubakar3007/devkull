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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <Link to="/" aria-label="Devkull home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary/70" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
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
          className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="block rounded-xl px-3 py-3 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
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
