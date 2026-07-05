"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading title="Work" subtitle="// where i've contributed" />

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass rounded-2xl p-8 border border-white/5 hover:border-[#00F5FF]/15 hover:shadow-[0_0_40px_rgba(0,245,255,0.06)] transition-all duration-500"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00F5FF] via-[#7B61FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-[#00F5FF]/5 text-[#00F5FF]/70 border border-[#00F5FF]/10">
                  {exp.type === "internship" ? "INTERNSHIP" : "FULL-TIME"}
                </span>
              </div>

              {/* Role */}
              <h3
                className="text-2xl font-bold text-white mb-1 group-hover:text-[#00F5FF] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exp.title}
              </h3>

              {/* Company & Period */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-white/40 text-sm">
                <span className="flex items-center gap-1.5">
                  <Briefcase size={13} className="text-[#7B61FF]" />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#00FFB2]" />
                  {exp.period}
                </span>
              </div>

              {/* Single impact line */}
              <p className="text-white/50 text-sm leading-relaxed">
                {exp.description[0]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
