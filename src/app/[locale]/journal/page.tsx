import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.journal.eyebrow };
}

export default function JournalPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const page = dict.pages.journal;

  return (
    <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <div className="grid gap-5 md:grid-cols-3">
        {page.entries.map((e) => (
          <Card key={e.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
              {e.date}
            </p>
            <h3 className="mt-3 font-display text-xl tracking-tightest text-ink">
              {e.title}
            </h3>
            <p className="mt-3 text-sm text-ink-500">{e.summary}</p>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {dict.common.comingSoon} →
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
