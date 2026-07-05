"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { certifications } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Certifications" subtitle="// credentials" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <GlassCard key={i} delay={i * 0.1} className="group relative overflow-hidden">
              {/* Gradient top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5FF]/10 to-[#7B61FF]/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all">
                  <Award size={22} className="text-[#00F5FF]" />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-base font-bold text-white mb-1 group-hover:text-[#00F5FF] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-white/50 text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
                    {cert.issuer}
                  </p>
                </div>

                <ExternalLink
                  size={16}
                  className="text-white/20 group-hover:text-[#00F5FF] transition-colors shrink-0 mt-1"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
