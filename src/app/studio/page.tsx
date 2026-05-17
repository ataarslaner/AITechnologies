import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { studio, journey, faq } from "@/lib/content";
import { brand } from "@/lib/brand";

export const metadata = { title: "Studio" };

export default function StudioPage() {
  return (
    <>
      <Section
        eyebrow="The studio"
        title="A house of senior builders, working in the open."
        intro={`${brand.longName} is a small, deliberate team. Engineers, applied scientists, designers, and operators who have shipped at hyperscale. We work in two-week cycles, in plain language, with the people who decide.`}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {studio.map((m) => (
            <Card key={m.name}>
              <p className="eyebrow">{m.role}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tightest text-white">
                {m.name}
              </h3>
              <p className="mt-3 text-sm text-white/70">{m.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="How we engage" title="From first call to first ship.">
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
          {journey.map((j) => (
            <li key={j.step} className="bg-ink-900 p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {j.step}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-tightest text-white">
                {j.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{j.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Common questions" title="Asked, and answered.">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faq.map((f) => (
            <div key={f.q} className="grid gap-4 py-8 md:grid-cols-12">
              <h3 className="md:col-span-5 font-display text-xl tracking-tightest text-white sm:text-2xl">
                {f.q}
              </h3>
              <p className="md:col-span-7 text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
