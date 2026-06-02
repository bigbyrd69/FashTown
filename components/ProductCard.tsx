"use client";
import React from "react";
import { ShoppingCart, ArrowUpRight } from "lucide-react";

export default function ProductCard({ name, tagline, img }: { name: string, tagline: string, img: string }) {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/F1fuWuwcXsf6gcpDlfRigL";
  return (
    <div className="group relative bg-[#121212] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between aspect-[4/5] p-8 md:p-10">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
      <div className="z-20">
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-1">CURATED SELECTION</span>
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight max-w-xs">{name}</h3>
        <p className="text-neutral-400 text-xs mt-2 uppercase tracking-wider font-medium">{tagline}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6 mt-12 transition-transform duration-700 ease-out group-hover:scale-105">
        <img src={img} alt={name} className="w-full h-64 md:h-80 object-cover rounded-2xl filter brightness-90 contrast-110" />
      </div>
      <div className="z-20 flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
        <div className="text-xs text-neutral-400 uppercase tracking-widest font-mono">Available Sizes: UK 7 - 11</div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-neutral-900 border border-white/10 group-hover:bg-white group-hover:text-black px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300">
          <ShoppingCart size={14} /> Order <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
}
