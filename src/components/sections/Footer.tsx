"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <FaGithub className={className} style={{ width: size, height: size }} />
);

const LinkedinIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <FaLinkedinIn className={className} style={{ width: size, height: size }} />
);

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span
              className="text-2xl font-bold gradient-text-static"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              NV
            </span>
            <p className="text-white/30 text-xs mt-1">
              Naveen Varma • Data Scientist
            </p>
          </motion.div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Naveen Varma. Built with
            <Heart size={12} className="text-[#00F5FF]" />
            and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
