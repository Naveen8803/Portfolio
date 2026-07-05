"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/90 font-medium">{name}</span>
        <span
          className="text-xs text-[#00F5FF]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, #00F5FF, #7B61FF)`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "shimmer 2s infinite",
              backgroundSize: "200% 100%",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
