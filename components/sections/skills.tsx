import { Section } from "@/components/section";
import { MotionIn } from "@/components/motion-in";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="SKILLS"
      title={
        <>
          Things I&apos;ve actually <span className="text-accent">shipped with.</span>
        </>
      }
      intro="Grouped by where they live in my brain. Every entry is something I'd be comfortable being interviewed on or sitting down to ship in production."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group, i) => (
          <MotionIn key={group.name} delay={i * 0.03}>
            <div className="bg-card border border-fg p-5 shadow-hard h-full">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
                {group.name}
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="bg-surface border border-fg px-2 py-1 font-mono text-[11px] tracking-tight shadow-hard-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MotionIn>
        ))}
      </div>
    </Section>
  );
}
