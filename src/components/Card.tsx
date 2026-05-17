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
      className={`glass rounded-2xl p-7 transition hover:border-white/15 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </div>
  );
}
