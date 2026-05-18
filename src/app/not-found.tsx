import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen bg-paper font-sans text-sand antialiased">
        <section className="mx-auto flex max-w-[1200px] flex-col items-start px-6 py-32">
          <p className="eyebrow">Error · 404</p>
          <h1 className="mt-4 font-display text-6xl tracking-tightest text-balance text-ink sm:text-7xl">
            Page not found.
          </h1>
          <Link
            href="/"
            className="mt-10 rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition"
          >
            Back to home
          </Link>
        </section>
      </body>
    </html>
  );
}
