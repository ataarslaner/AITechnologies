import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-7 transition hover:border-ink/15 hover:bg-ink/[0.04] ${className}`}
    >
      {children}
    </div>
  );
}
