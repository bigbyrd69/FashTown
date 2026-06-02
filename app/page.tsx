"use client";

import React from "react";
import ScrollSection from "../features/scrollytelling/ScrollSection";
import BrandMarquee from "../components/BrandMarquee";
import ProductGrid from "../components/ProductGrid";
import TrustBadges from "../components/TrustBadges";

export default function FashtownHome() {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/F1fuWuwcXsf6gcpDlfRigL";

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <span className="font-black text-xl tracking-widest uppercase">fashtown</span>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-neutral-200 transition-all active:scale-95"
        >
          Order via WhatsApp
        </a>
      </nav>

      {/* 1. The Core Scrollytelling Engine */}
      <ScrollSection />

      {/* 2. The Infinite Brand Banner */}
      <BrandMarquee />

      {/* 3. The Instagram-style Catalog */}
      <ProductGrid />

      {/* 4. Trust Badges & Footer */}
      <TrustBadges />

    </div>
  );
}
