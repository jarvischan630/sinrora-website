import { Building2, Users, Globe2, Award, ShieldCheck, Leaf, Recycle, Star } from "lucide-react";

const stats = [
  { number: "10+", label: "Partner Factories" },
  { number: "80+", label: "Countries Served" },
  { number: "500+", label: "Custom Projects" },
  { number: "15+", label: "Years Experience" },
];

const values = [
  { icon: <ShieldCheck className="w-8 h-8 text-accent" />, title: "Quality First", desc: "Every humidor undergoes 12-point QC inspection. Spanish cedar must pass moisture content & grain quality tests before use." },
  { icon: <Leaf className="w-8 h-8 text-accent" />, title: "Sustainable Sourcing", desc: "FSC-certified Spanish cedar from responsibly managed forests. We believe premium cigars deserve sustainable protection." },
  { icon: <Star className="w-8 h-8 text-accent" />, title: "Craftsmanship", desc: "Master craftsmen with 15+ years of experience. Hand-sanded finishes, precision joinery, and attention to every detail." },
  { icon: <Globe2 className="w-8 h-8 text-accent" />, title: "Global Standards", desc: "ISO 9001, BSCI audited, SGS verified. Meeting the strictest requirements of US, EU, and Middle East markets." },
];

const timeline = [
  { year: "2009", title: "Founded in Guangzhou", desc: "Started as a small workshop producing wooden cigar boxes for local brands." },
  { year: "2012", title: "First Export Order", desc: "Shipped our first container of humidors to the US market. Expanded to leather cigar cases." },
  { year: "2015", title: "Factory Network Expansion", desc: "Partnered with 5 specialized factories covering wood, leather, metal & crystal product lines." },
  { year: "2018", title: "ISO 9001 Certification", desc: "Achieved ISO 9001 quality management certification. Opened dedicated R&D and design center." },
  { year: "2021", title: "FSC Certification", desc: "Obtained FSC chain-of-custody certification for sustainable cedar sourcing. Reached 50+ country coverage." },
  { year: "2024", title: "10+ Factory Network", desc: "Now operating 10+ partner factories with 80+ country coverage. Full OEM/ODM solutions from $3 to $4,000." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-dark py-24 text-white">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-[48px] mb-5">About SINRORA</h1>
          <p className="text-xl opacity-95 font-light max-w-[700px] mx-auto">
            Your trusted partner in premium cigar accessories manufacturing since 2009
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] mb-6 text-foreground">From Workshop to Global Network</h2>
              <p className="text-text-light leading-relaxed mb-5">
                SINRORA was founded in 2009 in Guangzhou, China — the heart of the world&apos;s manufacturing hub. What started as a small workshop producing wooden cigar boxes has grown into a network of 10+ specialized factories serving brands in 80+ countries.
              </p>
              <p className="text-text-light leading-relaxed mb-5">
                We specialize in the full spectrum of cigar accessories: from $3 aluminum tubes to $4,000 walk-in humidor cabinets. Our expertise spans Spanish cedar humidors, genuine leather cases, custom engraving, and complete accessory lines.
              </p>
              <p className="text-text-light leading-relaxed">
                Unlike trading companies, we operate a vetted factory network with dedicated QC teams at each facility. This means you get factory-direct pricing with the quality assurance of a professional trading partner.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 rounded-[15px] overflow-hidden aspect-[2/1] bg-gradient-to-br from-primary-light/20 to-accent-light/15 flex items-center justify-center text-6xl">
                🏭
              </div>
              <div className="rounded-[15px] overflow-hidden aspect-square bg-gradient-to-br from-accent-light/15 to-primary-light/10 flex items-center justify-center text-5xl">
                🪵
              </div>
              <div className="rounded-[15px] overflow-hidden aspect-square bg-gradient-to-br from-accent-light/15 to-primary-light/10 flex items-center justify-center text-5xl">
                🤝
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[48px] font-bold text-accent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.number}</div>
                <div className="text-base text-text-light">{s.label}</div>
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
              <div key={i} className="text-center p-8 bg-white rounded-[20px] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(92,61,46,0.15)] transition-all border border-transparent hover:border-accent-light">
                <div className="mb-5 flex justify-center">{v.icon}</div>
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
              15 years of growth and innovation
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-grow bg-accent-light mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="text-sm font-semibold text-accent mb-1">{t.year}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.title}</h4>
                  <p className="text-sm text-text-light leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-[44px] mb-5 text-white">Ready to Partner With Us?</h2>
          <p className="text-xl mb-10 opacity-95 font-light">Join 500+ brands who trust SINRORA for their cigar accessories</p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-12 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </main>
  );
}
