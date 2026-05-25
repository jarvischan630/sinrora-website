import { ArrowRight, CheckCircle2, Star, Ruler, Shield, Palette, Package, Truck } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "custom-plush",
    title: "Custom Plush Toys",
    subtitle: "OEM & ODM Design",
    description: "Bring your ideas to life with fully custom plush toys. From concept sketches to mass production, we handle the entire process with precision and care.",
    features: ["Full custom design from artwork", "Low MOQ from 500 pcs", "7-10 day sampling", "OEM & ODM available"],
    image: "🧸",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-600",
    badge: "Most Popular",
  },
  {
    id: "anime-ip",
    title: "Anime & IP Plush",
    subtitle: "Licensed Characters",
    description: "High-quality plush toys based on popular anime, game, and entertainment IPs. Perfect for collectors, events, and retail distribution.",
    features: ["Accurate character reproduction", "Premium soft fabrics", "Multiple size options", "Retail-ready packaging"],
    image: "🎮",
    color: "bg-purple-50 border-purple-100",
    accent: "text-purple-600",
    badge: "Trending",
  },
  {
    id: "plush-pillows",
    title: "Plush Pillows & Cushions",
    subtitle: "Home & Lifestyle",
    description: "Decorative and functional plush pillows for home, office, and gifting. Eye-catching designs that stand out on any shelf.",
    features: ["Custom shapes & prints", "Embroidery & appliqué", "Machine washable options", "Gift-ready packaging"],
    image: "🛋️",
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-600",
    badge: "Growing Demand",
  },
  {
    id: "promotional",
    title: "Promotional Plush Gifts",
    subtitle: "Branded Merchandise",
    description: "Custom-branded plush toys for corporate events, trade shows, and marketing campaigns. Memorable giveaways that keep your brand in customers' hands.",
    features: ["Logo embroidery & printing", "Custom hang tags & labels", "Bulk order discounts", "Fast turnaround available"],
    image: "🎁",
    color: "bg-green-50 border-green-100",
    accent: "text-green-600",
    badge: "Best Value",
  },
];

const productHighlights = [
  { icon: <Ruler className="w-6 h-6" />, title: "Size Range", desc: "5cm to 200cm, any size customizable" },
  { icon: <Palette className="w-6 h-6" />, title: "Materials", desc: "Super soft plush, short plush, fleece, organic cotton" },
  { icon: <Shield className="w-6 h-6" />, title: "Certifications", desc: "EN71, ASTM F963, CPSIA, CCC compliant" },
  { icon: <Package className="w-6 h-6" />, title: "Packaging", desc: "OPP bag, gift box, custom retail packaging" },
  { icon: <Truck className="w-6 h-6" />, title: "Lead Time", desc: "7-10 days sampling, 25-35 days production" },
  { icon: <Star className="w-6 h-6" />, title: "MOQ", desc: "From 500 pcs, flexible for new partners" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Our Product Lines
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Premium Plush Toys <br />
              <span className="text-blue-600">Made Your Way</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              20+ years of plush toy expertise. From custom designs to licensed characters, 
              we deliver soft, safe, and sellable plush products for global markets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-2xl border p-8 lg:p-10 ${cat.color} hover:shadow-lg transition-shadow relative overflow-hidden`}
              >
                {cat.badge && (
                  <span className={`absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full bg-white shadow-sm ${cat.accent}`}>
                    {cat.badge}
                  </span>
                )}
                <div className="text-5xl mb-4">{cat.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{cat.title}</h3>
                <p className={`text-sm font-medium ${cat.accent} mb-3`}>{cat.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{cat.description}</p>
                <ul className="space-y-2 mb-8">
                  {cat.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 font-semibold ${cat.accent} hover:opacity-80 transition-opacity`}
                >
                  Request Quote <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Specifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our manufacturing capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productHighlights.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Inquiry & Design", desc: "Share your idea or artwork. We provide a free design consultation and quote." },
                { step: "02", title: "Sampling", desc: "We create a physical sample for your approval within 7-10 business days." },
                { step: "03", title: "Production", desc: "Mass production begins after sample approval. Strict QC at every stage." },
                { step: "04", title: "Delivery", desc: "Safe packaging and reliable shipping to your door, worldwide." },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Have a Plush Toy Idea?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a custom design or a bulk order, we&apos;re ready to bring your vision to life. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/8612345678900"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
