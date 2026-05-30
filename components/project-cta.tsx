import type { ProjectLinks } from "@/lib/data";

export function CardCTAs({ links }: { links: ProjectLinks }) {
  const ctas: { label: string; href: string }[] = [];
  if (links.repoUrl) ctas.push({ label: "View repository", href: links.repoUrl });
  if (links.demoUrl) ctas.push({ label: "Live demo", href: links.demoUrl });
  if (links.loomUrl) ctas.push({ label: "Watch walkthrough", href: links.loomUrl });
  const showPrivateBadge = links.isPrivate && !links.repoUrl;
  if (ctas.length === 0 && !showPrivateBadge) return null;
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
      {ctas.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-accent hover:underline"
        >
          {c.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
      {showPrivateBadge && <PrivateBadge />}
    </div>
  );
}

export function PrivateBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 bg-card border border-fg/40 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
      title="Client / NDA work — source not public"
    >
      Private · client work
    </span>
  );
}

export function primaryUrl(
  links: ProjectLinks,
): { href: string; label: string } | null {
  if (links.repoUrl) return { href: links.repoUrl, label: "View repository" };
  if (links.demoUrl) return { href: links.demoUrl, label: "Live demo" };
  if (links.loomUrl) return { href: links.loomUrl, label: "Watch walkthrough" };
  return null;
}
