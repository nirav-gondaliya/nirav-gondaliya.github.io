import { Section } from "@/components/section";
import { Tag } from "@/components/tag";

export function Clients() {
  return (
    <Section
      id="clients"
      kicker="CUSTOMERS I'VE BEEN EMBEDDED WITH"
      title={
        <>
          Across three continents, <span className="text-accent">on their calls.</span>
        </>
      }
    >
      <div className="bg-card border border-fg p-7 sm:p-8 shadow-hard">
        <p className="text-lg sm:text-xl text-fg-soft leading-relaxed">
          As the embedded technical lead at Ratnam Solutions, I delivered for a
          multinational QSR customer operating across India and Indonesia — including
          flagship brands like{" "}
          <span className="font-semibold text-fg">Burger King</span> and{" "}
          <span className="font-semibold text-fg">Belgian Waffles</span>. Across roles
          I&apos;ve partnered directly with stakeholders in{" "}
          <span className="font-semibold text-fg">India</span>,{" "}
          <span className="font-semibold text-fg">the United States</span> and{" "}
          <span className="font-semibold text-fg">the United Kingdom</span> — from
          founders moving fast on a first build to enterprise teams where the
          decision-maker was on a board call ten minutes after we hung up.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="border border-fg p-4 bg-surface">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
              Embedded at Ratnam Solutions
            </div>
            <div className="font-semibold">Burger King · Belgian Waffles</div>
            <div className="mt-1 text-sm text-fg-soft">
              Multinational QSR · India + Indonesia · real-time B2B analytics for the C-suite
            </div>
          </div>
          <div className="border border-fg p-4 bg-surface">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
              Independent &amp; prior engagements
            </div>
            <div className="font-semibold">Clinics · Retail chains · SaaS · Lenders</div>
            <div className="mt-1 text-sm text-fg-soft">
              Telehealth, ERP/CRM, multi-tenant provisioning, financial-loan systems
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>QSR · Burger King</Tag>
          <Tag>QSR · Belgian Waffles</Tag>
          <Tag>India</Tag>
          <Tag>United States</Tag>
          <Tag>United Kingdom</Tag>
          <Tag>Enterprise · C-suite</Tag>
          <Tag>Startup founders</Tag>
        </div>
      </div>
    </Section>
  );
}
