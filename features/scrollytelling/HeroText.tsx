"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function HeroText({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -60]);

  return (
    <motion.div style={{ opacity, y }} className="text-center z-10 select-none max-w-4xl px-4 pointer-events-none absolute top-1/4">
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 uppercase">FASHTOWN</h1>
      <p className="text-neutral-400 mt-4 tracking-widest uppercase text-xs md:text-sm font-medium">Your wardrobe's future favorite page</p>
    </motion.div>
  );
}
