import Link from "next/link";

// Generic, locale-agnostic fallback. Locale not-found is handled below.
export default function LocaleNotFound() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-start px-6 py-32">
      <p className="eyebrow">Error · 404</p>
      <h1 className="mt-4 font-display text-6xl tracking-tightest text-balance text-ink sm:text-7xl">
        Lost on the island.
      </h1>
      <p className="mt-6 max-w-xl text-ink-500">
        The page you are looking for has drifted off.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition"
      >
        Back to home
      </Link>
    </section>
  );
}
