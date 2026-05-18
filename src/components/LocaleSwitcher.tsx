"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/i18n/config";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === current) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    const segments = (pathname ?? "/").split("/");
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-ink/5 p-0.5 font-mono text-[11px] uppercase tracking-[0.22em]">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={`rounded-full px-2.5 py-1 transition ${
            l === current
              ? "bg-ink/10 text-ink"
              : "text-ink-500 hover:text-ink"
          }`}
          aria-label={localeMeta[l].name}
        >
          {localeMeta[l].flag}
        </button>
      ))}
    </div>
  );
}
