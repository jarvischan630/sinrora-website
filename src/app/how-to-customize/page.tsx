import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Share Your Vision",
    desc: "Tell us about your brand, target market, and the cigar accessories you need. Send us references, sketches, or just an idea — we'll take it from there.",
    details: ["Product type & size", "Material preferences", "Target price range", "Brand positioning"],
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "Our design team creates 3D renderings and technical drawings. Choose from our catalog of 200+ existing models or create something entirely new.",
    details: ["3D rendering within 48h", "Material swatches available", "Structure optimization", "Packaging design"],
  },
  {
    num: "03",
    title: "Sample Production",
    desc: "Receive physical samples in just 7 days. We include multiple material options so you can compare and choose the perfect combination.",
    details: ["7-day sample delivery", "Multiple material options", "Free revision round", "Photo & video documentation"],
  },
  {
    num: "04",
    title: "Confirm & Order",
    desc: "Review your samples, confirm specifications, and place your order. We provide a detailed Proforma Invoice with all terms clearly stated.",
    details: ["Detailed PI with all specs", "Flexible payment terms", "Production timeline", "QC checklist agreement"],
  },
  {
    num: "05",
    title: "Production & QC",
    desc: "Mass production begins with strict quality control at every stage. You receive regular photo & video updates throughout the process.",
    details: ["In-line QC inspection", "Daily progress updates", "Pre-shipment inspection", "Third-party inspection welcome"],
  },
  {
    num: "06",
    title: "Shipping & Aftercare",
    desc: "We handle all shipping documentation and customs clearance. After delivery, our team remains available for reorders and support.",
    details: ["Full documentation", "DDP/DDU/CIF options", "Reorder in 3 clicks", "Lifetime quality guarantee"],
  },
];

const serviceModels = [
  {
    title: "OEM",
    subtitle: "Your Brand, Our Manufacturing",
    desc: "You provide the design and brand. We manufacture to your exact specifications with your branding, labels, and packaging.",
    features: ["Your brand on all products", "Custom specifications", "Your packaging design", "Full IP protection"],
  },
  {
    title: "ODM",
    subtitle: "Our Design, Your Brand",
    desc: "Choose from our catalog of 200+ proven designs. We customize with your brand name, logo, and color preferences.",
    features: ["200+ proven designs", "Quick time to market", "Lower development cost", "Tested & refined products"],
  },
  {
    title: "Private Label",
    subtitle: "White Label with Your Brand",
    desc: "Our existing products with your brand label. Fastest way to launch your cigar accessories line with minimal investment.",
    features: ["Fastest launch option", "Lowest MOQ", "Minimal customization", "Ready to ship inventory"],
  },
  {
    title: "Custom Engraving",
    subtitle: "Personalized Luxury",
    desc: "Add laser engraving, embossing, or custom hardware to any product. Perfect for corporate gifts, groomsmen gifts, and premium branding.",
    features: ["Laser engraving", "Embossing & debossing", "Custom hardware", "Gift packaging"],
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our MOQ starts from just 20 pieces for desktop humidors and leather cases. For aluminum tubes, MOQ is 50 pcs. Cabinet humidors have MOQ of 2-5 pcs due to their high value.",
  },
  {
    q: "How long does sampling take?",
    a: "Standard samples are delivered within 7 days. Custom designs with new tooling may take 10-14 days. We provide free revision rounds to ensure you're 100% satisfied.",
  },
  {
    q: "Can I mix different products in one order?",
    a: "Absolutely! Many of our clients order humidors, cases, and accessories together. We can consolidate everything into one shipment to save on logistics costs.",
  },
  {
    q: "What materials do you use for humidors?",
    a: "We use premium Spanish cedar (Cedrela odorata) for all humidor interiors — the gold standard for cigar preservation. Exterior options include mahogany, walnut, cherry wood, and various finishes.",
  },
  {
    q: "Do you provide custom packaging?",
    a: "Yes! We offer full custom packaging including gift boxes, display boxes, and retail packaging. We can also source matching accessories like cutters and lighters for brand bundling.",
  },
  {
    q: "What certifications do your products have?",
    a: "Our factories hold ISO 9001, FSC (for sustainable cedar sourcing), BSCI, and SGS certifications. We can also arrange specific testing for your market requirements.",
  },
];

export default function HowToCustomizePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-dark py-24 text-white">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-[48px] mb-5">How To Customize</h1>
          <p className="text-xl opacity-95 font-light max-w-[700px] mx-auto">
            From concept to delivery in 6 simple steps — your custom cigar accessories journey
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Your Customization Journey</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              We make it easy to create your own branded cigar accessories
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.num}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</h3>
                  <p className="text-text-light leading-relaxed mb-4">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((d, j) => (
                      <span key={j} className="text-xs px-3 py-1.5 bg-accent-light/20 text-primary-dark rounded-full font-medium">
                        {d}
                      </span>
                    ))}
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
            <h2 className="text-[42px] mb-5 text-foreground">Service Models</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Choose the collaboration model that fits your brand
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceModels.map((model, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(92,61,46,0.15)] transition-all border border-transparent hover:border-accent-light">
                <div className="text-3xl font-bold text-accent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{model.title}</div>
                <div className="text-sm text-text-light mb-4 font-medium">{model.subtitle}</div>
                <p className="text-sm text-text-light leading-relaxed mb-5">{model.desc}</p>
                <ul className="space-y-2">
                  {model.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-[70px]">
            <h2 className="text-[42px] mb-5 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Common questions about our customization process
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[15px] p-7 shadow-[0_2px_10px_rgba(92,61,46,0.08)]">
                <h4 className="text-lg font-semibold text-foreground mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{faq.q}</h4>
                <p className="text-sm text-text-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-[44px] mb-5 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 opacity-95 font-light">Get a free consultation and custom samples in 7 days</p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-12 py-4 rounded-full font-semibold text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}
