'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.3, 1, 1]);

  return (
    <section className="relative -mt-20 pt-10 pb-20 overflow-auto z-20">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-gray-100/40"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
      <Container className="relative">
        <div ref={containerRef} className="relative">
          {/* Screenshot Container */}
          <div className="relative w-full max-w-5xl mx-auto">
            <motion.div
              style={{ 
                y,
                scale,
                opacity,
              }}
              className="relative w-full"
            >
              <div className="relative w-full rounded-3xl shadow-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                <Image
                  src="/apps-screenshot.png"
                  alt="Application dashboard screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
                {/* Corner gradients */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-radial from-transparent to-black/5" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial from-transparent to-black/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
