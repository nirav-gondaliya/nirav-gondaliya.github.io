export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 bg-card border border-fg px-2 py-1 font-mono text-[11px] uppercase tracking-wide shadow-hard-sm">
      {children}
    </span>
  );
}
