import { Section } from "@/components/section";

const LINKS = [
  {
    label: "Email",
    value: "nirav.gondaliya@icloud.com",
    href: "mailto:nirav.gondaliya@icloud.com",
  },
  {
    label: "Phone",
    value: "+91 6354 010 189",
    href: "tel:+916354010189",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/niravzxv",
    href: "https://www.linkedin.com/in/niravzxv",
  },
  {
    label: "GitHub",
    value: "github.com/niravzxv",
    href: "https://github.com/niravzxv",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      kicker="CONTACT"
      title={
        <>
          Building something <span className="text-accent">from scratch?</span>
          <br />
          Let&apos;s talk.
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-fg p-7 shadow-hard">
          <ul className="space-y-4">
            {LINKS.map((l) => (
              <li key={l.label} className="flex items-baseline justify-between gap-4 border-b border-fg/15 pb-3 last:border-0 last:pb-0">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted shrink-0">
                  {l.label}
                </span>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-medium text-fg hover:text-accent transition-colors text-right break-all"
                >
                  {l.value}
                </a>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted shrink-0">
                Location
              </span>
              <span className="text-right">Rajkot, Gujarat, India · Remote</span>
            </li>
          </ul>
        </div>

        <div className="bg-card border border-fg p-7 shadow-hard flex flex-col">
          <p className="text-lg text-fg-soft leading-relaxed flex-1">
            I read every cold email. The fastest way to get a real reply is to tell me what
            you&apos;re building, who&apos;s on the team, and what would make the next 90 days a win.
          </p>
          <a
            href="mailto:nirav.gondaliya@icloud.com?subject=Senior%20%2F%20Founding%20role"
            className="mt-6 inline-flex items-center justify-center bg-accent text-white px-5 py-3 font-semibold border border-fg shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all"
          >
            Start the conversation
            <span aria-hidden className="ml-2">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
