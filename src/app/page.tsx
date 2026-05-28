import { CheckCircle2, FlaskConical, Boxes, Clock, Award, Building2, Users, Beaker, ShieldCheck, Truck, Globe2, Leaf, Recycle, Star } from "lucide-react";
import Link from "next/link";

const products = [
  { name: "Women's Floral Collection", desc: "Elegant floral bouquets with lasting allure. Rose, Jasmine, Peony blends.", emoji: "🌸" },
  { name: "Men's Woody Fragrances", desc: "Bold woody notes with sophisticated depth. Cedar, Sandalwood, Vetiver.", emoji: "🌲" },
  { name: "Unisex Collections", desc: "Modern gender-neutral scents for contemporary brands. Clean & minimalist.", emoji: "✨" },
  { name: "Luxury Niche Fragrances", desc: "Exclusive artisanal compositions with rare ingredients. High-end positioning.", emoji: "💎" },
  { name: "Body Mist & Splash", desc: "Light, refreshing everyday scents. Perfect for younger demographics & retail chains.", emoji: "💦" },
  { name: "Concentrated Perfume Oil", desc: "Long-lasting oil-based formulas. Alcohol-free options available. Halal certified.", emoji: "🫧" },
  { name: "Hair Care Solutions", desc: "Professional shampoos, serums & treatments. Keratin, argan oil & botanical formulas.", emoji: "💇" },
  { name: "Oral Care & Devices", desc: "Whitening toothpaste, sonic toothbrushes & LED beauty devices. Tech-driven personal care.", emoji: "🦷" },
];

const categories = [
  { title: "Perfume OEM", btn: "GET INSPIRED", emoji: "🧴" },
  { title: "Personal Care", btn: "EXPLORE MORE", emoji: "💇" },
  { title: "Custom Packaging", btn: "VIEW OPTIONS", emoji: "📦" },
];

const whyUs = [
  { icon: <FlaskConical className="w-8 h-8 text-white" />, title: "Expert R&D Team", desc: "Master perfumers with 20+ years experience crafting iconic fragrances for global brands." },
  { icon: <Boxes className="w-8 h-8 text-white" />, title: "Low MOQ", desc: "Start from as low as 500 pieces per SKU. Perfect for testing new markets & collections." },
  { icon: <Clock className="w-8 h-8 text-white" />, title: "Fast Sampling", desc: "Get your custom samples in just 7-10 days. Speed to market is our priority." },
  { icon: <Award className="w-8 h-8 text-white" />, title: "Certified Quality", desc: "ISO 22716, GMPC, FDA compliant. All products undergo rigorous quality testing." },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "Share your vision, target market & budget requirements" },
  { num: "02", title: "Fragrance Development", desc: "Our perfumers create custom scent profiles tailored to your brand" },
  { num: "03", title: "Sampling", desc: "Review & refine samples until you're 100% satisfied" },
  { num: "04", title: "Production", desc: "Mass production with strict QC at every stage" },
  { num: "05", title: "Delivery", desc: "Worldwide shipping with full documentation support" },
];

const factoryFeatures = [
  { icon: <Building2 className="w-5 h-5 text-primary" />, text: "15,000+ sqm modern production facility" },
  { icon: <Users className="w-5 h-5 text-primary" />, text: "200+ skilled workers & master perfumers" },
  { icon: <Beaker className="w-5 h-5 text-primary" />, text: "In-house R&D lab with 5000+ fragrance formulas" },
  { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "ISO 22716 & GMPC certified factory" },
  { icon: <Truck className="w-5 h-5 text-primary" />, text: "Daily capacity of 50,000+ bottles" },
  { icon: <Globe2 className="w-5 h-5 text-primary" />, text: "Exporting to 80+ countries worldwide" },
];

const certifications = [
  { icon: <Award className="w-10 h-10 text-primary" />, name: "ISO 22716" },
  { icon: <ShieldCheck className="w-10 h-10 text-primary" />, name: "GMPC" },
  { icon: <CheckCircle2 className="w-10 h-10 text-primary" />, name: "FDA Registered" },
  { icon: <Leaf className="w-10 h-10 text-primary" />, name: "Cruelty-Free" },
  { icon: <Recycle className="w-10 h-10 text-primary" />, name: "Eco-Friendly" },
  { icon: <Star className="w-10 h-10 text-primary" />, name: "Halal Certified" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-primary-light/20 to-white/88 z-0"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-5 relative z-10 pt-32 pb-20">
          <div className="max-w-[650px]">
            <h1 className="text-[42px] md:text-[58px] leading-tight mb-8 text-foreground">
              Unveil the Aroma
            </h1>
            <p className="text-xl text-text-light mb-9 font-light leading-relaxed">
              Premium Perfume OEM &amp; ODM Solutions for Bold Brands Worldwide
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-[17px] font-medium text-foreground">
                <CheckCircle2 size={18} className="text-primary shrink-0" /> For Bold Brands
              </li>
              <li className="flex items-center gap-3 text-[17px] font-medium text-foreground">
                <CheckCircle2 size={18} className="text-primary shrink-0" /> Original Inspired Scents
              </li>
              <li className="flex items-center gap-3 text-[17px] font-medium text-foreground">
                <CheckCircle2 size={18} className="text-primary shrink-0" /> Custom Fragrance Manufacturing
              </li>
            </ul>
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(254,182,193,0.4)] transition-all tracking-wide"
            >
              DISCOVER YOUR SCENT
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Perfume Collection</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              From classic florals to modern orientals, we craft fragrances that captivate and endure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-2.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
                <div className="aspect-square bg-gradient-to-br from-primary-light/30 to-primary-light/10 flex items-center justify-center text-6xl">
                  {p.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold mb-2.5 text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>{p.name}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="relative rounded-[20px] overflow-hidden h-[400px] group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary-light/40 to-primary/20 flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-500">
                  {cat.emoji}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/75 to-transparent text-white">
                  <h3 className="text-[28px] mb-4">{cat.title}</h3>
                  <span className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark hover:translate-x-1 transition-all">
                    {cat.btn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Why Choose SINRORA</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Your trusted partner in perfume manufacturing excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center p-11 bg-white rounded-[20px] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(254,182,193,0.2)] transition-all border border-transparent hover:border-primary-light">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 text-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">How We Work</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              From concept to shelf in 5 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center mx-auto mb-5 text-[22px] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.num}
                </div>
                <h4 className="text-[17px] font-semibold mb-2.5 text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.title}</h4>
                <p className="text-[13px] text-text-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 rounded-[15px] overflow-hidden aspect-[2/1] bg-gradient-to-br from-primary-light/30 to-primary/10 flex items-center justify-center text-6xl">
                🏭
              </div>
              <div className="rounded-[15px] overflow-hidden aspect-square bg-gradient-to-br from-primary-light/20 to-primary-light/5 flex items-center justify-center text-5xl">
                🧪
              </div>
              <div className="rounded-[15px] overflow-hidden aspect-square bg-gradient-to-br from-primary-light/20 to-primary-light/5 flex items-center justify-center text-5xl">
                📦
              </div>
            </div>
            <div>
              <h3 className="text-[36px] mb-7 text-foreground">State-of-the-Art Manufacturing Facility</h3>
              <ul className="space-y-0">
                {factoryFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 py-4 border-b border-gray-100 text-base text-foreground">
                    {f.icon}
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Certifications &amp; Compliance</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Meeting global standards for safety and quality
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {certifications.map((c, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-[15px] shadow-[0_2px_10px_rgba(254,182,193,0.15)] min-w-[180px] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(254,182,193,0.2)] transition-all">
                <div className="mb-4 flex justify-center">{c.icon}</div>
                <div className="text-base font-semibold text-foreground">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-[44px] mb-5 text-white">Ready to Create Your Signature Scent?</h2>
          <p className="text-xl mb-10 opacity-95 font-light">Get a free consultation and quote within 24 hours</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-12 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            GET YOUR FREE QUOTE NOW
          </Link>
        </div>
      </section>

      <div className="fixed right-6 bottom-28 z-50 flex flex-col gap-3">
        <a href="https://wa.me/8613610131362" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl shadow-[0_8px_30px_rgba(254,182,193,0.2)] hover:scale-110 transition-transform" title="WhatsApp">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="mailto:jarvis@sinrora.com" className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center text-xl shadow-[0_8px_30px_rgba(254,182,193,0.2)] hover:scale-110 transition-transform" title="Email Us">
          ✉
        </a>
      </div>
    </main>
  );
}
