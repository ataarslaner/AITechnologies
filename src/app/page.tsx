import Link from "next/link";
import { brand } from "@/lib/brand";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Marquee } from "@/components/Marquee";
import {
  services,
  stats,
  principles,
  industries,
  work,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-noise absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-28 sm:pt-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <p className="eyebrow">House № 001</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                Est. {brand.founded}
              </p>
            </div>
            <div className="md:col-span-10">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-float" />
                Studio open · taking on three new partners this quarter
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tightest text-balance text-white">
                Engineered{" "}
                <span className="italic text-accent">to win.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-white/70 sm:text-xl">
                {brand.promise}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(244,63,94,0.4)] hover:bg-accent-soft transition"
                >
                  Start a project
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
                >
                  See the work
                </Link>
              </div>
            </div>
          </div>

          {/* Headline metrics */}
          <div className="mt-24 grid grid-cols-2 gap-y-10 gap-x-6 border-y border-white/10 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl tracking-tightest text-white sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 max-w-[16ch] font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <Marquee
        items={[
          "Legal",
          "Commerce",
          "Healthcare",
          "Brand",
          "Apparel",
          "Strategy",
          "Engineering",
        ]}
      />

      {/* Services */}
      <Section
        eyebrow="Services"
        title="Four practices. One standard of work."
        intro="Each practice is a delivery team of senior engineers and applied scientists. We sign on numbers, not adjectives."
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group flex flex-col gap-6 bg-ink-900 p-8 transition hover:bg-ink-800 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">{s.eyebrow}</p>
                <span className="font-display text-2xl text-accent">
                  {s.metric.value}
                </span>
              </div>
              <h3 className="font-display text-3xl tracking-tightest text-white sm:text-4xl">
                {s.title}
              </h3>
              <p className="text-white/70">{s.headline}</p>
              <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80 group-hover:text-accent">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Industries strip */}
      <Section
        eyebrow="Industries"
        title="We work where the stakes are real."
        intro="Each engagement is private by default and tuned to the way your industry actually runs."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <Card key={i.name}>
              <p className="eyebrow">{i.metric}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tightest text-white">
                {i.name}
              </h3>
              <p className="mt-3 text-sm text-white/65">{i.pitch}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section
        eyebrow="Selected work"
        title="Receipts, not slogans."
        intro="A few of the businesses we have rebuilt. Names withheld at partner request."
      >
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {work.map((w) => (
            <li
              key={w.title}
              className="grid items-baseline gap-4 py-8 md:grid-cols-12"
            >
              <p className="md:col-span-2 eyebrow">{w.industry}</p>
              <h3 className="md:col-span-6 font-display text-2xl tracking-tightest text-white sm:text-3xl">
                {w.title}
              </h3>
              <p className="md:col-span-3 text-sm text-white/65">{w.summary}</p>
              <div className="md:col-span-1 text-right">
                <p className="font-display text-2xl text-accent">{w.outcome}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                  {w.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Principles */}
      <Section eyebrow="House code" title="Quiet rigor. Loud results.">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="bg-ink-900 p-8 sm:p-10">
              <h3 className="font-display text-2xl tracking-tightest text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 sm:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow">Studio open</p>
              <h3 className="mt-4 font-display text-4xl tracking-tightest text-balance text-white sm:text-6xl">
                Have a problem worth solving? We are listening.
              </h3>
              <p className="mt-4 max-w-xl text-white/70">
                Tell us the metric you want to move. We will tell you whether we
                can move it, and how fast.
              </p>
            </div>
            <div className="md:col-span-4 flex items-end justify-start md:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
