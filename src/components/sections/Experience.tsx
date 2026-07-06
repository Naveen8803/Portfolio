"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Experience" subtitle="// where i've worked" />

        <div className="border-l border-white/[0.08]">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative pl-10 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#00F5FF] ring-4 ring-[#00F5FF]/10" />

              {/* Period */}
              <p className="text-[11px] font-mono tracking-widest text-white/30 uppercase">
                {exp.period}
              </p>

              {/* Role */}
              <h3
                className="text-xl md:text-2xl font-bold text-white mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exp.title}
              </h3>

              {/* Company · Location */}
              <p className="text-white/45 text-sm mt-1">
                {exp.company} · {exp.location}
              </p>

              {/* Description */}
              <ul className="space-y-2 mt-4">
                {exp.description.map((line) => (
                  <li
                    key={line}
                    className="text-white/60 text-[15px] leading-relaxed"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              {exp.metrics && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {exp.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                    >
                      <span className="text-[#00F5FF] font-semibold font-mono text-sm">
                        {metric.value}
                      </span>{" "}
                      <span className="text-white/40 text-xs">
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
