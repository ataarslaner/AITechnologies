import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { brand } from "@/lib/brand";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  const items = [
    { name: "Founder Tee", note: "Heavyweight cotton · Black" },
    { name: "Studio Sweatshirt", note: "Brushed fleece · Sand" },
    { name: "Field Cap", note: "Six-panel · Embroidered" },
    { name: "Workshop Tote", note: "Canvas · Natural" },
  ];
  return (
    <Section
      eyebrow="Shop"
      title="Soon. The first drop."
      intro={`A small line of essentials with the ${brand.name} mark. Made for the long days and the focused ones. The house extends beyond the screen.`}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <Card key={p.name}>
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-ink-700 to-ink-900 ring-1 ring-white/5" />
            <h3 className="mt-4 font-display text-xl tracking-tightest text-white">
              {p.name}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              {p.note}
            </p>
            <p className="mt-3 inline-flex rounded-full bg-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
              Coming soon
            </p>
          </Card>
        ))}
      </div>

      <div className="glass mt-14 rounded-3xl p-10">
        <h3 className="font-display text-3xl tracking-tightest text-white">
          Be first in line.
        </h3>
        <p className="mt-3 max-w-xl text-white/65">
          Leave your email and we will send a single note when the first run is
          ready. No newsletters, no noise.
        </p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@domain.com"
            className="flex-1 rounded-full border border-white/10 bg-ink-800 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
          />
          <button
            type="button"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition"
          >
            Notify me
          </button>
        </form>
      </div>
    </Section>
  );
}
