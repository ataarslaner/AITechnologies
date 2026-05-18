export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-paper-warm/60 py-6">
      <div className="flex animate-marquee whitespace-nowrap font-display text-3xl tracking-tightest text-ink sm:text-5xl">
        {repeated.map((s, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span>{s}</span>
            <span aria-hidden className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
