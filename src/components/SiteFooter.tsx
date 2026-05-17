import Link from "next/link";
import { brand } from "@/lib/brand";
import { navLinks } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-md text-sm text-white/60">{brand.promise}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              {brand.location} · est. {brand.founded}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Index</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="hover:text-white">
                  Shop
                  <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
                    soon
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Studio</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.social.linkedin} className="hover:text-white" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={brand.social.instagram} className="hover:text-white" rel="noreferrer" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href={brand.social.x} className="hover:text-white" rel="noreferrer" target="_blank">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {brand.longName}. All rights reserved.</p>
          <p>{brand.origin}</p>
        </div>
      </div>
    </footer>
  );
}
