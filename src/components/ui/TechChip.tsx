"use client";

interface TechChipProps {
  name: string;
}

export default function TechChip({ name }: TechChipProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-[#00F5FF] hover:bg-[rgba(0,245,255,0.1)] hover:border-[rgba(0,245,255,0.3)] hover:shadow-[0_0_15px_rgba(0,245,255,0.15)] transition-all duration-300 cursor-default"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {name}
    </span>
  );
}
