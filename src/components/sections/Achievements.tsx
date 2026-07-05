"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { achievements } from "@/lib/data";
import {
  TrendingUp,
  Recycle,
  Languages,
  Zap,
  Database,
  GraduationCap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "trending-up": TrendingUp,
  recycle: Recycle,
  languages: Languages,
  zap: Zap,
  database: Database,
  "graduation-cap": GraduationCap,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Achievements" subtitle="// impact metrics" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] || Zap;
            return (
              <GlassCard key={i} delay={i * 0.1} className="text-center group">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00F5FF]/10 to-[#7B61FF]/10 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_25px_rgba(0,245,255,0.2)] transition-all"
                >
                  <Icon size={24} className="text-[#00F5FF]" />
                </motion.div>

                {/* Metric */}
                <div
                  className="text-3xl font-bold text-[#00F5FF] mb-1 text-glow-cyan"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {achievement.metric}
                </div>

                {/* Label */}
                <h3
                  className="text-base font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {achievement.label}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm">{achievement.description}</p>
              </GlassCard>
            );
          })}
        </div>

        {/* Simulated GitHub Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00F5FF] via-[#7B61FF] to-[#00FFB2]" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Open Source Contributions
                </h3>
                <p className="text-xs text-white/40 font-mono mt-0.5">
                  // github activity simulation (Naveen8803)
                </p>
              </div>
              <div className="flex items-center gap-6 text-xs text-white/50 font-mono">
                <div>Longest Streak: <span className="text-[#00F5FF]">45 days</span></div>
                <div>Total Commits: <span className="text-[#00FFB2]">1,280+</span></div>
              </div>
            </div>

            {/* Heatmap Grid wrapper */}
            <div className="overflow-x-auto pb-2 custom-scrollbar">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[640px]">
                {Array.from({ length: 350 }).map((_, idx) => {
                  // Generate simulated git activity levels: 0 (none) to 4 (high)
                  // Make some random clusters for realism
                  const pseudoRandom = Math.sin(idx * 0.15) * Math.cos(idx * 0.05);
                  let level = 0;
                  if (pseudoRandom > 0.6) level = 4;
                  else if (pseudoRandom > 0.3) level = 3;
                  else if (pseudoRandom > 0) level = 2;
                  else if (pseudoRandom > -0.4) level = 1;

                  const colors = [
                    "bg-[#131936]/40 border border-white/5", // 0
                    "bg-[#002f35] hover:bg-[#003d45] border border-white/5", // 1
                    "bg-[#005a63] hover:bg-[#006e7a]", // 2
                    "bg-[#008d9b] hover:bg-[#00a6b7]", // 3
                    "bg-[#00f5ff] hover:bg-[#33f7ff] shadow-[0_0_10px_rgba(0,245,255,0.4)]", // 4
                  ];

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: (idx % 10) * 0.01 }}
                      className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${colors[level]} cursor-pointer`}
                      title={`Level ${level} activity`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 text-[10px] text-white/40 font-mono">
              <span>Less</span>
              <div className="flex gap-1 items-center">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#131936]/40 border border-white/5" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#002f35]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#005a63]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#008d9b]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#00f5ff]" />
              </div>
              <span>More</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
