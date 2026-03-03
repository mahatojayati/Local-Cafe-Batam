import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#2C2C2C] mb-6">
              Find <span className="italic text-[#5A5A40]">Us</span>
            </h2>
            <p className="text-lg text-[#2C2C2C]/70 mb-12 leading-relaxed">
              We&apos;re located in a shophouse right on the road, easy to find. Drop by for a great cup of coffee and delicious food.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] mb-1">Address</h3>
                  <p className="text-[#2C2C2C]/70 leading-relaxed">
                    Jalan Permata Baloi Ruko Permata Niaga Regency Blok AA Nomor 6-8, <br />
                    Baloi Indah, Kec. Lubuk Baja, Kota Batam, <br />
                    Kepulauan Riau 29432, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] mb-1">Hours</h3>
                  <p className="text-[#2C2C2C]/70 leading-relaxed">
                    Open Daily <br />
                    Closes at 11:30 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] mb-1">Contact</h3>
                  <p className="text-[#2C2C2C]/70 leading-relaxed">
                    <a href="https://wa.me/6282180365731" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] transition-colors">
                      +62 821-8036-5731 (WhatsApp)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] mb-1">Social</h3>
                  <p className="text-[#2C2C2C]/70 leading-relaxed">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] transition-colors">
                      @localcafebatam
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl"
          >
            {/* Using a placeholder for the map */}
            <Image
              src="https://picsum.photos/seed/batam-map/800/1000"
              alt="Map location of Local Cafe Batam"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl animate-bounce">
              <MapPin className="w-8 h-8 text-[#5A5A40]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
