import { Section } from "@/components/section";
import { MotionIn } from "@/components/motion-in";
import { CardCTAs, PrivateBadge, primaryUrl } from "@/components/project-cta";
import { MORE_TOOLS } from "@/lib/data";

export function Tools() {
  return (
    <Section
      id="tools"
      kicker="MORE TOOLS"
      title={
        <>
          Small things I&apos;ve <span className="text-accent">shipped on a Sunday.</span>
        </>
      }
      intro="20+ tools built — these are a sample. Some scratch my own itch, some still get daily use."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MORE_TOOLS.map((t, i) => {
          const primary = primaryUrl(t);
          const showCornerBadge = t.isPrivate && !primary;
          return (
            <MotionIn key={t.title} delay={i * 0.03}>
              <div className="group block bg-card border border-fg p-5 shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard hover:bg-soft transition-all h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold tracking-tight leading-tight">{t.title}</h3>
                  {primary ? (
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${t.title} — ${primary.label}`}
                      className="font-mono text-xs text-muted hover:text-accent transition-colors shrink-0"
                    >
                      ↗
                    </a>
                  ) : showCornerBadge ? (
                    <PrivateBadge />
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-fg-soft leading-relaxed">{t.blurb}</p>
                {primary && <CardCTAs links={t} />}
              </div>
            </MotionIn>
          );
        })}
      </div>
    </Section>
  );
}
