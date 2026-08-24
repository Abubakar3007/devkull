import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center rounded-[10px] bg-[image:var(--gradient-brand)] shadow-[var(--shadow-lift)]">
        <svg viewBox="0 0 24 24" className="size-4.5" aria-hidden="true" fill="none">
          <path
            d="M6 6.5v11M6 12h6.5M18 6.5a2 2 0 1 1-3.4 1.4M18 17.5a2 2 0 1 0-3.4-1.4"
            stroke="oklch(0.99 0.005 250)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="6" cy="6.5" r="1.9" fill="oklch(0.99 0.005 250)" />
          <circle cx="6" cy="17.5" r="1.9" fill="oklch(0.99 0.005 250)" />
          <circle cx="17.4" cy="9" r="1.9" fill="oklch(0.99 0.005 250)" />
          <circle cx="17.4" cy="15.6" r="1.9" fill="oklch(0.99 0.005 250)" />
        </svg>
      </span>
      <span className="font-display text-[1.15rem] font-bold tracking-[-0.04em] text-foreground">
        DEV<span className="text-brand-soft">KULL</span>
      </span>
    </span>
  );
}
