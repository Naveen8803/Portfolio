"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import CircularSkill from "../ui/CircularSkill";
import { skillCategories } from "@/lib/data";
import {
  Code,
  Brain,
  BarChart3,
  Globe,
  Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  brain: Brain,
  "bar-chart-3": BarChart3,
  globe: Globe,
  wrench: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills & Expertise" subtitle="// tech stack" />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveCategory(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === i
                    ? "bg-gradient-to-r from-[#00F5FF]/20 to-[#7B61FF]/20 border border-[#00F5FF]/40 text-[#00F5FF] shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                    : "glass text-white/60 hover:text-white/80 hover:border-white/20"
                }`}
              >
                <Icon size={16} />
                {cat.title}
              </motion.button>
            );
          })}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <CircularSkill
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.05}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All skills overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm mb-4 font-mono" style={{ fontFamily: "var(--font-mono)" }}>
            // all technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(0, 245, 255, 0.1)",
                    borderColor: "rgba(0, 245, 255, 0.3)",
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs text-white/50 bg-white/[0.03] border border-white/[0.06] transition-all cursor-default"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
