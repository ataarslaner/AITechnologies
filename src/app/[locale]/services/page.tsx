import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.services.eyebrow };
}

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const page = dict.pages.services;

  return (
    <>
      <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro} />

      {dict.services.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`${idx % 2 === 0 ? "bg-paper-warm/40" : ""} border-t border-ink/10`}
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-4 font-display text-4xl tracking-tightest text-balance text-ink sm:text-6xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-xl text-ink/80">{s.headline}</p>
                <p className="mt-4 text-ink-500">{s.summary}</p>

                <div className="mt-8 inline-flex items-baseline gap-4 rounded-2xl border border-ink/10 bg-ink/5 px-5 py-4">
                  <span className="font-display text-4xl tracking-tightest text-accent">
                    {s.metric.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {s.metric.label}
                  </span>
                </div>

                <div className="mt-10">
                  <Link
                    href={`/${locale}/contact`}
                    className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition"
                  >
                    {dict.common.scopeEngagement}
                  </Link>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <Card key={f.title}>
                      <h3 className="font-display text-xl tracking-tightest text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-500">{f.body}</p>
                    </Card>
                  ))}
                </div>

                <p className="mt-8 border-l-2 border-accent pl-4 font-display text-lg italic text-ink">
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
