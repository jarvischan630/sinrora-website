import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Top 10 Fragrance Trends for 2025",
    excerpt: "From gourmand florals to sustainable scents, discover the fragrance trends shaping the beauty industry this year and how your brand can capitalize on them.",
    category: "Industry Trends",
    date: "May 15, 2025",
    readTime: "5 min read",
    emoji: "📈",
  },
  {
    title: "How to Choose the Right Perfume OEM Partner",
    excerpt: "Selecting the right manufacturing partner is crucial for your brand's success. Here are the key factors to consider when evaluating perfume OEM suppliers.",
    category: "Business Guide",
    date: "May 8, 2025",
    readTime: "7 min read",
    emoji: "🤝",
  },
  {
    title: "The Art of Perfume Formulation: A Behind-the-Scenes Look",
    excerpt: "Ever wondered how a fragrance goes from concept to bottle? Join us on a journey through our R&D lab and discover the science behind scent creation.",
    category: "Behind the Scenes",
    date: "Apr 28, 2025",
    readTime: "6 min read",
    emoji: "🧪",
  },
  {
    title: "Middle East Perfume Market: Opportunities for B2B Brands",
    excerpt: "The Middle East remains one of the world's largest fragrance markets. Learn about consumer preferences, regulatory requirements, and market entry strategies.",
    category: "Market Insights",
    date: "Apr 20, 2025",
    readTime: "8 min read",
    emoji: "🌍",
  },
  {
    title: "Sustainable Packaging Solutions for Fragrance Brands",
    excerpt: "Eco-conscious consumers are driving demand for sustainable packaging. Explore innovative materials and designs that reduce environmental impact without compromising luxury.",
    category: "Sustainability",
    date: "Apr 12, 2025",
    readTime: "5 min read",
    emoji: "♻️",
  },
  {
    title: "Oud Fragrances: From Tradition to Global Phenomenon",
    excerpt: "Once reserved for Middle Eastern royalty, oud has become a global fragrance trend. Discover how this ancient ingredient is being reimagined for modern markets.",
    category: "Ingredient Spotlight",
    date: "Apr 5, 2025",
    readTime: "6 min read",
    emoji: "🪵",
  },
];

const categories = ["All", "Industry Trends", "Business Guide", "Behind the Scenes", "Market Insights", "Sustainability", "Ingredient Spotlight"];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-28 bg-gradient-to-br from-primary-light/20 to-white overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-[48px] mb-5 text-foreground">Blog</h1>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Insights, trends, and expert advice from the world of fragrance manufacturing
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  i === 0
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 shadow-[0_2px_10px_rgba(254,182,193,0.15)] border border-gray-50">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-light/30 to-primary-light/10 flex items-center justify-center text-5xl">
                  {post.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold text-primary bg-primary-light/30 px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2.5 text-foreground leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>{post.title}</h3>
                  <p className="text-[13px] text-text-light leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-[12px] text-text-light">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-text-light mb-4 font-light">More articles coming soon. Stay tuned!</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(254,182,193,0.3)] transition-all"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
