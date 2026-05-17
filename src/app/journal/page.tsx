import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata = { title: "Journal" };

const entries = [
  {
    date: "2026 · 05",
    title: "Why we measure law firms in revenue, not features.",
    summary:
      "A short note on the only metric that matters when you sell software to a law firm.",
  },
  {
    date: "2026 · 04",
    title: "How to win the bazaar in one quarter.",
    summary:
      "The merchandising playbook our commerce partners use to lift traffic 30% and sell more of the right thing.",
  },
  {
    date: "2026 · 03",
    title: "The studio model: why we ship faster with seniors only.",
    summary:
      "On building a deliberate team and what we refuse to staff with juniors.",
  },
];

export default function JournalPage() {
  return (
    <Section
      eyebrow="Journal"
      title="Field notes from the studio."
      intro="Short essays on the work, written by the people doing it."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {entries.map((e) => (
          <Card key={e.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              {e.date}
            </p>
            <h3 className="mt-3 font-display text-xl tracking-tightest text-white">
              {e.title}
            </h3>
            <p className="mt-3 text-sm text-white/70">{e.summary}</p>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Coming soon →
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
