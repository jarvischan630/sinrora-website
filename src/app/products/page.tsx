import { CheckCircle2, Filter } from "lucide-react";
import Link from "next/link";

const allCategories = [
  { key: "all", label: "All Products" },
  { key: "perfume", label: "Perfume & Fragrance" },
  { key: "personal-care", label: "Personal Care" },
  { key: "makeup", label: "Makeup" },
  { key: "skincare", label: "Skincare" },
  { key: "makeup-tools", label: "Makeup Tools & Accessories" },
  { key: "press-on-nails", label: "Press on Nails" },
];

const productItems = [
  { name: "Eau de Parfum - Floral Bouquet", cat: "perfume", desc: "Premium 50ml EDP with rose, jasmine & peony notes. Long-lasting 8-12 hour formula.", moq: "500 pcs", emoji: "🌸" },
  { name: "Eau de Toilette - Fresh Citrus", cat: "perfume", desc: "Refreshing 100ml EDT with bergamot, lemon & green tea. Perfect for daily wear.", moq: "500 pcs", emoji: "🍋" },
  { name: "Perfume Oil - Oud Collection", cat: "perfume", desc: "Concentrated 12ml rollerball perfume oil. Alcohol-free, long-lasting oriental scent.", moq: "1000 pcs", emoji: "🫧" },
  { name: "Body Mist - Vanilla Dream", cat: "perfume", desc: "Light 200ml body splash with vanilla & coconut. Perfect for younger demographics.", moq: "1000 pcs", emoji: "💦" },
  { name: "Men's Cologne - Woody Intense", cat: "perfume", desc: "Bold 100ml men's fragrance with cedar, sandalwood & leather notes.", moq: "500 pcs", emoji: "🌲" },
  { name: "Unisex Fragrance - Clean Musk", cat: "perfume", desc: "Modern 50ml unisex scent with white musk & linen notes. Gender-neutral positioning.", moq: "500 pcs", emoji: "✨" },
  { name: "Home Diffuser - Lavender Fields", cat: "perfume", desc: "200ml reed diffuser with natural essential oils. 60-90 day fragrance release.", moq: "500 pcs", emoji: "🏠" },
  { name: "Scented Candle - Rose Garden", cat: "perfume", desc: "Premium soy wax candle 180g. Clean burn up to 40 hours. Gift-ready packaging.", moq: "1000 pcs", emoji: "🕯️" },
  { name: "Argan Oil Hair Serum", cat: "personal-care", desc: "Nourishing 50ml hair serum with Moroccan argan oil. Frizz control & shine boost.", moq: "1000 pcs", emoji: "💇" },
  { name: "Keratin Shampoo & Conditioner Set", cat: "personal-care", desc: "Professional 500ml keratin-infused hair care duo. Smoothing & repairing formula.", moq: "500 pcs", emoji: "🧴" },
  { name: "Whitening Toothpaste", cat: "personal-care", desc: "Premium 100g whitening toothpaste with activated charcoal. Enamel-safe formula.", moq: "3000 pcs", emoji: "🦷" },
  { name: "Electric Sonic Toothbrush", cat: "personal-care", desc: "Rechargeable sonic toothbrush with 5 modes. 40,000 vibrations/min. IPX7 waterproof.", moq: "500 pcs", emoji: "⚡" },
  { name: "LED Facial Mask", cat: "personal-care", desc: "7-color LED photon therapy mask. Anti-aging, acne treatment & skin rejuvenation.", moq: "200 pcs", emoji: "💡" },
  { name: "Scalp Massager Shampoo Brush", cat: "personal-care", desc: "Silicone scalp massager for hair growth stimulation. Ergonomic grip design.", moq: "2000 pcs", emoji: "💆" },
];

const comingSoonCategories = ["makeup", "skincare", "makeup-tools", "press-on-nails"];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-28 bg-gradient-to-br from-primary-light/20 to-white overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-[48px] mb-5 text-foreground">Our Products</h1>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Explore our complete range of beauty &amp; fragrance products. OEM &amp; ODM services available for all categories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {allCategories.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  cat.key === "all"
                    ? "bg-primary text-white border-primary"
                    : comingSoonCategories.includes(cat.key)
                    ? "bg-gray-50 text-text-light border-gray-200 cursor-default"
                    : "bg-white text-foreground border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
                {comingSoonCategories.includes(cat.key) && (
                  <span className="ml-1 text-[10px] italic">Coming Soon</span>
                )}
              </a>
            ))}
          </div>

          <div id="all" className="mb-20">
            <h2 className="text-[32px] mb-3 text-foreground">Perfume &amp; Fragrance</h2>
            <p className="text-text-light mb-10 font-light">Our flagship category — premium fragrances crafted by master perfumers</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productItems.filter(p => p.cat === "perfume").map((p, i) => (
                <div key={i} className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 shadow-[0_2px_10px_rgba(254,182,193,0.15)] border border-gray-50">
                  <div className="aspect-square bg-gradient-to-br from-primary-light/30 to-primary-light/10 flex items-center justify-center text-6xl">
                    {p.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-[15px] font-semibold mb-2 text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>{p.name}</h3>
                    <p className="text-[13px] text-text-light leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-primary font-semibold">MOQ: {p.moq}</span>
                      <Link href="/contact" className="text-[12px] text-primary font-semibold hover:underline">Inquire →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="personal-care" className="mb-20">
            <h2 className="text-[32px] mb-3 text-foreground">Personal Care</h2>
            <p className="text-text-light mb-10 font-light">Hair care, oral care & beauty devices — expanding your brand beyond fragrance</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productItems.filter(p => p.cat === "personal-care").map((p, i) => (
                <div key={i} className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 shadow-[0_2px_10px_rgba(254,182,193,0.15)] border border-gray-50">
                  <div className="aspect-square bg-gradient-to-br from-primary-light/30 to-primary-light/10 flex items-center justify-center text-6xl">
                    {p.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-[15px] font-semibold mb-2 text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>{p.name}</h3>
                    <p className="text-[13px] text-text-light leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-primary font-semibold">MOQ: {p.moq}</span>
                      <Link href="/contact" className="text-[12px] text-primary font-semibold hover:underline">Inquire →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {comingSoonCategories.map((catKey) => {
            const cat = allCategories.find(c => c.key === catKey);
            if (!cat) return null;
            return (
              <div key={catKey} id={catKey} className="mb-16">
                <h2 className="text-[32px] mb-3 text-foreground">{cat.label}</h2>
                <div className="bg-bg-light rounded-[20px] p-16 text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl mb-3 text-foreground">Coming Soon</h3>
                  <p className="text-text-light mb-6 max-w-md mx-auto font-light">
                    Our {cat.label.toLowerCase()} collection is currently under development. Stay tuned for exciting new products!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(254,182,193,0.3)] transition-all"
                  >
                    Notify Me When Available
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-[44px] mb-5 text-white">Can&apos;t Find What You Need?</h2>
          <p className="text-xl mb-10 opacity-95 font-light">We offer full custom OEM/ODM services. Tell us your vision and we&apos;ll make it happen.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-12 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            REQUEST CUSTOM PRODUCT
          </Link>
        </div>
      </section>
    </main>
  );
}
