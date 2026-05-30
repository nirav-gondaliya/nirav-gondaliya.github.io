import { Section } from "@/components/section";

export function Mentoring() {
  return (
    <Section
      id="mentoring"
      kicker="MENTORING & LEADERSHIP"
      title={
        <>
          I make the next <span className="text-accent">engineer better.</span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-card border border-fg p-7 shadow-hard">
          <div className="font-display text-5xl leading-none text-accent mb-2">8</div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            Junior engineers mentored
          </div>
          <p className="text-fg-soft leading-relaxed">
            One-on-one mentoring across full-stack, system design and code review. Pairing,
            office hours, design docs reviewed line by line. The bar I hold them to is the
            bar I&apos;d want a teammate to hold me to.
          </p>
        </div>

        <div className="bg-card border border-fg p-7 shadow-hard">
          <div className="font-display text-5xl leading-none text-accent mb-2">4</div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            Engineers I led as technical liaison
          </div>
          <p className="text-fg-soft leading-relaxed">
            At Ratnam Solutions I was the bridge between the client&apos;s C-suite and a
            four-engineer team — breaking down vague asks into shippable scope, sequencing
            the work, unblocking people, owning the &quot;is it done?&quot; conversation.
          </p>
        </div>
      </div>
    </Section>
  );
}
