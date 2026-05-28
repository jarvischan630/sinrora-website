"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <main className="min-h-screen">
      <section className="relative py-28 bg-gradient-to-br from-primary-light/20 to-white overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-[48px] mb-5 text-foreground">Contact Us</h1>
            <p className="text-lg text-text-light max-w-[700px] mx-auto font-light">
              Ready to start your fragrance project? Get in touch and receive a free quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[20px] p-10 shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
                <h2 className="text-[28px] mb-2 text-foreground">Send Us a Message</h2>
                <p className="text-text-light mb-8 font-light">Fill out the form below and our team will respond within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl mb-3 text-foreground">Thank You!</h3>
                    <p className="text-text-light mb-6 font-light">Your inquiry has been received. Our team will contact you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", phone: "", productType: "", message: "" }); }}
                      className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all text-sm"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all text-sm"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all text-sm"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Product Type</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select a product category</option>
                        <option value="perfume-edp">Eau de Parfum (EDP)</option>
                        <option value="perfume-edt">Eau de Toilette (EDT)</option>
                        <option value="perfume-oil">Concentrated Perfume Oil</option>
                        <option value="body-mist">Body Mist & Splash</option>
                        <option value="home-fragrance">Home Fragrance</option>
                        <option value="makeup">Makeup Products</option>
                        <option value="custom">Custom / Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all text-sm resize-none"
                        placeholder="Tell us about your project, target market, MOQ requirements, and any specific fragrance notes you're looking for..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(254,182,193,0.3)] transition-all flex items-center gap-2"
                    >
                      <Send size={16} /> SEND INQUIRY
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
                <h3 className="text-xl mb-6 text-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>Quick Contact</h3>
                <div className="space-y-5">
                  <a href="mailto:info@sinrora.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                    <div className="w-12 h-12 bg-primary-light/30 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-light">Email</div>
                      <div className="text-sm font-medium">info@sinrora.com</div>
                    </div>
                  </a>
                  <a href="tel:+8613800138000" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                    <div className="w-12 h-12 bg-primary-light/30 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-light">Phone</div>
                      <div className="text-sm font-medium">+86 138 0013 8000</div>
                    </div>
                  </a>
                  <a href="https://wa.me/8613800138000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-xs text-text-light">WhatsApp</div>
                      <div className="text-sm font-medium">Chat Now</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
                <h3 className="text-xl mb-6 text-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>Office Address</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light/30 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground leading-relaxed">
                      Baiyun District, Guangzhou,<br />
                      Guangdong Province, China 510000
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
                <h3 className="text-xl mb-6 text-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>Business Hours</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light/30 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div className="text-sm text-foreground leading-relaxed">
                    Mon - Fri: 9:00 AM - 6:00 PM (CST)<br />
                    Sat: 9:00 AM - 1:00 PM (CST)<br />
                    <span className="text-text-light">Sun: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
