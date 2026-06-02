"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroCanvas({ scrollYProgress }: HeroCanvasProps) {
  // Map scroll progress to scale factor and rotation degrees
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 2.4]);
  const rotate = useTransform(scrollYProgress, [0, 0.6], [0, -35]);

  return (
    <motion.div 
      style={{ scale, rotate }}
      className="z-20 w-[280px] md:w-[420px] aspect-square flex items-center justify-center relative mt-24 md:mt-32 drop-shadow-[0_35px_35px_rgba(255,255,255,0.06)]"
    >
      {/* High-fidelity sneaker cutout asset */}
      <img 
  src="/images/hero-sneaker.png" 
  alt="Hero Sneaker" 
  className="w-full h-auto object-contain transform -scale-x-100 filter brightness-110 pointer-events-none" 
/>
    </motion.div>
  );
}