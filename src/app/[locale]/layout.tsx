import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: {
      default: `${brand.name} — ${dict.meta.tagline}`,
      template: `%s · ${brand.name}`,
    },
    description: dict.meta.promise,
    openGraph: {
      title: `${brand.name} — ${dict.meta.tagline}`,
      description: dict.meta.promise,
      url: `https://${brand.domain}/${params.locale}`,
      siteName: brand.name,
      type: "website",
      locale: params.locale === "tr" ? "tr_TR" : "en_US",
    },
    alternates: {
      languages: {
        en: "/en",
        tr: "/tr",
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} dict={dict} />
      <main>{children}</main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
