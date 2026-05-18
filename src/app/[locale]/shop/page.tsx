import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.shop.eyebrow };
}

export default function ShopPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const page = dict.pages.shop;

  return (
    <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {page.items.map((p) => (
          <Card key={p.name}>
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-paper-deep to-paper-warm ring-1 ring-ink/10" />
            <h3 className="mt-4 font-display text-xl tracking-tightest text-ink">
              {p.name}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
              {p.note}
            </p>
            <p className="mt-3 inline-flex rounded-full bg-ink/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-500">
              {dict.common.comingSoon}
            </p>
          </Card>
        ))}
      </div>

      <div className="glass mt-14 rounded-3xl p-10">
        <h3 className="font-display text-3xl tracking-tightest text-ink">
          {page.newsletterTitle}
        </h3>
        <p className="mt-3 max-w-xl text-ink-500">{page.newsletterBody}</p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder={page.emailPlaceholder}
            className="flex-1 rounded-full border border-ink/10 bg-paper-deep px-5 py-3 text-sm text-ink placeholder-ink-300 focus:border-accent focus:outline-none"
          />
          <button
            type="button"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition"
          >
            {dict.common.notifyMe}
          </button>
        </form>
      </div>
    </Section>
  );
}
