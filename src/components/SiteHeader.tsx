import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Ada House home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_rgba(244,63,94,0.35)] hover:bg-accent-soft transition"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
