import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2, Wind, Gamepad2, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: '100% Halal',
      description: 'Certified halal ingredients and preparation.',
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Fully Air-Conditioned',
      description: 'Super cool even on a hot Batam day.',
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: 'Board Games',
      description: 'Enjoy our collection of board games with friends.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Family Friendly',
      description: 'Spacious and clean environment for everyone.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/cafe-friends/800/1000"
                alt="Friends enjoying coffee"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#2C2C2C] mb-6">
              More Than Just <br />
              <span className="italic text-[#5A5A40]">a Coffee Shop</span>
            </h2>
            
            <p className="text-lg text-[#2C2C2C]/70 mb-12 leading-relaxed">
              Located in a shophouse right on the road, Local Cafe is easy to find. 
              Inside, it&apos;s spacious, clean, and designed for your comfort. Whether you&apos;re 
              here for a quick bite, a long catch-up, or to play board games, our friendly 
              staff is ready to serve you.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2C2C2C] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
