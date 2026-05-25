"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Videos", href: "/videos" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600 tracking-tight">Sinrora</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}