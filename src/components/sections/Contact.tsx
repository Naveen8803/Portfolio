"use client";

import { motion } from "framer-motion";
import { contactData } from "@/lib/data";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Overline */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-white/25 mb-6"
        >
          // what&apos;s next?
        </motion.span>

        {/* Big CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-white">Let&apos;s build </span>
          <span className="gradient-text">something together.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-lg max-w-lg mx-auto mb-12"
        >
          I&apos;m currently open to internships, collaborations, and interesting projects.
          Drop me a line — I&apos;d love to hear from you.
        </motion.p>

        {/* Email CTA — gradient-border pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <a
            href={`mailto:${contactData.email}`}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base font-medium overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] p-[1px]">
              <span className="w-full h-full rounded-full bg-[#050816] block group-hover:bg-[#0a0f2c] transition-colors duration-500" />
            </span>
            <span className="relative z-10 text-white/90 group-hover:text-white flex items-center gap-3 transition-colors">
              <Mail size={16} />
              Say Hello
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
          <div className="mt-5">
            <a
              href={`mailto:${contactData.email}`}
              className="font-mono text-sm text-white/25 hover:text-[#00F5FF] transition-colors duration-300"
            >
              {contactData.email}
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/[0.06] text-white/30 hover:text-white/60 hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300"
          >
            <FaGithub size={14} />
            GitHub
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/[0.06] text-white/30 hover:text-white/60 hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300"
          >
            <FaLinkedinIn size={14} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
