import { Section } from "@/components/section";
import { MotionIn } from "@/components/motion-in";
import { Tag } from "@/components/tag";
import { CardCTAs, primaryUrl } from "@/components/project-cta";
import { FEATURED_PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="FEATURED WORK"
      title={
        <>
          Projects that <span className="text-accent">paid the bills.</span>
        </>
      }
      intro="A sample of systems I've owned end-to-end. Real users, real money, real failure modes."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {FEATURED_PROJECTS.map((p, i) => {
          const primary = primaryUrl(p);
          return (
            <MotionIn key={p.title} delay={i * 0.04}>
              <article className="group bg-card border border-fg p-6 h-full flex flex-col shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  {primary && (
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} — ${primary.label}`}
                      className="shrink-0 inline-flex h-9 w-9 items-center justify-center border border-fg bg-surface hover:bg-accent hover:text-white transition-colors"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>

                <dl className="space-y-3 text-sm flex-1">
                  <Field label="The problem">{p.problem}</Field>
                  <Field label="What I built">{p.built}</Field>
                  <Field label="My role">{p.role}</Field>
                </dl>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <CardCTAs links={p} />
              </article>
            </MotionIn>
          );
        })}
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
        {label}
      </dt>
      <dd className="text-fg-soft leading-relaxed">{children}</dd>
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
