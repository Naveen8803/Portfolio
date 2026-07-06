"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { aboutData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" subtitle="// who i am" />

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {aboutData.narrative.map((paragraph) => (
              <p
                key={paragraph}
                className="text-white/60 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right — Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6">
                {"// tech i work with"}
              </p>

              <div className="flex flex-wrap gap-2">
                {aboutData.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-lg text-[13px] text-white/55 bg-white/[0.04] border border-white/[0.06] hover:text-[#00F5FF] hover:border-[#00F5FF]/20 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
