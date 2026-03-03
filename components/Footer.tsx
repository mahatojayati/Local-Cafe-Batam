import { Coffee, Instagram, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#FAF9F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-[#FAF9F6]" />
              <span className="font-serif text-2xl font-semibold tracking-tight">Local Cafe Batam</span>
            </Link>
            <p className="text-[#FAF9F6]/70 leading-relaxed max-w-sm">
              Your cozy halal cafe in Batam. Serving great coffee, delicious food, and a relaxing atmosphere for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] transition-colors">About</Link></li>
              <li><Link href="#menu" className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] transition-colors">Menu</Link></li>
              <li><Link href="#reviews" className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium mb-6">Connect</h3>
            <div className="flex gap-4">
              <a href="https://wa.me/6282180365731" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#FAF9F6]/10 flex items-center justify-center hover:bg-[#FAF9F6]/20 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#FAF9F6]/10 flex items-center justify-center hover:bg-[#FAF9F6]/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-[#FAF9F6]/70 text-sm">
                © {new Date().getFullYear()} Local Cafe Batam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
