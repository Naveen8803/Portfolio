"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
  tilt?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverGlow = true,
  tilt = true,
  delay = 0,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${
        hoverGlow
          ? "hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] hover:border-[rgba(0,245,255,0.2)]"
          : ""
      } ${className}`}
      style={{
        transform,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {children}
    </motion.div>
  );
}
