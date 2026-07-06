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
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#00F5FF]/80 text-[11px] font-mono tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {subtitle}
        </motion.p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className={`h-[2px] mt-5 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] ${
          align === "center" ? "mx-auto w-16" : "w-16"
        }`}
      />
    </motion.div>
  );
}
