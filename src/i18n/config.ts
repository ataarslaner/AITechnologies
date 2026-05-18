export const locales = ["en", "tr"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { name: string; flag: string }> = {
  en: { name: "English", flag: "EN" },
  tr: { name: "Türkçe", flag: "TR" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
