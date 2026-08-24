import { useState } from "react";
import { cn } from "@/lib/utils";

const spokes = [
  { label: "WooCommerce", status: "Customer & Order Sync" },
  { label: "WordPress", status: "Lead Capture Sync" },
  { label: "Magento", status: "Product & Inventory Sync" },
  { label: "PrestaShop", status: "Order Sync" },
  { label: "OpenCart", status: "Customer Sync" },
  { label: "Custom APIs", status: "API Integration" },
  { label: "Business Systems", status: "Data Automation" },
];

/** Premium integration architecture: Salesforce at the center, live data flow on the spokes. */
export function IntegrationDiagram({ className }: { className?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const radius = 38;
  const cx = 50;
  const cy = 50;

  return (
    <div className={cn("relative aspect-square w-full max-w-[34rem]", className)}>
      <div className="absolute inset-10 rounded-full bg-[image:var(--gradient-brand)] opacity-[0.09] blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 10%, transparent)"
          strokeWidth="0.25"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius - 12}
          fill="none"
          stroke="color-mix(in oklab, var(--brand) 22%, transparent)"
          strokeWidth="0.25"
          strokeDasharray="1 2"
          style={{
            transformOrigin: "50px 50px",
            animation: "dk-spin-slow 90s linear infinite",
          }}
        />
        {spokes.map((spoke, i) => {
          const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          const isActive = active === i;
          return (
            <g key={spoke.label}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={
                  isActive
                    ? "color-mix(in oklab, var(--brand) 75%, transparent)"
                    : "color-mix(in oklab, var(--brand) 25%, transparent)"
                }
                strokeWidth={isActive ? 0.7 : 0.35}
                style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
              />
              {/* data particles */}
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="var(--brand)"
                strokeWidth={isActive ? 0.9 : 0.55}
                strokeLinecap="round"
                strokeDasharray="1.6 20"
                style={{ animation: `dk-dash ${isActive ? 2 : 5 + i * 0.4}s linear infinite` }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <span
            className={cn(
              "absolute size-24 rounded-full bg-brand/25 [animation:dk-pulse-ring_3.2s_ease-out_infinite]",
              active !== null && "bg-brand/40",
            )}
          />
          <div
            className={cn(
              "relative grid size-24 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-center shadow-[var(--shadow-lift)] transition-transform duration-500 sm:size-28",
              active !== null && "scale-105",
            )}
          >
            <span className="px-2 text-[0.72rem] font-semibold tracking-wide text-primary-foreground sm:text-sm">
              Salesforce
            </span>
          </div>
        </div>
      </div>

      {/* Spoke nodes */}
      {spokes.map((spoke, i) => {
        const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const isActive = active === i;
        return (
          <div
            key={spoke.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className="animate-float relative"
              style={{ animationDelay: `${i * 0.55}s` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span
                className={cn(
                  "block cursor-default rounded-full border bg-surface/95 px-2.5 py-1.5 text-[0.62rem] font-medium whitespace-nowrap shadow-[var(--shadow-soft)] backdrop-blur transition-all duration-300 sm:px-3.5 sm:text-[0.74rem]",
                  isActive
                    ? "-translate-y-0.5 scale-105 border-brand/50 text-brand shadow-[var(--shadow-lift)]"
                    : "border-border text-foreground",
                )}
              >
                {spoke.label}
              </span>
              <span
                role="status"
                className={cn(
                  "pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-lg border border-brand/25 bg-surface px-2.5 py-1 text-[0.62rem] font-semibold whitespace-nowrap text-brand shadow-[var(--shadow-soft)] transition-all duration-300",
                  isActive ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                )}
              >
                {spoke.status}
              </span>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 -bottom-2 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/95 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase shadow-[var(--shadow-soft)] backdrop-blur sm:text-xs">
          Connect <span className="text-brand">→</span> Automate <span className="text-brand">→</span> Scale
        </div>
      </div>
    </div>
  );
}
