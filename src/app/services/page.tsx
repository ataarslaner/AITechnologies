import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { services } from "@/lib/content";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Four practices, built to compound."
        intro="We are organized around the metrics our partners actually care about. Pick the practice or pick all four."
      />

      {services.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`${idx % 2 === 0 ? "bg-ink-900/40" : ""} border-t border-white/10`}
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-4 font-display text-4xl tracking-tightest text-balance text-white sm:text-6xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-xl text-white/80">{s.headline}</p>
                <p className="mt-4 text-white/70">{s.summary}</p>

                <div className="mt-8 inline-flex items-baseline gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="font-display text-4xl tracking-tightest text-accent">
                    {s.metric.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
                    {s.metric.label}
                  </span>
                </div>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition"
                  >
                    Scope an engagement
                  </Link>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <Card key={f.title}>
                      <h3 className="font-display text-xl tracking-tightest text-white">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">{f.body}</p>
                    </Card>
                  ))}
                </div>

                <p className="mt-8 border-l-2 border-accent pl-4 font-display text-lg italic text-white/85">
                  {s.proof}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
