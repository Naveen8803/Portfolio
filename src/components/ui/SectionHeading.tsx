"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#00F5FF] text-sm font-mono tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {subtitle}
        </motion.p>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold gradient-text-static inline-block"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className={`h-1 mt-4 rounded-full bg-gradient-to-r from-[#00F5FF] via-[#7B61FF] to-[#00FFB2] ${
          align === "center" ? "mx-auto w-24" : "w-24"
        }`}
      />
    </motion.div>
  );
}
