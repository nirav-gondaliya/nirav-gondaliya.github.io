"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StatusBadge } from "@/components/status-badge";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.21, 0.6, 0.32, 1], delay },
        };

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-24 sm:pt-16 sm:pb-32 overflow-hidden"
    >
      {/* Decorative original SVG accents — not derivative of any mascot */}
      <DecorTopRight />
      <DecorBottomLeft />

      <motion.div {...fade(0)}>
        <StatusBadge>
          OPEN TO SENIOR / FOUNDING REMOTE ROLES · AVAILABLE NOW
        </StatusBadge>
      </motion.div>

      <motion.h1
        {...fade(0.05)}
        className="mt-6 text-5xl sm:text-7xl md:text-[5.5rem] font-display tracking-tightest leading-[0.95]"
      >
        Nirav Gondaliya
      </motion.h1>

      <motion.p
        {...fade(0.12)}
        className="mt-6 max-w-3xl text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.15] tracking-tight"
      >
        Senior Full-Stack Engineer who builds{" "}
        <span className="scribble-underline">AI infrastructure</span>.
      </motion.p>

      <motion.p
        {...fade(0.18)}
        className="mt-6 max-w-2xl text-lg text-fg-soft leading-relaxed"
      >
        7+ years shipping production systems across fintech, healthtech and enterprise SaaS.
        I build the unglamorous infrastructure that makes AI products actually work — MCP
        servers, local LLM deployment, agentic pipelines, resilient data systems.
      </motion.p>

      <motion.div {...fade(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center bg-accent text-white px-5 py-3 text-base font-semibold border border-fg shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all"
        >
          View projects
          <span aria-hidden className="ml-2">↓</span>
        </a>
        <a
          href="mailto:nirav.gondaliya@icloud.com"
          className="inline-flex items-center bg-card text-fg px-5 py-3 text-base font-semibold border border-fg shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all"
        >
          Get in touch
          <span aria-hidden className="ml-2">→</span>
        </a>
      </motion.div>

      <motion.div
        {...fade(0.32)}
        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
      >
        {[
          ["7+", "years shipping"],
          ["5M+", "data points/day"],
          ["8", "engineers mentored"],
          ["1", "Lighthouse PR"],
        ].map(([n, l]) => (
          <div
            key={l}
            className="bg-card border border-fg p-3 shadow-hard-sm"
          >
            <div className="font-display text-3xl leading-none">{n}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              {l}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function DecorTopRight() {
  return (
    <svg
      aria-hidden
      className="absolute -top-6 right-2 hidden md:block text-accent"
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
    >
      <circle cx="80" cy="80" r="58" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
      <path d="M40 80 L120 80 M80 40 L80 120" stroke="currentColor" strokeWidth="2" />
      <rect x="74" y="74" width="12" height="12" fill="currentColor" />
    </svg>
  );
}

function DecorBottomLeft() {
  return (
    <svg
      aria-hidden
      className="absolute -bottom-4 -left-6 hidden md:block text-fg/70"
      width="180"
      height="60"
      viewBox="0 0 180 60"
      fill="none"
    >
      <path
        d="M2 30 Q 30 5, 60 30 T 120 30 T 178 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
