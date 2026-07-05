"use client";

import dynamic from "next/dynamic";

// Dynamic imports for code splitting and performance
const NeuralNetwork = dynamic(() => import("@/components/effects/NeuralNetwork"), { ssr: false });
const CursorGlow = dynamic(() => import("@/components/effects/CursorGlow"), { ssr: false });
const GradientBlobs = dynamic(() => import("@/components/effects/GradientBlobs"), { ssr: false });
const Navbar = dynamic(() => import("@/components/features/Navbar"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/features/LoadingScreen"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/features/ScrollProgress"), { ssr: false });
const AIAssistant = dynamic(() => import("@/components/features/AIAssistant"), { ssr: false });
const Confetti = dynamic(() => import("@/components/effects/Confetti"), { ssr: false });

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleConfetti = () => {
      setShowConfetti(true);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href")?.includes("resume.pdf")) {
        setShowConfetti(true);
      }
    };

    window.addEventListener("trigger-confetti", handleConfetti);
    window.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("trigger-confetti", handleConfetti);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <NeuralNetwork />
      <GradientBlobs />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <AIAssistant />
      <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
