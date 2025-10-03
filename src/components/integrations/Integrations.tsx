'use client';

import Container from '@/components/ui/container';
import { inView } from 'motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const integrationLogos = [
  { src: '/integrations/facebook.svg', alt: 'Facebook' },
  { src: '/integrations/google.svg', alt: 'Google' },
  { src: '/integrations/tiktok.svg', alt: 'TikTok' },
  { src: '/integrations/meta.svg', alt: 'Meta' },
  { src: '/integrations/youtube-wordmark.svg', alt: 'Youtube' },
  { src: '/integrations/instagram.svg', alt: 'Instagram' },


];

export default function Integrations() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate elements when they come into view
    if (subtitleRef.current) {
      inView(subtitleRef.current, () => {
        subtitleRef.current!.style.opacity = '1';
        subtitleRef.current!.style.transform = 'translateY(0)';
      });
    }
    
    if (titleRef.current) {
      inView(titleRef.current, () => {
        setTimeout(() => {
          titleRef.current!.style.opacity = '1';
          titleRef.current!.style.transform = 'translateY(0)';
        }, 100);
      });
    }
    
    if (descriptionRef.current) {
      inView(descriptionRef.current, () => {
        setTimeout(() => {
          descriptionRef.current!.style.opacity = '1';
          descriptionRef.current!.style.transform = 'translateY(0)';
        }, 200);
      });
    }
    
    // Create logo scrolling animation
    if (logoContainerRef.current) {
      logoContainerRef.current.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-50%)' }
        ],
        {
          duration: 20000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    }
    
    // Setup hover effects for logo items
    document.querySelectorAll('.logo-item').forEach((logo) => {
      logo.addEventListener('mouseenter', () => {
        (logo as HTMLElement).style.transform = 'scale(1.05)';
        (logo as HTMLElement).style.transition = 'transform 0.2s ease';
      });
      
      logo.addEventListener('mouseleave', () => {
        (logo as HTMLElement).style.transform = 'scale(1)';
      });
    });
  }, []);

  return (
    <section className="py-5 bg-[#FAFAFA]">
      <Container className="px-5 py-10 bg-[#FAFAFA]] rounded-3xl">
        <div id="integration" className="flex flex-col items-center px-10 bg-white rounded-3xl p-8 shadow-sm py-30">
          <span
            ref={subtitleRef}
            className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase opacity-0"
            style={{ 
              opacity: 0, 
              transform: 'translateY(20px)', 
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}
          >
            Integration
          </span>
          
          <h2
            ref={titleRef}
            className="text-5xl font-medium tracking-tight text-center mb-6"
            style={{ 
              opacity: 0, 
              transform: 'translateY(20px)', 
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}
          >
            Works with your digital <br />marketing stack
          </h2>
          
          <p
            ref={descriptionRef}
            className="text-xl text-gray-600 text-center max-w-2xl mb-16"
            style={{ 
              opacity: 0, 
              transform: 'translateY(20px)', 
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}
          >
            Connect your favorite tools effortlessly. Keep everything running smoothly.
          </p>

          <div className="max-w-6xl w-full mx-auto overflow-hidden">
            <div className="relative">
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
              <div 
                ref={logoContainerRef}
                className="flex gap-8 py-4"
              >
                <div className="flex gap-8 min-w-full justify-around">
                  {integrationLogos.map((logo, i) => (
                    <div
                      key={i}
                      className="w-32 h-12 relative flex items-center justify-center logo-item"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-8 min-w-full justify-around">
                  {integrationLogos.map((logo, i) => (
                    <div
                      key={`copy-${i}`}
                      className="w-32 h-12 relative flex items-center justify-center logo-item"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
