import { Section } from "@/components/Section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.work.eyebrow };
}

export default function WorkPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const page = dict.pages.work;

  return (
    <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {dict.work.map((w, idx) => (
          <li
            key={w.title}
            className="grid gap-6 py-12 md:grid-cols-12 md:items-baseline"
          >
            <p className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
              {String(idx + 1).padStart(2, "0")}
            </p>
            <p className="md:col-span-2 eyebrow">{w.industry}</p>
            <h3 className="md:col-span-5 font-display text-3xl tracking-tightest text-ink sm:text-4xl">
              {w.title}
            </h3>
            <p className="md:col-span-3 text-ink-500">{w.summary}</p>
            <div className="md:col-span-1 text-right">
              <p className="font-display text-3xl text-accent">{w.outcome}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
                {w.duration}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
