import { Section } from "@/components/section";
import { Tag } from "@/components/tag";

export function OpenSource() {
  return (
    <Section
      id="open-source"
      kicker="OPEN SOURCE"
      title={
        <>
          A small dent in a <span className="text-accent">very large tool.</span>
        </>
      }
    >
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-start">
        <div className="bg-card border border-fg p-7 sm:p-8 shadow-hard">
          <div className="flex items-center gap-2 mb-4">
            <LighthouseGlyph />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              google / lighthouse
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display tracking-tightest mb-3 leading-tight">
            Authored a merged PR to Google Lighthouse.
          </h3>
          <p className="text-fg-soft leading-relaxed mb-5">
            Lighthouse is the web-performance auditing tool the rest of us use to grade our
            sites — used by millions of developers, baked into Chrome DevTools, PageSpeed
            Insights, and basically every CI performance gate worth running. Contributing to
            it sharpened my taste for the kind of details that move real-world performance
            numbers (and, yes, this site is built to score against it).
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag>Web performance</Tag>
            <Tag>Open source</Tag>
            <Tag>Merged PR</Tag>
          </div>
          <a
            href="https://github.com/niravzxv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold border border-fg px-4 py-2 bg-surface shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all"
          >
            View on GitHub
            <span aria-hidden>↗</span>
          </a>
        </div>

        <aside className="bg-card border border-fg p-7 shadow-hard">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            Why it matters
          </div>
          <ul className="space-y-3 text-sm text-fg-soft">
            <li className="flex gap-2">
              <span className="text-accent" aria-hidden>◆</span>
              Performance isn&apos;t a vibe. It&apos;s a number you can move.
            </li>
            <li className="flex gap-2">
              <span className="text-accent" aria-hidden>◆</span>
              Touching the tool that grades the web teaches you what it&apos;s actually measuring.
            </li>
            <li className="flex gap-2">
              <span className="text-accent" aria-hidden>◆</span>
              This portfolio is built against that same bar — 95+ Lighthouse, all categories.
            </li>
          </ul>
        </aside>
      </div>
    </Section>
  );
}

function LighthouseGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2 L13 6 L11 6 Z" fill="currentColor" />
      <rect x="9" y="7" width="6" height="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 22 L9 10 L15 10 L17 22 Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 14 L15 14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
