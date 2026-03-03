import Link from 'next/link';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#2C2C2C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-[#5A5A40]" />
            <span className="font-serif text-2xl font-semibold tracking-tight text-[#2C2C2C]">Local Cafe Batam</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2C2C2C]/70 hover:text-[#5A5A40] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/6282180365731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5A5A40] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4A4A30] transition-colors"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2C2C2C]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F6] border-b border-[#2C2C2C]/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-[#2C2C2C]/80 hover:text-[#5A5A40] uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/6282180365731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5A5A40] text-white px-6 py-3 rounded-full text-center font-medium mt-4 mx-3"
              >
                Order Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
