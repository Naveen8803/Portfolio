"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Menu, X } from "lucide-react";
import { contactData, heroData, navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <span
            className="text-lg font-bold gradient-text-static tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Naveen Varma
          </span>
          <span className="hidden sm:inline-block text-white/20 text-[11px] font-mono">
            / {heroData.tagline}
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-[13px] text-white/45 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side: socials + resume */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1">
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          <span className="hidden md:inline-block h-4 w-[1px] bg-white/[0.08] mx-1" />

          {/* Resume button — refined pill with subtle glow */}
          <a
            href={heroData.resumeUrl}
            target="_blank"
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2] group-hover:animate-pulse" />
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white/50 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 px-4 border-t border-white/[0.06] mt-3">
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><FaGithub size={16} /></a>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><FaLinkedinIn size={16} /></a>
                <a href={`mailto:${contactData.email}`} className="text-white/40 hover:text-white"><Mail size={16} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
