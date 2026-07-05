"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { contactData } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name & Title */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="text-lg font-bold gradient-text-static tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Naveen Varma
          </a>
          <span className="hidden sm:inline-block h-4 w-[1px] bg-white/20" />
          <span className="hidden sm:inline-block text-[10px] text-white/40 font-mono uppercase tracking-widest">
            Data Scientist & ML Engineer
          </span>
        </div>

        {/* Social Icons & Resume */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#00F5FF] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#00F5FF] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="text-white/50 hover:text-[#00F5FF] transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <span className="h-4 w-[1px] bg-white/10" />

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-[#00F5FF]/30 text-[#00F5FF] hover:bg-[#00F5FF]/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
