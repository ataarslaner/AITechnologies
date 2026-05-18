import Link from "next/link";
import { brand } from "@/lib/brand";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Marquee } from "@/components/Marquee";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-noise absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-28 sm:pt-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <p className="eyebrow">{dict.home.houseLabel}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
                {dict.home.estLabel} {brand.founded}
              </p>
            </div>
            <div className="md:col-span-10">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-float" />
                {dict.common.studioOpen}
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tightest text-balance text-ink">
                {dict.home.headlineA}{" "}
                <span className="italic text-accent">{dict.home.headlineB}</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink-500 sm:text-xl">
                {dict.meta.promise}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-[0_12px_40px_rgba(10,31,68,0.25)] hover:bg-accent-soft transition"
                >
                  {dict.common.startProject}
                </Link>
                <Link
                  href={`/${locale}/work`}
                  className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink hover:bg-ink/5 transition"
                >
                  {dict.common.seeWork}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-y-10 gap-x-6 border-y border-ink/10 py-10 sm:grid-cols-4">
            {dict.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl tracking-tightest text-ink sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 max-w-[16ch] font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={dict.marquee} />

      <Section
        eyebrow={dict.home.sectionsServicesEyebrow}
        title={dict.home.sectionsServicesTitle}
        intro={dict.home.sectionsServicesIntro}
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 md:grid-cols-2">
          {dict.services.map((s) => (
            <Link
              key={s.slug}
              href={`/${locale}/services#${s.slug}`}
              className="group flex flex-col gap-6 bg-paper-warm p-8 transition hover:bg-paper-deep sm:p-10"
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">{s.eyebrow}</p>
                <span className="font-display text-2xl text-accent">
                  {s.metric.value}
                </span>
              </div>
              <h3 className="font-display text-3xl tracking-tightest text-ink sm:text-4xl">
                {s.title}
              </h3>
              <p className="text-ink-500">{s.headline}</p>
              <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/80 group-hover:text-accent">
                {dict.common.readMore} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={dict.home.sectionsIndustriesEyebrow}
        title={dict.home.sectionsIndustriesTitle}
        intro={dict.home.sectionsIndustriesIntro}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dict.industries.map((i) => (
            <Card key={i.name}>
              <p className="eyebrow">{i.metric}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tightest text-ink">
                {i.name}
              </h3>
              <p className="mt-3 text-sm text-ink-500">{i.pitch}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={dict.home.sectionsWorkEyebrow}
        title={dict.home.sectionsWorkTitle}
        intro={dict.home.sectionsWorkIntro}
      >
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {dict.work.map((w) => (
            <li
              key={w.title}
              className="grid items-baseline gap-4 py-8 md:grid-cols-12"
            >
              <p className="md:col-span-2 eyebrow">{w.industry}</p>
              <h3 className="md:col-span-6 font-display text-2xl tracking-tightest text-ink sm:text-3xl">
                {w.title}
              </h3>
              <p className="md:col-span-3 text-sm text-ink-500">{w.summary}</p>
              <div className="md:col-span-1 text-right">
                <p className="font-display text-2xl text-accent">{w.outcome}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
                  {w.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow={dict.home.sectionsPrinciplesEyebrow}
        title={dict.home.sectionsPrinciplesTitle}
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 md:grid-cols-2">
          {dict.principles.map((p) => (
            <div key={p.title} className="bg-paper-warm p-8 sm:p-10">
              <h3 className="font-display text-2xl tracking-tightest text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-ink-500">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-32">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 sm:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow">{dict.home.ctaEyebrow}</p>
              <h3 className="mt-4 font-display text-4xl tracking-tightest text-balance text-ink sm:text-6xl">
                {dict.home.ctaTitle}
              </h3>
              <p className="mt-4 max-w-xl text-ink-500">{dict.home.ctaBody}</p>
            </div>
            <div className="md:col-span-4 flex items-end justify-start md:justify-end">
              <Link
                href={`/${locale}/contact`}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition"
              >
                {dict.common.startProject}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
