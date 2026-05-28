"use client";

import { useState } from "react";
import Link from "next/link";

const allCategories = [
  { key: "all", label: "All Products" },
  { key: "humidors", label: "Cigar Humidors" },
  { key: "cases", label: "Cigar Cases & Tubes" },
  { key: "custom-engraved", label: "Custom Engraved" },
  { key: "cabinets", label: "Humidor Cabinets" },
  { key: "accessories", label: "Cigar Accessories" },
];

const productsData = [
  {
    name: "Classic Desktop Humidor",
    category: "humidors",
    price: "$25 - $85",
    moq: "20 pcs",
    desc: "Spanish cedar-lined desktop humidor with glass top, hygrometer & humidifier. Holds 25-50 cigars.",
    emoji: "🪵",
    features: ["Spanish Cedar", "Glass Top", "Hygrometer"],
  },
  {
    name: "Premium Leather Case",
    category: "cases",
    price: "$8 - $35",
    moq: "30 pcs",
    desc: "Genuine leather 3-finger cigar case with cedar lining. Hand-stitched, custom embossing available.",
    emoji: "💼",
    features: ["Genuine Leather", "Cedar Lined", "Embossing"],
  },
  {
    name: "Travel Humidor Box",
    category: "humidors",
    price: "$15 - $45",
    moq: "20 pcs",
    desc: "Compact travel humidor with secure latch. Holds 5-10 cigars. Keeps fresh for 7-14 days.",
    emoji: "✈️",
    features: ["Compact", "Secure Latch", "7-14 Day Fresh"],
  },
  {
    name: "Aluminum Cigar Tube",
    category: "cases",
    price: "$3 - $12",
    moq: "50 pcs",
    desc: "Sleek aluminum tube with cedar lining. Single & double options. Crush-proof, pocket-friendly.",
    emoji: "🫙",
    features: ["Aluminum", "Cedar Lined", "Crush-proof"],
  },
  {
    name: "Custom Engraved Humidor",
    category: "custom-engraved",
    price: "$45 - $150",
    moq: "20 pcs",
    desc: "Personalized humidor with laser engraving. Names, logos, dates. Perfect groomsmen & corporate gifts.",
    emoji: "✨",
    features: ["Laser Engraving", "Custom Logo", "Gift Box"],
  },
  {
    name: "Glass Top Display Humidor",
    category: "humidors",
    price: "$55 - $120",
    moq: "15 pcs",
    desc: "Elegant glass-top display humidor. Showcase your collection. Cedar dividers & adjustable trays.",
    emoji: "🏛️",
    features: ["Glass Display", "Cedar Dividers", "Adjustable"],
  },
  {
    name: "Cabinet Humidor",
    category: "cabinets",
    price: "$200 - $4,000",
    moq: "5 pcs",
    desc: "Large capacity cabinet humidors. 200-2000+ cigars. Digital climate control. Furniture-grade finish.",
    emoji: "🗄️",
    features: ["200-2000+ Capacity", "Digital Control", "Furniture Grade"],
  },
  {
    name: "Cigar Cutter & Lighter Set",
    category: "accessories",
    price: "$5 - $25",
    moq: "50 pcs",
    desc: "Premium guillotine cutter & torch lighter combo. Custom branding available. Gift box packaging.",
    emoji: "🔧",
    features: ["Guillotine Cut", "Torch Lighter", "Gift Box"],
  },
  {
    name: "PU Leather Finger Case",
    category: "cases",
    price: "$3 - $10",
    moq: "50 pcs",
    desc: "Affordable PU leather 2-5 finger cases. Multiple color options. Custom logo embossing.",
    emoji: "👜",
    features: ["PU Leather", "2-5 Finger", "Multi Color"],
  },
  {
    name: "Personalized Leather Tube",
    category: "custom-engraved",
    price: "$12 - $30",
    moq: "30 pcs",
    desc: "Leather-wrapped aluminum tube with custom engraving. Premium feel, personal touch.",
    emoji: "🎯",
    features: ["Leather Wrap", "Engraving", "Premium Feel"],
  },
  {
    name: "Crystal Ashtray",
    category: "accessories",
    price: "$8 - $35",
    moq: "30 pcs",
    desc: "Hand-cut crystal ashtray with 4 rests. Custom etching available. Luxury presentation piece.",
    emoji: "💎",
    features: ["Crystal", "4 Rests", "Custom Etching"],
  },
  {
    name: "Walk-in Humidor Cabinet",
    category: "cabinets",
    price: "$1,500 - $4,000",
    moq: "2 pcs",
    desc: "Full walk-in humidor room solution. Commercial grade. Complete climate system installation.",
    emoji: "🏠",
    features: ["Walk-in Size", "Commercial Grade", "Full Install"],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-dark py-24 text-white">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-[48px] mb-5">Our Cigar Collection</h1>
          <p className="text-xl opacity-95 font-light max-w-[700px] mx-auto">
            Premium humidors, cases &amp; accessories — OEM/ODM solutions for your brand
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {allCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-[0_4px_15px_rgba(92,61,46,0.3)]"
                    : "bg-bg-light text-foreground hover:bg-primary-light hover:text-primary-dark"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 shadow-[0_2px_10px_rgba(92,61,46,0.08)] border border-transparent hover:border-accent-light"
              >
                <div className="aspect-square bg-gradient-to-br from-accent-light/20 to-primary-light/20 flex items-center justify-center text-6xl">
                  {product.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {allCategories.find((c) => c.key === product.category)?.label}
                    </span>
                    <span className="text-xs text-text-light">MOQ: {product.moq}</span>
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2 text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mb-3">{product.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.map((f, j) => (
                      <span key={j} className="text-[11px] px-2.5 py-1 bg-accent-light/20 text-primary-dark rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-accent hover:text-primary-dark transition-colors"
                    >
                      Get Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-text-light">Products coming soon...</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-[36px] mb-5 text-foreground">Can&apos;t Find What You Need?</h2>
          <p className="text-lg text-text-light max-w-[600px] mx-auto mb-8 font-light">
            We offer full custom OEM/ODM services. Tell us your vision and we&apos;ll bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(92,61,46,0.3)] transition-all"
          >
            REQUEST CUSTOM PRODUCT
          </Link>
        </div>
      </section>
    </main>
  );
}
