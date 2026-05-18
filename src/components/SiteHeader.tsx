import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { LocaleSwitcher } from "./LocaleSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/industries`, label: dict.nav.industries },
    { href: `/${locale}/studio`, label: dict.nav.studio },
    { href: `/${locale}/journal`, label: dict.nav.journal },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4">
        <Link href={`/${locale}`} aria-label="Ada House">
          <Wordmark dict={dict} />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-500 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher current={locale} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper shadow-[0_8px_24px_rgba(10,31,68,0.22)] hover:bg-accent-soft transition"
          >
            {dict.common.startProject}
          </Link>
        </div>
      </div>
    </header>
  );
}
