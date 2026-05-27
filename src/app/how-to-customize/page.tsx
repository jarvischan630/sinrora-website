import { CheckCircle2, ClipboardList, Palette, FlaskConical, Package, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-white" />,
    title: "1. Share Your Vision",
    desc: "Tell us about your brand, target market, and fragrance preferences. Share reference scents, mood boards, or any inspiration that helps us understand your vision.",
    details: ["Target market & demographics", "Budget range & MOQ", "Reference fragrances or scent profiles", "Packaging style preferences"],
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-white" />,
    title: "2. Fragrance Development",
    desc: "Our master perfumers craft custom scent profiles tailored to your brand identity. We develop 2-3 variations for you to choose from.",
    details: ["Custom formulation by expert perfumers", "2-3 scent variations included", "IFRA compliant formulations", "Natural & synthetic options available"],
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "3. Packaging Design",
    desc: "Choose from our extensive bottle & packaging catalog, or create fully custom designs. Our design team brings your brand vision to life.",
    details: ["1000+ bottle molds available", "Custom bottle shape design", "Full packaging design service", "Eco-friendly packaging options"],
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    title: "4. Sample Approval",
    desc: "Receive physical samples within 7-10 days. Review, test, and refine until you're 100% satisfied with the final product.",
    details: ["7-10 day sampling turnaround", "Free revisions included", "Stability & safety testing", "Pre-production sample confirmation"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "5. Mass Production",
    desc: "Once approved, we begin full-scale production with rigorous quality control at every stage. Regular progress updates provided.",
    details: ["Strict QC at every production stage", "Batch consistency guaranteed", "Real-time production updates", "Third-party inspection available"],
  },
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "6. Delivery & Support",
    desc: "We handle worldwide shipping with full documentation. Ongoing support for reorders, formula adjustments, and market expansion.",
    details: ["Worldwide shipping (FOB/CIF/EXW)", "Full export documentation", "After-sales support", "Formula archiving for reorders"],
  },
];

const options = [
  { title: "OEM Service", desc: "Use your brand name on our proven formulations. Choose from 5000+ existing fragrance formulas with custom packaging.", emoji: "🏷️" },
  { title: "ODM Service", desc: "Fully bespoke from scent to packaging. Our team develops everything from scratch based on your brand vision.", emoji: "✨" },
  { title: "Private Label", desc: "Quick launch with our ready-made product lines. Simply add your brand logo and hit the market fast.", emoji: "📦" },
  { title: "White Label", desc: "Unbranded products ready for your customization. Lowest MOQ and fastest time to market.", emoji: "🤝" },
];

export default function HowToCustomizePage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-28 bg-gradient-to-br from-primary-light/20 to-white overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-[48px] mb-5 text-foreground">How To Customize</h1>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              From concept to shelf in 6 simple steps. Your complete guide to creating custom fragrance products with SINRORA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Customization Process</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              A streamlined 6-step process designed for speed, quality, and your complete satisfaction
            </p>
          </div>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 md:p-10 shadow-[0_2px_10px_rgba(254,182,193,0.15)] hover:shadow-[0_8px_30px_rgba(254,182,193,0.2)] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 text-foreground">{s.title}</h3>
                    <p className="text-text-light leading-relaxed font-light">{s.desc}</p>
                  </div>
                  <div className="bg-bg-light rounded-xl p-6">
                    <div className="text-sm font-semibold text-foreground mb-3">What&apos;s Included:</div>
                    <ul className="space-y-2">
                      {s.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Service Options</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Choose the level of customization that fits your brand needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {options.map((o, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 text-center hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(254,182,193,0.2)] transition-all border border-transparent hover:border-primary-light">
                <div className="text-5xl mb-5">{o.emoji}</div>
                <h3 className="text-xl mb-3 text-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{o.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="bg-gradient-to-br from-primary-light/20 to-primary-light/5 rounded-[20px] p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[36px] mb-6 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is the minimum order quantity (MOQ)?", a: "Our standard MOQ starts from 500 pieces per SKU for perfumes and 1000 pieces for body mists. We also offer trial orders for new clients." },
                    { q: "How long does the whole process take?", a: "From initial consultation to delivery, the typical timeline is 30-45 days. Sampling takes 7-10 days, and mass production 20-30 days depending on order size." },
                    { q: "Can I request a specific fragrance note?", a: "Absolutely! Our perfumers can create any scent profile you desire. Share your reference fragrances or describe your ideal notes, and we'll develop custom formulations." },
                    { q: "Do you provide samples before mass production?", a: "Yes, we always provide pre-production samples for your approval. Sampling is a critical step to ensure the final product meets your expectations perfectly." },
                  ].map((faq, i) => (
                    <div key={i}>
                      <h4 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{faq.q}</h4>
                      <p className="text-sm text-text-light leading-relaxed font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-7xl mb-6">💬</div>
                <h3 className="text-2xl mb-3 text-foreground">Still Have Questions?</h3>
                <p className="text-text-light mb-6 font-light">Our team is ready to help you start your custom fragrance journey.</p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(254,182,193,0.3)] transition-all"
                >
                  CONTACT US NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-[44px] mb-5 text-white">Ready to Create Your Signature Scent?</h2>
          <p className="text-xl mb-10 opacity-95 font-light">Start your custom fragrance project today — free consultation included</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-12 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            GET YOUR FREE QUOTE
          </Link>
        </div>
      </section>
    </main>
  );
}
