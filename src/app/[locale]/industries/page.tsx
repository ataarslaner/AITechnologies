import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.industries.eyebrow };
}

export default function IndustriesPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const page = dict.pages.industries;

  return (
    <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <div className="grid gap-5 sm:grid-cols-2">
        {dict.industries.map((i) => (
          <Card key={i.name}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl tracking-tightest text-ink">
                {i.name}
              </h3>
              <span className="font-display text-2xl text-accent">{i.metric}</span>
            </div>
            <p className="mt-4 text-ink-500">{i.pitch}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
