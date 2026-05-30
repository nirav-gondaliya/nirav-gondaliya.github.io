import { ReactNode } from "react";

export function Section({
  id,
  kicker,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  kicker?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 ${className}`}
    >
      {kicker && (
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
          <span aria-hidden>◆</span>
          <span>{kicker}</span>
        </div>
      )}
      {title && (
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tightest leading-[1.05] mb-4">
          {title}
        </h2>
      )}
      {intro && (
        <p className="max-w-3xl text-lg text-fg-soft mb-12 leading-relaxed">{intro}</p>
      )}
      {children}
    </section>
  );
}
