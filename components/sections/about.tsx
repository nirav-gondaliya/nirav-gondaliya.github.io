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
          I work where the <span className="text-accent">customer is.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-fg-soft">
          <p>
            I&apos;m a Forward Deployed Engineer based in India, working fully remote with
            customers across India, the US and the UK. Seven-plus years embedding with real
            businesses — running requirement discovery directly with their stakeholders,
            prototyping solutions live with their teams, and owning deployment all the way
            through to incident response.
          </p>
          <p>
            Most of what I ship now is AI: MCP servers and clients, agent loops, multi-LLM
            routing, RAG over messy real-world data, on-device LLMs. Core stack is TypeScript,
            Node.js, React, Next.js, AWS, Postgres and MongoDB. AI-assisted development —
            Claude Code, Cursor, Aider — is built into the way I work, which is part of why I
            can sit on a customer&apos;s call in the morning and have something they can click
            by the afternoon.
          </p>
          <p>
            At Ratnam Solutions I was the technical lead embedded with a multinational QSR
            customer, serving brands including <span className="font-semibold text-fg">Burger
            King</span> and <span className="font-semibold text-fg">Belgian Waffles</span>{" "}
            across India and Indonesia — primary technical bridge between their C-suite and
            our 4-engineer team. I&apos;ve mentored 8 junior engineers, and I do my best work
            owning a system end-to-end from blank repo to the customer&apos;s production.
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
              How I work
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Discovery on the customer&apos;s call, not via a PM
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Prototype live with their team in the same week
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Own deploy, monitoring &amp; incident response
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>→</span>
                Translate C-suite asks into shippable scope
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
