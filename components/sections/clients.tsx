import { Section } from "@/components/section";
import { Tag } from "@/components/tag";

export function Clients() {
  return (
    <Section
      id="clients"
      kicker="CLIENTS & REACH"
      title={
        <>
          Across three continents, one keyboard.
        </>
      }
    >
      <div className="bg-card border border-fg p-7 sm:p-8 shadow-hard">
        <p className="text-lg sm:text-xl text-fg-soft leading-relaxed">
          I&apos;ve delivered for clients and stakeholders across{" "}
          <span className="font-semibold text-fg">India</span>,{" "}
          <span className="font-semibold text-fg">the United States</span>, and{" "}
          <span className="font-semibold text-fg">the United Kingdom</span> — from
          founders moving fast on a first build, to enterprise teams where the
          decision-maker was on a board call ten minutes after we hung up.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>🇮🇳 India</Tag>
          <Tag>🇺🇸 United States</Tag>
          <Tag>🇬🇧 United Kingdom</Tag>
          <Tag>Enterprise · C-suite</Tag>
          <Tag>Startup founders</Tag>
        </div>
      </div>
    </Section>
  );
}
