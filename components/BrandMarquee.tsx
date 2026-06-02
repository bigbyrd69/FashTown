"use client";
import React from "react";

const BRANDS = ["NIKE", "NEW BALANCE", "AIR JORDAN", "CONVERSE", "PUMA", "ASICS", "ADIDAS"];

export default function BrandMarquee() {
  return (
    <section className="py-12 bg-black border-y border-white/5 relative z-30 flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-16 pr-16 text-2xl md:text-4xl font-black tracking-tighter text-neutral-700">
        {Array(4).fill(BRANDS).flat().map((brand, idx) => (
          <span key={idx} className="hover:text-white transition-colors duration-300 cursor-default uppercase">{brand}</span>
        ))}
      </div>
    </section>
  );
}
