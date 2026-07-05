"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  target?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  target,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] text-[#050816] font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]",
    secondary:
      "bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(0,245,255,0.3)]",
    outline:
      "bg-transparent border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]",
  };

  const content = (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={`relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm tracking-wide cursor-pointer overflow-hidden transition-all duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Ripple/shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            animation: "shimmer 2s infinite",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
