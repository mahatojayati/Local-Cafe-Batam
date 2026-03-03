import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rio Wang',
    role: 'Local Guide',
    text: 'Halal cafe. Just popping over to chalk up a visit to a cafe for this trip. Had the Butterscorch Seasalt coffee and Tiramisu crepe cake... entirely forgot it\'s a Halal cafe.',
    rating: 5,
  },
  {
    name: 'Shirahoshi Hanabi',
    role: 'Local Guide',
    text: 'Visited Local Cafe in the afternoon. Atmosphere was lively, they just opened and grand opening from 16th till 18th May 2025.',
    rating: 5,
  },
  {
    name: 'Customer',
    role: 'Quick Take',
    text: 'It\'s in a shophouse right on the road, easy to find. Inside, it\'s spacious and clean. The AC was great, super cool even on a hot day. Plus, the service was really friendly.',
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#2C2C2C] mb-6">
              What Our <span className="italic text-[#5A5A40]">Guests Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-medium text-[#2C2C2C]">4.4</span>
              <div className="flex gap-1 text-[#5A5A40]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'fill-current opacity-50'}`} />
                ))}
              </div>
            </div>
            <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
              Based on 194 reviews from our wonderful customers.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#FAF9F6] p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-[#5A5A40]/10" />
              <div className="flex gap-1 text-[#5A5A40] mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[#2C2C2C]/80 leading-relaxed mb-8 italic">
                &quot;{review.text}&quot;
              </p>
              <div>
                <h4 className="font-medium text-[#2C2C2C]">{review.name}</h4>
                <p className="text-sm text-[#2C2C2C]/60">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
