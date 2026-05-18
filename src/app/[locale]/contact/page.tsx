import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { brand } from "@/lib/brand";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).pages.contact.eyebrow };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const page = dict.pages.contact;

  return (
    <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <Card>
            <p className="eyebrow">{page.studioCardEyebrow}</p>
            <p className="mt-3 font-display text-2xl tracking-tightest text-ink">
              {dict.meta.location}
            </p>
            <p className="mt-2 text-sm text-ink-500">{page.studioCardBody}</p>
          </Card>
          <Card>
            <p className="eyebrow">{page.directCardEyebrow}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-3 block font-display text-2xl tracking-tightest text-ink hover:text-accent"
            >
              {brand.email}
            </a>
            <p className="mt-2 text-sm text-ink-500">{page.directCardBody}</p>
          </Card>
        </div>

        <form className="md:col-span-7 grid gap-4 md:grid-cols-2">
          <Field name="name" label={page.formNameLabel} />
          <Field name="email" label={page.formEmailLabel} type="email" />
          <Field name="company" label={page.formCompanyLabel} full />
          <Field name="industry" label={page.formIndustryLabel} full />
          <div className="md:col-span-2">
            <label className="eyebrow block">{page.formMessageLabel}</label>
            <textarea
              name="message"
              rows={6}
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper-deep px-4 py-3 text-sm text-ink placeholder-ink-300 focus:border-accent focus:outline-none"
              placeholder={page.formMessagePlaceholder}
            />
          </div>
          <button
            type="button"
            className="md:col-span-2 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition"
          >
            {dict.common.sendToStudio}
          </button>
          <p className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
            {page.formNote}
          </p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  full = false,
}: {
  name: string;
  label: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="eyebrow block">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper-deep px-4 py-3 text-sm text-ink placeholder-ink-300 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
