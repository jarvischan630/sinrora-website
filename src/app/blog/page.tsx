"use client";

import { useState } from "react";
import Link from "next/link";

const blogCategories = ["All", "Industry Insights", "Product Guide", "Brand Stories", "Manufacturing"];

const blogPosts = [
  {
    title: "Spanish Cedar: Why It's the Gold Standard for Cigar Humidors",
    category: "Product Guide",
    excerpt: "Discover why Spanish cedar (Cedrela odorata) has been the preferred material for humidor interiors for over a century, and how to identify quality cedar.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    emoji: "🪵",
  },
  {
    title: "2025 Cigar Accessories Market Trends: What Wholesalers Need to Know",
    category: "Industry Insights",
    excerpt: "The global cigar accessories market is projected to reach $8.2B by 2027. Here are the key trends driving growth and how to position your brand.",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    emoji: "📊",
  },
  {
    title: "How to Choose the Right Humidor for Your Market",
    category: "Product Guide",
    excerpt: "From desktop humidors to cabinet solutions — a comprehensive guide to matching the right product to your target customer segment.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    emoji: "🏛️",
  },
  {
    title: "From Local Workshop to Global Brand: A Cigar Accessories Success Story",
    category: "Brand Stories",
    excerpt: "How a small US retailer grew from 50 humidors to a $2M annual business by partnering with the right OEM manufacturer.",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    emoji: "🚀",
  },
  {
    title: "Inside Our Factory: How Premium Leather Cigar Cases Are Made",
    category: "Manufacturing",
    excerpt: "Step-by-step look at the craftsmanship behind our genuine leather cigar cases — from raw material selection to final quality inspection.",
    date: "Nov 12, 2024",
    readTime: "6 min read",
    emoji: "💼",
  },
  {
    title: "Custom Engraving: The Secret to Premium Cigar Gift Sales",
    category: "Industry Insights",
    excerpt: "Personalized cigar accessories command 40-60% higher margins. Learn how to leverage custom engraving for corporate and groomsmen gift markets.",
    date: "Nov 5, 2024",
    readTime: "5 min read",
    emoji: "✨",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-dark py-24 text-white">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-[48px] mb-5">Cigar Insights Blog</h1>
          <p className="text-xl opacity-95 font-light max-w-[700px] mx-auto">
            Industry trends, product guides, and manufacturing expertise for cigar accessories professionals
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_4px_15px_rgba(92,61,46,0.3)]"
                    : "bg-bg-light text-foreground hover:bg-primary-light hover:text-primary-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 shadow-[0_2px_10px_rgba(92,61,46,0.08)]"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-accent-light/20 to-primary-light/20 flex items-center justify-center text-5xl">
                  {post.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-text-light">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-light">{post.date}</span>
                    <span className="text-sm font-semibold text-accent hover:text-primary-dark transition-colors cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-text-light">More articles coming soon...</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-[36px] mb-5 text-foreground">Stay Updated</h2>
          <p className="text-lg text-text-light max-w-[600px] mx-auto mb-8 font-light">
            Get the latest cigar industry insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-full border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
            />
            <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(92,61,46,0.3)] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
