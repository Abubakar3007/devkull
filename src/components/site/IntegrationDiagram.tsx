import { cn } from "@/lib/utils";

const spokes = [
  "WooCommerce",
  "WordPress",
  "Magento",
  "PrestaShop",
  "OpenCart",
  "Custom APIs",
  "Business Systems",
];

/** Abstract, polished integration architecture: Salesforce at the center. */
export function IntegrationDiagram({ className }: { className?: string }) {
  const radius = 38;
  const cx = 50;
  const cy = 50;

  return (
    <div className={cn("relative aspect-square w-full max-w-[34rem]", className)}>
      <div className="absolute inset-8 rounded-full bg-[image:var(--gradient-brand)] opacity-15 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 12%, transparent)"
          strokeWidth="0.25"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius - 12}
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 8%, transparent)"
          strokeWidth="0.25"
          strokeDasharray="1 2"
        />
        {spokes.map((_, i) => {
          const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          return (
            <g key={i}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="color-mix(in oklab, var(--brand) 35%, transparent)"
                strokeWidth="0.35"
              />
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="var(--cyan)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray="2 22"
                style={{
                  animation: `dk-dash ${5 + i * 0.4}s linear infinite`,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <span className="absolute size-24 rounded-full bg-brand/30 [animation:dk-pulse-ring_3.2s_ease-out_infinite]" />
          <div className="relative grid size-24 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-center shadow-[var(--shadow-lift)] sm:size-28">
            <span className="px-2 text-[0.7rem] font-semibold tracking-wide text-primary-foreground sm:text-xs">
              Salesforce
            </span>
          </div>
        </div>
      </div>

      {/* Spoke nodes */}
      {spokes.map((label, i) => {
        const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="block rounded-full border border-border bg-surface/90 px-2.5 py-1.5 text-[0.6rem] font-medium whitespace-nowrap text-foreground shadow-[var(--shadow-soft)] backdrop-blur sm:px-3.5 sm:text-[0.72rem]">
              {label}
            </span>
          </div>
        );
      })}

      <div className="absolute inset-x-0 -bottom-2 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase backdrop-blur sm:text-xs">
          Connect <span className="text-brand">→</span> Automate <span className="text-brand">→</span> Scale
        </div>
      </div>
    </div>
  );
}
