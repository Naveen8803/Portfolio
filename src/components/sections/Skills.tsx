"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { skillCategories } from "@/lib/data";
import { Code, Brain, BarChart3, Globe, Wrench } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  brain: Brain,
  "bar-chart-3": BarChart3,
  globe: Globe,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="// what i work with" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden border border-white/[0.07]">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-[#0a0f24] p-8"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-[#00F5FF]" />
                  <h3
                    className="text-white text-base font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg text-[13px] text-white/55 bg-white/[0.04] border border-white/[0.06] hover:text-white hover:border-white/[0.15] transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Filler cell */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: skillCategories.length * 0.06 }}
            className="bg-[#0a0f24] p-8 flex items-center"
          >
            <p
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              always learning &rarr;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
