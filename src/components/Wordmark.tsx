import { brand } from "@/lib/brand";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex items-center gap-2 font-display text-[22px] tracking-tightest text-white ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="text-accent">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 14h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="leading-none">{brand.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] leading-none text-white/50">
        House
      </span>
    </span>
  );
}
