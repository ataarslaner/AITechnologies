import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.studio.eyebrow };
}

export default function StudioPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const page = dict.pages.studio;

  return (
    <>
      <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <div className="grid gap-5 md:grid-cols-3">
          {dict.studio.team.map((m) => (
            <Card key={m.name}>
              <p className="eyebrow">{m.role}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tightest text-ink">
                {m.name}
              </h3>
              <p className="mt-3 text-sm text-ink-500">{m.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={page.journeyEyebrow} title={page.journeyTitle}>
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 md:grid-cols-4">
          {dict.studio.journey.map((j) => (
            <li key={j.step} className="bg-paper-warm p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {j.step}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-tightest text-ink">
                {j.title}
              </h3>
              <p className="mt-3 text-sm text-ink-500">{j.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={page.faqEyebrow} title={page.faqTitle}>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {dict.studio.faq.map((f) => (
            <div key={f.q} className="grid gap-4 py-8 md:grid-cols-12">
              <h3 className="md:col-span-5 font-display text-xl tracking-tightest text-ink sm:text-2xl">
                {f.q}
              </h3>
              <p className="md:col-span-7 text-ink-500">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
