'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuHighlights from '@/components/MenuHighlights';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
