"use client";
import React from "react";
import { ShieldCheck, Globe, Zap } from "lucide-react";

export default function TrustBadges() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-neutral-500 text-xs uppercase tracking-widest">
        <div className="flex flex-col items-center gap-3"><ShieldCheck size={20} className="text-neutral-400" /><span>Trusted Secure Packaging</span></div>
        <div className="flex flex-col items-center gap-3"><Globe size={20} className="text-neutral-400" /><span>Worldwide Shipping</span></div>
        <div className="flex flex-col items-center gap-3"><Zap size={20} className="text-neutral-400" /><span>Premium Quality</span></div>
      </div>
    </footer>
  );
}
