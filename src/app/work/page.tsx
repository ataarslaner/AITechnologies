import { Section } from "@/components/Section";
import { work } from "@/lib/content";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <Section
      eyebrow="Work"
      title="Receipts, not slogans."
      intro="A short ledger of recent engagements. Names withheld at partner request, numbers verified."
    >
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {work.map((w, idx) => (
          <li
            key={w.title}
            className="grid gap-6 py-12 md:grid-cols-12 md:items-baseline"
          >
            <p className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              {String(idx + 1).padStart(2, "0")}
            </p>
            <p className="md:col-span-2 eyebrow">{w.industry}</p>
            <h3 className="md:col-span-5 font-display text-3xl tracking-tightest text-white sm:text-4xl">
              {w.title}
            </h3>
            <p className="md:col-span-3 text-white/70">{w.summary}</p>
            <div className="md:col-span-1 text-right">
              <p className="font-display text-3xl text-accent">{w.outcome}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                {w.duration}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
