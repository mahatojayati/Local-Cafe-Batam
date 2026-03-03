import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Clock, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-sm font-medium mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span>4.4 (194 reviews)</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] text-[#2C2C2C] mb-6">
              Your Cozy <br />
              <span className="italic text-[#5A5A40]">Halal Cafe</span> <br />
              in Batam
            </h1>
            
            <p className="text-lg text-[#2C2C2C]/70 mb-10 max-w-lg leading-relaxed">
              A perfect blend of simple Western and Indonesian fast food. 
              Spacious, clean, and fully air-conditioned for your comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#menu"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#5A5A40] text-white font-medium hover:bg-[#4A4A30] transition-colors"
              >
                View Menu
              </Link>
              <Link
                href="https://wa.me/6282180365731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full border border-[#5A5A40] text-[#5A5A40] font-medium hover:bg-[#5A5A40]/5 transition-colors"
              >
                Order Online
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm text-[#2C2C2C]/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#5A5A40]" />
                <span>Baloi Indah, Batam City</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#5A5A40]" />
                <span>Open · Closes 11:30 PM</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/coffee-shop-interior/800/1000"
                alt="Local Cafe Batam Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden sm:block">
              <p className="font-serif italic text-xl text-[#2C2C2C] mb-2">&quot;Great food that suits my taste.&quot;</p>
              <div className="flex gap-1 text-[#5A5A40]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
