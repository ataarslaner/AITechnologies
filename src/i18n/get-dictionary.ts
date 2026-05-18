import { en, type Dictionary } from "./dictionaries/en";
import { tr } from "./dictionaries/tr";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
