import Image from 'next/image';
import { motion } from 'motion/react';

const menuItems = [
  {
    name: 'Nasi Gila Goreng',
    description: 'A chaotic mix of flavors in our signature fried rice.',
    price: 'Rp 35K',
    image: 'https://picsum.photos/seed/nasi-goreng/600/600',
  },
  {
    name: 'Soto Ayam',
    description: 'Traditional Indonesian chicken soup, warm and comforting.',
    price: 'Rp 30K',
    image: 'https://picsum.photos/seed/soto-ayam/600/600',
  },
  {
    name: 'Kopi Susu Gula Aren',
    description: 'Classic iced milk coffee with palm sugar.',
    price: 'Rp 25K',
    image: 'https://picsum.photos/seed/kopi-susu/600/600',
  },
  {
    name: 'Butterscotch Seasalt Coffee',
    description: 'Sweet, salty, and perfectly balanced coffee.',
    price: 'Rp 35K',
    image: 'https://picsum.photos/seed/butterscotch-coffee/600/600',
  },
  {
    name: 'Tiramisu Crepe Cake',
    description: 'Layers of delicate crepe with rich tiramisu cream.',
    price: 'Rp 40K',
    image: 'https://picsum.photos/seed/tiramisu-crepe/600/600',
  },
  {
    name: 'Spaghetti',
    description: 'Simple western pasta dish, a crowd favorite.',
    price: 'Rp 45K',
    image: 'https://picsum.photos/seed/spaghetti/600/600',
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#2C2C2C] mb-6">
              Menu <span className="italic text-[#5A5A40]">Highlights</span>
            </h2>
            <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
              A combination of simple Western and Indonesian fast food, crafted to suit your taste.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-medium text-[#2C2C2C]">{item.name}</h3>
                  <span className="font-medium text-[#5A5A40]">{item.price}</span>
                </div>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/6282180365731"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#5A5A40] text-white font-medium hover:bg-[#4A4A30] transition-colors"
          >
            Order Full Menu Online
          </a>
        </div>
      </div>
    </section>
  );
}
