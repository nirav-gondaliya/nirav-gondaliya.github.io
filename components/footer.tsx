export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-fg/20 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
        <div className="font-mono text-xs text-muted">
          © {year} Nirav Gondaliya · Built with Next.js, Tailwind &amp; quiet stubbornness.
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <a href="https://github.com/niravzxv" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/niravzxv" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="mailto:nirav.gondaliya@icloud.com" className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
