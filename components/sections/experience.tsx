import { Section } from "@/components/section";
import { MotionIn } from "@/components/motion-in";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="EXPERIENCE"
      title={
        <>
          Seven years <span className="text-accent">in production.</span>
        </>
      }
      intro="Every role here shipped something users depend on — not pitch-deck prototypes."
    >
      <ol className="relative" aria-label="Work experience timeline">
        {EXPERIENCE.map((role, i) => (
          <li key={role.company + role.period} className="relative pl-8 sm:pl-12 pb-12 last:pb-0">
            {/* Dotted connector */}
            {i < EXPERIENCE.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[7px] sm:left-[15px] top-6 bottom-0 w-px dot-connector"
              />
            )}
            {/* Node */}
            <span
              aria-hidden
              className="absolute left-0 sm:left-2 top-2 inline-flex h-4 w-4 items-center justify-center"
            >
              <span className="absolute inset-0 bg-accent" />
              <span className="absolute inset-0 border border-fg" />
            </span>

            <MotionIn>
              <div className="bg-card border border-fg p-6 sm:p-7 shadow-hard">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {role.title}
                      <span className="text-muted font-normal"> · {role.company}</span>
                    </h3>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted shrink-0">
                    {role.period} · {role.location}
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-fg-soft leading-relaxed">
                      <span className="mt-2 inline-block h-1.5 w-1.5 bg-accent shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
