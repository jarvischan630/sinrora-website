import { CheckCircle2, Award, Users, Globe2, Factory, Heart, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

const milestones = [
  { year: "2005", event: "Company founded in Guangzhou, China" },
  { year: "2008", event: "First export order to Middle East market" },
  { year: "2012", event: "Achieved ISO 22716 certification" },
  { year: "2015", event: "Expanded to 15,000 sqm production facility" },
  { year: "2018", event: "GMPC & FDA registration obtained" },
  { year: "2020", event: "Launched in-house R&D lab with 5000+ formulas" },
  { year: "2023", event: "Exporting to 80+ countries worldwide" },
  { year: "2025", event: "SINRORA brand launched for global B2B market" },
];

const values = [
  { icon: <Heart className="w-8 h-8 text-white" />, title: "Passion for Fragrance", desc: "Every scent we create is driven by a deep love for the art of perfumery." },
  { icon: <Target className="w-8 h-8 text-white" />, title: "Precision & Quality", desc: "Rigorous quality control at every stage ensures consistent excellence." },
  { icon: <Lightbulb className="w-8 h-8 text-white" />, title: "Innovation First", desc: "We invest in R&D to stay ahead of trends and deliver cutting-edge formulations." },
  { icon: <Globe2 className="w-8 h-8 text-white" />, title: "Global Partnership", desc: "We build long-term relationships with brands across 80+ countries." },
];

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "5000+", label: "Fragrance Formulas" },
  { number: "80+", label: "Countries Served" },
  { number: "200+", label: "Skilled Workers" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-28 bg-gradient-to-br from-primary-light/20 to-white overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-[48px] mb-5 text-foreground">About SINRORA</h1>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Your trusted partner in premium fragrance manufacturing since 2005
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] mb-7 text-foreground">Crafting Scents That Tell Stories</h2>
              <p className="text-text-light mb-6 leading-relaxed font-light">
                SINRORA was founded with a singular vision: to help brands around the world create signature fragrances that captivate and endure. With over 20 years of experience in the perfume manufacturing industry, we have grown from a small workshop in Guangzhou to a state-of-the-art facility serving clients in 80+ countries.
              </p>
              <p className="text-text-light mb-6 leading-relaxed font-light">
                Our team of master perfumers combines traditional craftsmanship with modern innovation, using only the finest raw materials sourced from Grasse, India, and other renowned fragrance capitals. Whether you need an inspired interpretation of a classic scent or a completely original composition, we bring your olfactory vision to life.
              </p>
              <p className="text-text-light leading-relaxed font-light">
                We specialize in OEM and ODM services for perfumes, body mists, perfume oils, home fragrances, and a growing range of beauty products. Our commitment to quality, speed, and flexibility has made us the preferred manufacturing partner for brands across the Middle East, Africa, Southeast Asia, Europe, and the Americas.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 rounded-[15px] overflow-hidden aspect-[2/1] bg-gradient-to-br from-primary-light/30 to-primary/10 flex items-center justify-center text-6xl">
                🏭
              </div>
              <div className="rounded-[15px] overflow-hidden aspect-square bg-gradient-to-br from-primary-light/20 to-primary-light/5 flex items-center justify-center text-5xl">
                🧪
              </div>
              <div className="rounded-[15px] overflow-hidden aspect-square bg-gradient-to-br from-primary-light/20 to-primary-light/5 flex items-center justify-center text-5xl">
                👥
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-[20px] shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
                <div className="text-[42px] font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.number}</div>
                <div className="text-sm text-text-light font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Our Values</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-11 bg-white rounded-[20px] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(254,182,193,0.2)] transition-all border border-transparent hover:border-primary-light">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl mb-3 text-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{v.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Our Journey</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Two decades of growth, innovation, and global impact
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-primary-light mt-2"></div>}
                </div>
                <div className="pt-2.5 pb-6">
                  <div className="text-sm font-bold text-primary mb-1">{m.year}</div>
                  <div className="text-base text-foreground">{m.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-[44px] mb-5 text-white">Ready to Partner With Us?</h2>
          <p className="text-xl mb-10 opacity-95 font-light">Join 500+ brands worldwide who trust SINRORA for their fragrance needs</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-12 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </main>
  );
}
