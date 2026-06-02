"use client";
import React from "react";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  { id: 1, name: "Air Jordan 1 Low 'Black Crock'", tagline: "Different. Walk Legendary.", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Nike SB Dunk Low 'Stranger Things'", tagline: "Upside Down. Right Side Up.", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Converse Chuck 70 Hi 'Sketch Blue'", tagline: "Premium Details. Hand Drawn.", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Air Jordan 4 Retro 'Angel Sylvester'", tagline: "Brick by Brick. Red Hot.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" },
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 block mb-2">// LATEST DROPS</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Curated Timeless Style</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} name={p.name} tagline={p.tagline} img={p.img} />
        ))}
      </div>
    </section>
  );
}
