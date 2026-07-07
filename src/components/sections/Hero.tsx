"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Send } from "lucide-react";
import TypewriterText from "../ui/TypewriterText";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816] z-1" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 w-full flex flex-col items-center">
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50 text-xs font-mono tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2] animate-pulse" />
          {heroData.tagline}
        </motion.div>

        {/* Main Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heroData.statement.split("\n").map((line, i) => (
            <span key={i}>
              {i === 0 ? (
                <span className="text-white">{line}</span>
              ) : (
                <span className="gradient-text">{line}</span>
              )}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Rotating expertise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-3 text-white/40 text-sm font-mono"
        >
          <span className="text-white/20">Specializing in</span>
          <span className="text-[#00F5FF]">
            <TypewriterText
              texts={heroData.titles}
              speed={60}
              deleteSpeed={30}
              pauseTime={2500}
            />
          </span>
        </motion.div>

        {/* CTAs — refined, not chunky */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          {/* Primary — subtle gradient border, not filled */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium overflow-hidden transition-all duration-500"
          >
            {/* Gradient border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] p-[1px]">
              <span className="w-full h-full rounded-full bg-[#050816] block group-hover:bg-[#0a0f2c] transition-colors duration-500" />
            </span>
            <span className="relative z-10 text-white/90 group-hover:text-white flex items-center gap-2.5 transition-colors">
              See My Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          {/* Secondary — ghost */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-500"
          >
            <Send size={13} className="group-hover:rotate-12 transition-transform duration-300" />
            Get In Touch
          </a>
        </motion.div>

        {/* Availability line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/25"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
          Open to internships &amp; collaborations
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-white/15" />
        </motion.div>
      </motion.div>
    </section>
  );
}
