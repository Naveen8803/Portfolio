"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { aboutData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="// who am i" />

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Animated Tech Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating orbit rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-[#00F5FF]/10" style={{ animation: "spin 25s linear infinite reverse" }} />
              <div className="absolute inset-12 rounded-full border border-[#7B61FF]/10 animate-spin-slow" />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span
                    className="text-5xl md:text-6xl font-bold gradient-text block"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    NV
                  </span>
                  <span className="text-white/20 text-[10px] font-mono tracking-widest mt-2 block">
                    TECH STACK
                  </span>
                </div>
              </div>

              {/* Floating tech chips around the orbit */}
              {aboutData.techStack.map((tech, i) => {
                const total = aboutData.techStack.length;
                const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
                const radius = 42; // percentage from center
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="absolute px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.04] border border-white/10 text-white/50 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 hover:bg-[#00F5FF]/5 transition-all duration-300 cursor-default whitespace-nowrap"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Narrative */}
          <div className="space-y-8 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {aboutData.narrative}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
