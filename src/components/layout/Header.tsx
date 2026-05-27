"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const productCategories = [
  {
    title: "All Products",
    href: "/products",
  },
  {
    title: "New Arrival",
    href: "/products?tag=new-arrival",
  },
  {
    title: "Perfume & Fragrance",
    href: "/products?cat=perfume",
    highlight: true,
    subcategories: [
      { title: "Women's Perfume", href: "/products?cat=perfume-women" },
      { title: "Men's Fragrance", href: "/products?cat=perfume-men" },
      { title: "Unisex Scents", href: "/products?cat=perfume-unisex" },
      { title: "Body Mist & Splash", href: "/products?cat=body-mist" },
      { title: "Concentrated Perfume Oil", href: "/products?cat=perfume-oil" },
      { title: "Home Fragrance", href: "/products?cat=home-fragrance" },
    ],
  },
  {
    title: "Makeup",
    href: "/products?cat=makeup",
    subcategories: [
      { title: "Face", href: "/products?cat=makeup-face" },
      { title: "Eye", href: "/products?cat=makeup-eye" },
      { title: "Lip Collections", href: "/products?cat=makeup-lip" },
      { title: "Others", href: "/products?cat=makeup-others" },
    ],
  },
  {
    title: "Skincare",
    href: "/products?cat=skincare",
    comingSoon: true,
  },
  {
    title: "Personal Care",
    href: "/products?cat=personal-care",
    comingSoon: true,
  },
  {
    title: "Makeup Tools & Accessories",
    href: "/products?cat=makeup-tools",
    comingSoon: true,
  },
  {
    title: "Press on Nails",
    href: "/products?cat=press-on-nails",
    comingSoon: true,
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
        setOpenSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="hidden md:block bg-white border-b border-gray-100 py-2.5 text-[13px]">
        <div className="container mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-5 text-text-light">
            <a href="mailto:info@sinrora.com" className="hover:text-primary transition-colors">
              info@sinrora.com
            </a>
            <a href="tel:+8613800138000" className="hover:text-primary transition-colors">
              +86 138 0013 8000
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-light hover:text-primary transition-colors text-sm" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-text-light hover:text-primary transition-colors text-sm" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-text-light hover:text-primary transition-colors text-sm" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-text-light hover:text-primary transition-colors text-sm" aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[0_2px_10px_rgba(254,182,193,0.15)]">
        <div className="container mx-auto px-5 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-[32px] font-bold tracking-[2px] bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
              SINRORA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
              Home
            </Link>

            <div ref={productsRef} className="relative">
              <button
                onClick={() => { setIsProductsOpen(!isProductsOpen); setOpenSubmenu(null); }}
                className="text-[15px] font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full flex items-center gap-1"
              >
                Products <ChevronDown size={14} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-3 w-[260px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 py-3 z-50">
                  {productCategories.map((cat) => (
                    <div key={cat.title} className="relative group">
                      <Link
                        href={cat.href}
                        className="flex items-center justify-between px-5 py-2.5 text-[14px] font-medium text-foreground hover:bg-primary-light/30 hover:text-primary-dark transition-colors"
                        onClick={() => { setIsProductsOpen(false); setOpenSubmenu(null); }}
                      >
                        <span className="flex items-center gap-2">
                          {cat.highlight && <span className="w-1.5 h-1.5 rounded-full bg-primary-dark" />}
                          {cat.title}
                          {cat.comingSoon && <span className="text-[10px] text-text-light font-normal italic ml-1">Coming Soon</span>}
                        </span>
                        {cat.subcategories && <ChevronDown size={12} className="-rotate-90" />}
                      </Link>
                      {cat.subcategories && openSubmenu === cat.title && (
                        <div className="absolute left-full top-0 ml-1 w-[220px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 py-3 z-50">
                          {cat.subcategories.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="block px-5 py-2.5 text-[13px] text-foreground hover:bg-primary-light/30 hover:text-primary-dark transition-colors"
                              onClick={() => { setIsProductsOpen(false); setOpenSubmenu(null); }}
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                      {cat.subcategories && (
                        <div
                          className="absolute left-full top-0 w-[220px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                          onMouseEnter={() => setOpenSubmenu(cat.title)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          <div className="ml-1 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 py-3">
                            {cat.subcategories.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="block px-5 py-2.5 text-[13px] text-foreground hover:bg-primary-light/30 hover:text-primary-dark transition-colors"
                                onClick={() => { setIsProductsOpen(false); setOpenSubmenu(null); }}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/how-to-customize" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
              How To Customize
            </Link>
            <Link href="/about" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
              About Us
            </Link>
            <Link href="/contact" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
              Contact Us
            </Link>
            <Link href="/blog" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(254,182,193,0.3)] transition-all"
            >
              Get FREE Quote
            </Link>
          </nav>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white p-5">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-base font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <div>
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === "mobile-products" ? null : "mobile-products")}
                  className="text-base font-medium text-foreground hover:text-primary flex items-center gap-1 w-full"
                >
                  Products <ChevronDown size={14} className={`transition-transform ${openSubmenu === "mobile-products" ? "rotate-180" : ""}`} />
                </button>
                {openSubmenu === "mobile-products" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {productCategories.map((cat) => (
                      <div key={cat.title}>
                        <Link href={cat.href} className="block py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                          {cat.title} {cat.comingSoon && <span className="text-[10px] text-text-light italic">Coming Soon</span>}
                        </Link>
                        {cat.subcategories && (
                          <div className="ml-4 space-y-1">
                            {cat.subcategories.map((sub) => (
                              <Link key={sub.title} href={sub.href} className="block py-1 text-xs text-text-light hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/how-to-customize" className="text-base font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>How To Customize</Link>
              <Link href="/about" className="text-base font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="/contact" className="text-base font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <Link href="/blog" className="text-base font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-center font-semibold" onClick={() => setIsMenuOpen(false)}>
                Get FREE Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
