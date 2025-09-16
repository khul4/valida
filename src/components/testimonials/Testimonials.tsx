'use client';

import Container from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const dummyAvatars = [
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9IiNGM0Y0RjYiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4NSIgcj0iMzUiIGZpbGw9IiM5Q0EzQUYiLz4KICA8cGF0aCBkPSJNMTAwIDE0MEMxMzQuNzcyIDE0MCAxNjMgMTY4LjIyOCAxNjMgMjAzSDM3QzM3IDE2OC4yMjggNjUuMjI4IDE0MCAxMDAgMTQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K',
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9IiNGM0Y0RjYiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4NSIgcj0iMzUiIGZpbGw9IiM5Q0EzQUYiLz4KICA8cGF0aCBkPSJNMTAwIDE0MEMxMzQuNzcyIDE0MCAxNjMgMTY4LjIyOCAxNjMgMjAzSDM3QzM3IDE2OC4yMjggNjUuMjI4IDE0MCAxMDAgMTQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K',
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9IiNGM0Y0RjYiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4NSIgcj0iMzUiIGZpbGw9IiM5Q0EzQUYiLz4KICA8cGF0aCBkPSJNMTAwIDE0MEMxMzQuNzcyIDE0MCAxNjMgMTY4LjIyOCAxNjMgMjAzSDM3QzM3IDE2OC4yMjggNjUuMjI4IDE0MCAxMDAgMTQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
];

const baseTestimonials = [
  {
    content: "It's like product analytics finally caught up with design. We use Reporto not just for numbers—but to tell the story behind them. It's become our go-to tool for every launch.",
    author: "James Nair",
    role: "Product Manager at TechCorp",
    rating: 5,
    avatar: dummyAvatars[0]
  },
  {
    content: "Reporto gave us visibility we didn't even know we were missing. Within the first week, we discovered which features were actually driving retention. It's clean, fast, and honestly kind of addictive.",
    author: "Marcus Lee",
    role: "Head of Analytics at DataFlow",
    rating: 5,
    avatar: dummyAvatars[1]
  },
  {
    content: "Since switching to Reporto, we finally understand how users interact with our product. The engineering team was able to implement it independently in hours.",
    author: "Sarah Bowen",
    role: "CTO at InnovateLab",
    rating: 5,
    avatar: dummyAvatars[2]
  }
];

// Create a triple copy of testimonials with unique IDs for smooth infinite scroll
const testimonials = [
  ...baseTestimonials.map((t, i) => ({ ...t, id: `original-${i}` })),
  ...baseTestimonials.map((t, i) => ({ ...t, id: `copy1-${i}` })),
  ...baseTestimonials.map((t, i) => ({ ...t, id: `copy2-${i}` }))
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <Container className="overflow-hidden">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-medium mb-6"
          >
            Hear What Others <br />Say About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl"
          >
            See how others have experienced Arek and the impact we’ve made together.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Mask containers */}
          <div className="absolute inset-y-0 left-0 w-[5%] bg-white z-10" />
          <div className="absolute inset-y-0 right-0 w-[5%] bg-white z-10" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-[5%] w-[10%] bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-[5%] w-[10%] bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex gap-4 px-[5%]"
            initial={{ x: 0 }}
            animate={{ x: "-33.33%" }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="min-w-[320px] bg-white p-5 rounded-xl shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-800">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        sizes="32px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">{testimonial.author}</h4>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
