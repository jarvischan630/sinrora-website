import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Zap, Globe2, Ruler, Palette } from "lucide-react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import Link from "next/link";

export default function Home() {
  const advantages = [
    {
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      title: "Direct Source",
      description: "Based in Guangzhou — China's plush toy manufacturing hub. Direct access to top-tier factories and material suppliers."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Safety Certified",
      description: "All products comply with EN71, ASTM F963, and CPSIA standards. Safe for global markets from day one."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Fast Sampling",
      description: "From design to physical sample in 7-10 days. Quick iterations so you can launch faster."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      title: "Global Delivery",
      description: "Reliable shipping to 30+ countries. FOB, CIF, DDP — we handle the logistics so you don't have to."
    }
  ];

  const productCategories = [
    {
      emoji: "🧸",
      title: "Custom Plush Toys",
      desc: "Fully OEM/ODM — bring your design, we bring it to life with premium fabrics and expert craftsmanship."
    },
    {
      emoji: "🎮",
      title: "Anime & IP Plush",
      desc: "High-fidelity character plush for collectors and retail. Accurate colors, premium soft materials."
    },
    {
      emoji: "🛋️",
      title: "Plush Pillows",
      desc: "Decorative and functional plush cushions. Custom shapes, prints, and embroidery for home & lifestyle brands."
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
              Premium Plush Toys <br className="hidden md:block" />
              <span className="text-blue-600">Made Your Way</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              20+ years of plush expertise. Custom designs, strict quality control, and reliable delivery — 
              your trusted B2B plush toy partner from Guangzhou.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/products" 
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                View Products
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> OEM/ODM Service</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> EN71 & ASTM Certified</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Low MOQ from 500 pcs</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re not a general trading company — we&apos;re plush toy specialists with 20+ years of hands-on experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100 group">
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Lines</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focused on what we do best — high-quality plush toys for global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="aspect-[4/3] bg-gray-50 relative flex items-center justify-center">
                  <span className="text-7xl">{cat.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{cat.desc}</p>
                  <Link href="/products" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">See Our Workshop In Action</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Transparency is key to our business. Watch our factory tour to see how every plush toy 
                is crafted with care — from fabric cutting to final stitching and quality inspection.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  State-of-the-art cutting and stitching equipment
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  Rigorous safety and quality testing at every stage
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  20+ years of plush toy manufacturing expertise
                </li>
              </ul>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/videos" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Watch More Videos
                </Link>
                <Link href="/contact" className="inline-block bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                  Schedule a Tour
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <VideoPlayer 
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                title="Plush Toy Factory Tour" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From idea to delivery in 4 simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Share Your Idea", desc: "Send us your design, sketch, or reference images. We'll provide a free consultation and quote." },
              { step: "02", title: "Sample Making", desc: "We create a physical sample for your approval within 7-10 business days." },
              { step: "03", title: "Production", desc: "Mass production begins after approval. Strict QC at cutting, stitching, stuffing, and finishing." },
              { step: "04", title: "Delivery", desc: "Safe packaging and reliable shipping worldwide. FOB, CIF, or DDP available." },
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
      </section>
      
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Create Your Plush?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get in touch for a free quote and design consultation. WhatsApp us for the fastest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/8612345678900?text=Hi%20Sinrora%2C%20I%27m%20interested%20in%20your%20plush%20toys.%20Could%20we%20discuss%20a%20potential%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
