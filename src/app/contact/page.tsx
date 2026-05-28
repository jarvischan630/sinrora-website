"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productType: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.company || formData.name} - ${formData.productType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct Type: ${formData.productType}\nQuantity: ${formData.quantity}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@sinrora.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-dark py-24 text-white">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-[48px] mb-5">Get In Touch</h1>
          <p className="text-xl opacity-95 font-light max-w-[700px] mx-auto">
            Ready to start your custom cigar accessories project? We&apos;ll respond within 2-4 hours.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-[32px] mb-3 text-foreground">Send Us Your Requirements</h2>
              <p className="text-text-light mb-8">Fill out the form below and we&apos;ll get back to you within 2-4 business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Product Type *</label>
                    <select
                      required
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground bg-white"
                    >
                      <option value="">Select product type</option>
                      <option value="Desktop Humidors">Desktop Humidors</option>
                      <option value="Travel Humidors">Travel Humidors</option>
                      <option value="Cabinet Humidors">Cabinet Humidors</option>
                      <option value="Leather Cases">Leather Cases</option>
                      <option value="Aluminum Tubes">Aluminum Tubes</option>
                      <option value="Custom Engraved">Custom Engraved</option>
                      <option value="Cigar Accessories">Cigar Accessories</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Estimated Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground bg-white"
                    >
                      <option value="">Select quantity range</option>
                      <option value="20-50 pcs">20-50 pcs</option>
                      <option value="50-200 pcs">50-200 pcs</option>
                      <option value="200-500 pcs">200-500 pcs</option>
                      <option value="500-1000 pcs">500-1000 pcs</option>
                      <option value="1000+ pcs">1000+ pcs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-foreground"
                    placeholder="Tell us about your project: product specifications, customization needs, target market, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(92,61,46,0.3)] transition-all"
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-5 text-foreground">Quick Contact</h3>
                <div className="space-y-5">
                  <a href="mailto:info@sinrora.com" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-accent-light/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-text-light">Email</div>
                      <div className="font-medium">info@sinrora.com</div>
                    </div>
                  </a>
                  <a href="tel:+8613800138000" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-accent-light/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-text-light">Phone</div>
                      <div className="font-medium">+86 138 0013 8000</div>
                    </div>
                  </a>
                  <a href="https://wa.me/8613800138000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-sm text-text-light">WhatsApp</div>
                      <div className="font-medium">+86 138 0013 8000</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5 text-foreground">Office Address</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Guangzhou, China</div>
                    <div className="text-sm text-text-light mt-1">Tianhe District, Guangzhou, Guangdong Province, China 510620</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5 text-foreground">Business Hours</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light/20 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Mon - Sat: 9:00 AM - 6:00 PM</div>
                    <div className="text-sm text-text-light mt-1">China Standard Time (GMT+8)</div>
                    <div className="text-sm text-text-light">2-4 hour response time</div>
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
