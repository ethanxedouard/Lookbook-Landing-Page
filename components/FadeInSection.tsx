"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  className = "",
}: FadeInSectionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease: "easeOut", delay: reduce ? 0 : delay }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
