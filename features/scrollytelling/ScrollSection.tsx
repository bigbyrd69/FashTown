"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroCanvas from "./HeroCanvas";
import HeroText from "./HeroText";

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#0B0B0B] to-[#0B0B0B] z-0 opacity-80" />
        <HeroText scrollYProgress={scrollYProgress} />
        <HeroCanvas scrollYProgress={scrollYProgress} />
        <div className="absolute bottom-8 text-neutral-500 text-xs tracking-widest uppercase animate-bounce z-30">
          Scroll to unbox ↓
        </div>
      </div>
    </div>
  );
}
