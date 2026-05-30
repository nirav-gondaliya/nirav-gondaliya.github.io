import { Section } from "@/components/section";
import { Tag } from "@/components/tag";
import { CORE_STACK } from "@/lib/data";

export function About() {
  return (
    <Section
      id="about"
      kicker="ABOUT"
      title={
        <>
          Engineer first. <span className="text-accent">Founder-shaped.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-fg-soft">
          <p>
            I&apos;m a senior full-stack engineer based in India, working fully remote for the
            last few years. Seven-plus years of shipping production systems — most of them
            things real businesses pay for, monitor, and depend on every day. Core stack:
            TypeScript, Node.js, React, Next.js, AWS, Postgres and MongoDB.
          </p>
          <p>
            The half of the job I love most is the AI side: agentic pipelines, multi-LLM
            routing, RAG over messy real-world data, on-device LLMs, MCP servers. AI-assisted
            development — Claude Code, Cursor, Aider — is built into the way I work, not a
            bolt-on. It&apos;s the reason I ship 2–3× faster than I did two years ago, and the
            reason I expect anyone I work with to do the same.
          </p>
          <p>
            I&apos;ve partnered directly with stakeholders in India, the US, and the UK — including
            enterprise teams where the C-suite was on the call. I&apos;ve mentored 8 junior
            engineers from &quot;help, my tests are failing&quot; to confidently leading features. I do
            my best work when I own a system end-to-end, from a blank repo to production.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="bg-card border border-fg p-5 shadow-hard">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
              Core stack
            </div>
            <div className="flex flex-wrap gap-2">
              {CORE_STACK.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="bg-card border border-fg p-5 shadow-hard">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
              Currently focused on
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                MCP servers for real-world payments &amp; ops APIs
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Self-correcting local agentic pipelines
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Multi-tenant infra automation
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
