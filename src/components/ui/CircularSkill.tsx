"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CircularSkillProps {
  name: string;
  level: number;
  delay?: number;
}

export default function CircularSkill({ name, level, delay = 0 }: CircularSkillProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level);
    }, delay * 1000 + 300);
    return () => clearTimeout(timer);
  }, [level, delay]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center p-6 glass rounded-2xl border border-white/5 hover:border-[#00F5FF]/30 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all duration-300 group"
    >
      {/* Circle Dial */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Track circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-white/5"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-[url(#gradient-cyan-purple)]"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.2 }}
          />
          <defs>
            <linearGradient id="gradient-cyan-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5FF" />
              <stop offset="100%" stopColor="#7B61FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Level text inside dial */}
        <div className="absolute font-mono text-sm font-bold text-white/90 group-hover:text-[#00F5FF] transition-colors">
          {level}%
        </div>
      </div>

      {/* Skill name */}
      <h4 className="mt-4 text-xs font-semibold text-white/70 tracking-wide font-mono uppercase">
        {name}
      </h4>
    </motion.div>
  );
}
