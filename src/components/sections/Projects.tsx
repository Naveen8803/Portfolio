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
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="// things i've built" />

        {/* Featured projects — visual cards with images */}
        <div className="space-y-28 md:space-y-36">
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
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] group-hover:border-[#00F5FF]/15 transition-all duration-500">
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
                        className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-[#050816]/80 backdrop-blur border border-[#00FFB2]/30 text-[#00FFB2] transition-colors"
                      >
                        <span className="w-[5px] h-[5px] rounded-full bg-[#00FFB2] animate-pulse" />
                        LIVE
                      </a>
                    )}
                  </div>
                </div>

                {/* Info side */}
                <div className={`lg:col-span-5 space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#00F5FF]/80">
                    {project.category}
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#00F5FF] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed">
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
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-10"
            >
              // other explorations
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {other.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-xl p-7 space-y-3 border border-white/[0.07] hover:border-[#00F5FF]/20 transition-all duration-300 group"
                >
                  <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-white/30">
                    {project.category}
                  </span>
                  <h4
                    className="text-lg font-bold text-white group-hover:text-[#00F5FF] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.shortTitle}
                  </h4>
                  <p className="text-white/45 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
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
