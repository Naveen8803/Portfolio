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
          className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6"
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
          className="text-white/45 text-lg max-w-lg mx-auto mb-12"
        >
          I&apos;m currently open to internships, collaborations, and interesting projects.
          Drop me a line — I&apos;d love to hear from you.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <a
            href={`mailto:${contactData.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] text-[#050816] hover:shadow-[0_0_50px_rgba(0,245,255,0.3)] transition-all duration-500"
          >
            <Mail size={18} />
            Say Hello
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <div className="mt-6">
            <a
              href={`mailto:${contactData.email}`}
              className="font-mono text-sm text-white/35 hover:text-[#00F5FF] transition-colors"
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
          className="flex items-center justify-center gap-6"
        >
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/30 hover:text-[#00F5FF] transition-colors"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <span className="w-[1px] h-4 bg-white/10" />
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/30 hover:text-[#00F5FF] transition-colors"
          >
            <FaLinkedinIn size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
