"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience" subtitle="// where i've worked" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-8 md:p-10 transition-all duration-500"
            >
              {/* Top row: role + period */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5FF]/10 to-[#7B61FF]/10 border border-white/[0.08] flex items-center justify-center shrink-0">
                      <Briefcase size={16} className="text-[#00F5FF]" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-white group-hover:text-[#00F5FF] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-white/55 text-sm font-medium">
                          {exp.company}
                        </span>
                        <span className="text-white/15">·</span>
                        <span className="inline-flex items-center gap-1 text-white/35 text-xs">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono tracking-wider text-white/35 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <ul className="space-y-3 ml-[52px] md:ml-[52px]">
                {exp.description.map((line) => (
                  <li
                    key={line}
                    className="relative text-white/50 text-[15px] leading-relaxed pl-4 before:absolute before:left-0 before:top-[10px] before:w-1 before:h-1 before:rounded-full before:bg-[#00F5FF]/40"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              {exp.metrics && (
                <div className="flex flex-wrap gap-3 mt-6 ml-[52px] md:ml-[52px]">
                  {exp.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5FF]/[0.04] border border-[#00F5FF]/[0.08]"
                    >
                      <ArrowUpRight size={12} className="text-[#00F5FF]/60" />
                      <span className="text-[#00F5FF] font-semibold font-mono text-sm">
                        {metric.value}
                      </span>
                      <span className="text-white/35 text-xs">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
