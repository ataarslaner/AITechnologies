import Link from "next/link";
import { brand } from "@/lib/brand";
import { Wordmark } from "./Wordmark";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function SiteFooter({
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
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark dict={dict} />
            <p className="mt-5 max-w-md text-sm text-ink-500">
              {dict.meta.promise}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
              {dict.meta.location} · est. {brand.founded}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">{dict.nav.index}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/shop`} className="hover:text-ink">
                  {dict.nav.shop}
                  <span className="ml-2 rounded-full bg-ink/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-500">
                    {dict.common.soon}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Studio</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-ink">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.social.linkedin} className="hover:text-ink" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={brand.social.instagram} className="hover:text-ink" rel="noreferrer" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href={brand.social.x} className="hover:text-ink" rel="noreferrer" target="_blank">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300 md:flex-row">
          <p>© {new Date().getFullYear()} {dict.meta.longName}. All rights reserved.</p>
          <p>{dict.meta.origin}</p>
        </div>
      </div>
    </footer>
  );
}
