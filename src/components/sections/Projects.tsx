"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import TechChip from "../ui/TechChip";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading title="Projects" subtitle="// things i've built" />

        {/* Featured projects — visual cards with images */}
        <div className="space-y-20">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image side */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-[#00F5FF]/15 transition-all duration-500 shadow-[0_0_60px_rgba(0,0,0,0.3)]">
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
                        <span className="text-white/20 text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                          {project.shortTitle}
                        </span>
                      </div>
                    )}

                    {/* Floating live demo badge */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold bg-[#00F5FF]/90 text-[#050816] hover:bg-[#00F5FF] transition-colors shadow-lg"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#050816] animate-pulse" />
                        LIVE
                      </a>
                    )}
                  </div>
                </div>

                {/* Info side */}
                <div className={`lg:col-span-5 space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20">
                    {project.category}
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#00F5FF] transition-colors"
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

                  {/* Action links */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#00F5FF] hover:text-white transition-colors group/link"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                        <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors"
                      >
                        <FaGithub size={15} />
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
              className="text-lg font-medium text-white/30 mb-8 font-mono"
            >
              // other explorations
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {other.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-white/15 transition-all duration-300 group"
                >
                  <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 text-white/30 border border-white/5 mb-3">
                    {project.category}
                  </span>
                  <h4
                    className="text-lg font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.shortTitle}
                  </h4>
                  <p className="text-white/40 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-white/30 bg-white/[0.03] px-2 py-1 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
