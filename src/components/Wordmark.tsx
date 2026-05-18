import { brand } from "@/lib/brand";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Wordmark({
  className = "",
  dict,
}: {
  className?: string;
  dict?: Dictionary;
}) {
  const houseLabel = dict?.common.house ?? "House";
  return (
    <span
      className={`flex items-center gap-2 font-display text-[22px] tracking-tightest text-ink ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="text-accent">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 14h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="leading-none">{brand.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] leading-none text-ink-300">
        {houseLabel}
      </span>
    </span>
  );
}
