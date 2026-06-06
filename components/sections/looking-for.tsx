import { Section } from "@/components/section";

export function LookingFor() {
  return (
    <Section id="looking-for" kicker="WHAT I'M LOOKING FOR">
      <div className="relative bg-card border border-fg p-8 sm:p-12 shadow-hard">
        <div
          aria-hidden
          className="absolute -top-4 left-6 inline-flex items-center gap-2 bg-accent text-white px-3 py-1 font-mono text-xs uppercase tracking-widest border border-fg"
        >
          Hiring? Read this.
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-display tracking-tightest leading-[1.15]">
          Forward Deployed / Customer Engineering / founding{" "}
          <span className="scribble-underline">AI delivery</span>{" "}
          roles. Remote, on the customer&apos;s calls, owning the work from discovery to
          production. Open to full-time or contract.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <Fit label="Role" value="Forward Deployed · Customer Engineer · Founding" />
          <Fit label="Setup" value="Remote, on the customer's calls" />
          <Fit label="Shape" value="Full-time or contract" />
        </div>
      </div>
    </Section>
  );
}

function Fit({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-fg p-4 bg-surface">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
        {label}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
