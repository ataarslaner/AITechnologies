import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  id,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-[1200px] px-6 py-24 sm:py-28 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          </div>
          <div className="md:col-span-8">
            {title && (
              <h2 className="font-display text-4xl leading-[1.05] tracking-tightest text-balance text-white sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
                {intro}
              </p>
            )}
          </div>
        </div>
      )}
      <div className={(eyebrow || title || intro) ? "mt-14" : ""}>{children}</div>
    </section>
  );
}
