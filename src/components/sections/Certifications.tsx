"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="// credentials"
        />

        <div className="divide-y divide-white/[0.06]">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-5 flex items-center gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center shrink-0">
                <Award size={16} className="text-[#00F5FF]/70" />
              </div>
              <div>
                <p className="text-white/85 text-[15px] font-medium">
                  {cert.title}
                </p>
                <p className="text-white/35 text-xs mt-0.5">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
