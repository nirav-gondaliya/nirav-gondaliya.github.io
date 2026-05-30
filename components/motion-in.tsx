"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function MotionIn({
  children,
  delay = 0,
  y = 14,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.21, 0.6, 0.32, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
