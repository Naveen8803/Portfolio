"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import TechChip from "../ui/TechChip";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowUpRight, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="// things i've built" />

        {/* Featured projects */}
        <div className="space-y-24 md:space-y-32">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                {/* Image side */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] group-hover:border-white/[0.15] transition-all duration-500">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                    {project.previewImage ? (
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-gradient-to-br from-[#00F5FF]/5 to-[#7B61FF]/5 flex items-center justify-center">
                        <span className="text-white/15 text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                          {project.shortTitle}
                        </span>
                      </div>
                    )}

                    {/* Floating live badge */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-[#050816]/80 backdrop-blur border border-[#00FFB2]/30 text-[#00FFB2] hover:bg-[#00FFB2]/10 transition-colors"
                      >
                        <span className="w-[5px] h-[5px] rounded-full bg-[#00FFB2] animate-pulse" />
                        LIVE
                      </a>
                    )}
                  </div>
                </div>

                {/* Info side */}
                <div className={`lg:col-span-5 space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#00F5FF]/70">
                    {project.category}
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#00F5FF] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechChip key={tech} name={tech} />
                    ))}
                  </div>

                  {/* Action buttons — refined pills */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium overflow-hidden transition-all duration-300"
                      >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] p-[1px]">
                          <span className="w-full h-full rounded-full bg-[#050816] block group-hover/btn:bg-[#0a0f2c] transition-colors" />
                        </span>
                        <span className="relative z-10 text-white/80 group-hover/btn:text-white flex items-center gap-2 transition-colors">
                          <ExternalLink size={13} />
                          Live Demo
                          <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300"
                      >
                        <FaGithub size={14} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects — compact grid */}
        {other.length > 0 && (
          <div className="mt-28">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25 mb-10"
            >
              // other explorations
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {other.map((project, i) => (
                <motion.a
                  key={project.id}
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-7 space-y-3 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <Folder size={20} className="text-[#00F5FF]/40 group-hover:text-[#00F5FF]/70 transition-colors" />
                    <ArrowUpRight size={16} className="text-white/15 group-hover:text-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4
                    className="text-lg font-bold text-white/85 group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.shortTitle}
                  </h4>
                  <p className="text-white/40 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-white/25 bg-white/[0.03] px-2 py-1 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
