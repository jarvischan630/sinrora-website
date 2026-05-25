"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle, ExternalLink, CheckCircle2 } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "#", color: "bg-blue-700 hover:bg-blue-800" },
  { name: "YouTube", href: "#", color: "bg-red-600 hover:bg-red-700" },
  { name: "TikTok", href: "#", color: "bg-black hover:bg-gray-800" },
  { name: "Instagram", href: "#", color: "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Let&apos;s Start a <br />
              <span className="text-blue-600">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a project in mind? Need a quote? Or just want to chat about plush toys? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", company: "", email: "", phone: "", productType: "", message: "" });
                    }}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                          placeholder="Company Ltd."
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Type</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow bg-white"
                      >
                        <option value="">Select a product category</option>
                        <option value="custom-plush">Custom Plush Toys</option>
                        <option value="anime-ip">Anime & IP Plush</option>
                        <option value="plush-pillows">Plush Pillows & Cushions</option>
                        <option value="promotional">Promotional Plush Gifts</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message / Requirements *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow resize-none"
                        placeholder="Tell us about your project — design ideas, quantity, timeline, target market, etc."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                    >
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Direct Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <a href="https://wa.me/8612345678900" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        +86 123 4567 8900
                      </a>
                      <p className="text-xs text-gray-400 mt-0.5">Usually replies within 1 hour</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:contact@sinrora.com" className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        contact@sinrora.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">Guangzhou, Guangdong, China</p>
                      <p className="text-xs text-gray-400 mt-0.5">Visits by appointment welcome</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Hours</p>
                      <p className="font-medium text-gray-900">Mon–Sat, 9:00–18:00 (GMT+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/8612345678900?text=Hi%20Sinrora%2C%20I%27m%20interested%20in%20your%20plush%20toys.%20Could%20we%20discuss%20a%20potential%20project%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 font-bold text-center transition-colors shadow-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <MessageCircle size={24} />
                  <span className="text-lg">Chat on WhatsApp</span>
                </div>
                <p className="text-green-100 text-sm font-normal mt-1">Quick response, usually within 1 hour</p>
              </a>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${s.color} text-white px-4 py-2.5 rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center gap-1.5`}
                    >
                      <ExternalLink size={14} /> {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
