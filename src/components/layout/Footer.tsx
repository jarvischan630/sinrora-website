import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white tracking-tight">Sinrora</span>
            </Link>
            <p className="text-sm text-gray-400">
              Premium plush toy manufacturer and B2B sourcing partner based in Guangzhou. 
              20+ years of expertise in custom plush toys, anime plush, and promotional gifts.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"><ExternalLink size={16} /> LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"><ExternalLink size={16} /> YouTube</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"><ExternalLink size={16} /> TikTok</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/videos" className="hover:text-white transition-colors">Videos</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Custom Plush Toys</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Anime & IP Plush</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Plush Pillows & Cushions</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Promotional Plush Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-blue-500 shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+86 123 4567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>contact@sinrora.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sinrora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
