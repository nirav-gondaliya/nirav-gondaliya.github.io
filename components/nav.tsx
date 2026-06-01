"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "OSS" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? "bg-surface/85 backdrop-blur-md border-b border-fg/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight inline-flex items-center gap-2"
            aria-label="Nirav Gondaliya — home"
          >
            <span className="inline-block h-3 w-3 bg-accent border border-fg" aria-hidden />
            nirav.gondaliya
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-fg-soft hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Nirav-Gondaliya-Resume.pdf"
              className="ml-2 inline-flex items-center gap-1.5 bg-card text-fg px-3 py-2 text-sm font-semibold border border-fg shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all"
              aria-label="Download résumé (PDF)"
            >
              <DownloadIcon />
              Resume
            </a>
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center border border-fg bg-card shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="mailto:nirav.gondaliya@icloud.com"
              className="ml-2 inline-flex items-center bg-accent text-white px-3 py-2 text-sm font-semibold border border-fg shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all"
            >
              Hire me →
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-9 w-9 items-center justify-center border border-fg bg-card"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center border border-fg bg-card"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 border-t border-fg/15">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-medium border-b border-fg/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Nirav-Gondaliya-Resume.pdf"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 bg-card text-fg px-3 py-3 font-semibold border border-fg"
              >
                <DownloadIcon />
                Download résumé
              </a>
              <a
                href="mailto:nirav.gondaliya@icloud.com"
                className="mt-2 inline-flex justify-center bg-accent text-white px-3 py-3 font-semibold border border-fg"
              >
                Hire me →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
