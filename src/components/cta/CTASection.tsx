'use client';

import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { inView } from 'motion';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation setup when component mounts
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        // Animate title
        if (titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
        
        // Animate tagline with slight delay
        setTimeout(() => {
          if (taglineRef.current) {
            taglineRef.current.style.opacity = '1';
            taglineRef.current.style.transform = 'translateY(0)';
          }
        }, 100);
        
        // Animate description with more delay
        setTimeout(() => {
          if (descriptionRef.current) {
            descriptionRef.current.style.opacity = '1';
            descriptionRef.current.style.transform = 'translateY(0)';
          }
        }, 200);
        
        // Animate buttons with the most delay
        setTimeout(() => {
          if (buttonContainerRef.current) {
            buttonContainerRef.current.style.opacity = '1';
            buttonContainerRef.current.style.transform = 'translateY(0)';
          }
        }, 300);
        
        // Animate decoration element
        if (decorationRef.current) {
          decorationRef.current.style.opacity = '0.8';
          decorationRef.current.style.transform = 'scale(1)';
        }
      }, { amount: 0.3 });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={decorationRef} 
          className="absolute -top-[40%] -right-[20%] w-[70%] h-[80%] bg-gray-100 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{ transform: 'scale(0.8)', opacity: 0 }}
        />
        <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[80%] bg-indigo-400/5 rounded-full blur-3xl" />
        <div className="absolute top-[20%] left-[10%] w-[15%] h-[15%] bg-cyan-300/10 rounded-full blur-xl" />
        <div className="absolute bottom-[30%] right-[15%] w-[10%] h-[10%] bg-amber-300/10 rounded-full blur-lg" />
        <div className="hidden md:block absolute top-[60%] left-[50%] w-[5%] h-[5%] bg-rose-300/10 rounded-full blur-md" />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#5b21b6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="rounded-3xl py-20 px-8 md:px-16 bg-white shadow-xl border border-gray-100 flex flex-col items-center justify-between gap-8 relative backdrop-blur-sm bg-white/90">
          <div className="max-w-3xl mx-auto text-center">
            <div 
              ref={taglineRef} 
              className="mb-3 transition-all duration-500 ease-out"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                Limited Time Offer
              </span>
            </div>
            
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-center mb-6 transition-all duration-500 ease-out"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              Stop losing hours 
              <span className="text-blue-600"> to reporting</ span>
            </h2>
            
            <p
              ref={descriptionRef}
              className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-10 transition-all duration-500 ease-out"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              Get early access and spend more time driving results and winning clients
            </p>
          </div>
          
          <div 
            ref={buttonContainerRef} 
            className="flex flex-col items-center transition-all duration-500 ease-out"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-base px-8 py-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
                onClick={() => window.open('https://tally.so/r/3x5eLo', '_blank')}
              >
                Get Access
              </Button>
              
            </div>
            <p className="text-xs text-gray-500 mt-4">🔒 Secure checkout • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
