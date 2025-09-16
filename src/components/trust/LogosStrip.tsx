'use client';

import Container from '@/components/ui/container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function LogosStrip() {
  const logos = [
    { src: '/dropbox_wordmark.svg', alt: 'Dropbox' },
    { src: '/godaddy.svg', alt: 'GoDaddy' },
    { src: '/paypal-wordmark.svg', alt: 'PayPal' },
    { src: '/whop.svg', alt: 'Whop' },
    { src: '/polar-sh_light.svg', alt: 'Polar' },
    { src: '/lovable.svg', alt: 'Lovable' },
    { src: '/canva.svg', alt: 'Canva' },
    { src: '/adobe.svg', alt: 'Adobe' },
    { src: '/spotify_wordmark.svg', alt: 'Spotify' },

  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8">
      <Container>
        <p className="text-center text-base text-gray-500 mb-10">Trusted by digital marketing companies around the world</p>
        <div className="mt-8 relative">
          {/* Mask container */}
          <div className="overflow-hidden relative">
            {/* Add extra padding to hide logo pop-in */}
            <div ref={containerRef} className="px-12">
              <motion.div
                className="flex items-center gap-x-16"
                animate={{
                  x: [0, -50 * (logos.length + 2)], // Add extra offset for seamless loop
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`${logo.src}-${index}`}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-200 flex-shrink-0 w-32"
                  >
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={128} 
                      height={40}
                      className="h-8 w-auto object-contain" 
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Edges - made wider and more aggressive fade */}
            <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
          </div>
        </div>
      </Container>
    </section>
  );
}
