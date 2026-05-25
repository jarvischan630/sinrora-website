import { CheckCircle2, Award, Users, Clock, Heart, Target, Lightbulb, Handshake } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Passion for Plush",
    desc: "20+ years of hands-on experience in the plush toy industry. We don't just manufacture — we live and breathe plush.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Client-First Approach",
    desc: "Your success is our success. We treat every project as if it were our own, with meticulous attention to detail.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Creative Solutions",
    desc: "From concept to shelf, we bring creative ideas to life. Our design team helps transform rough sketches into market-ready products.",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Transparent Partnership",
    desc: "No hidden costs, no surprises. We believe in open communication and long-term relationships built on trust.",
  },
];

const milestones = [
  { year: "2005", event: "Founded in Guangzhou, started as a small plush toy workshop" },
  { year: "2010", event: "Expanded to OEM/ODM services, first international clients" },
  { year: "2015", event: "Achieved EN71 & ASTM certifications, entered EU & US markets" },
  { year: "2020", event: "Built dedicated QC team, expanded production capacity by 3x" },
  { year: "2024", event: "Launched Sinrora brand, serving 30+ countries worldwide" },
];

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "30+", label: "Countries Served" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              About Sinrora
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Two Decades of <br />
              <span className="text-blue-600">Plush Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Born from a genuine passion for plush toys, Sinrora combines decades of hands-on 
              industry experience with modern B2B service to deliver exceptional products worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sinrora was founded by someone who has spent over 20 years immersed in the world of 
                  plush toys — not as a distant executive, but as someone who has been hands-on with 
                  every stage of the process, from material selection to final stitch.
                </p>
                <p>
                  Based in Guangzhou, the heart of China&apos;s toy manufacturing industry, we have 
                  deep-rooted relationships with the best material suppliers, skilled craftsmen, and 
                  efficient logistics networks. This isn&apos;t just a business — it&apos;s a lifelong craft.
                </p>
                <p>
                  We understand that in B2B, trust is everything. That&apos;s why we operate with full 
                  transparency: factory tours (virtual or in-person), real-time production updates, and 
                  rigorous quality control at every step. When you work with Sinrora, you work with 
                  someone who genuinely cares about every plush toy that leaves our workshop.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-sm">Founder Photo / Workshop Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every product we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={i} className="relative flex gap-6 items-start">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10">
                      {m.year}
                    </div>
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-10 lg:p-14 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With a Specialist?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The plush toy industry has its own unique challenges — fabric quality, stuffing consistency, 
                  safety compliance, and design fidelity. General trading companies can&apos;t match the depth 
                  of knowledge that comes from 20 years of specialized experience.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deep understanding of plush materials and construction techniques",
                    "Established relationships with certified fabric and stuffing suppliers",
                    "Knowledge of international safety standards (EN71, ASTM, CPSIA)",
                    "Ability to spot and solve quality issues before they become problems",
                    "Faster sampling and more accurate cost estimation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/3 text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-16 h-16 text-blue-600" />
                </div>
                <p className="text-sm text-gray-500">Industry Specialist</p>
                <p className="text-2xl font-bold text-gray-900">20+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let&apos;s Build Something Together</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re launching a new plush brand or need a reliable manufacturing partner, we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
