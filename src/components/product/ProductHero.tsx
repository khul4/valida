'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

export default function ProductHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-neutral-100">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 mb-8">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-sm font-medium text-neutral-900">AI-Powered SEO Reporting</span>
          </div> */}

          {/* Main Headline */}
          <h1 className="font-semibold text-5xl sm:text-7xl leading-[1.05] tracking-[-0.03em] mb-6 text-black">
            The SEO reporting tool, 
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">without the Bloat.</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-neutral-200 -rotate-1" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create clean, white-labeled dashboards that prove your SEO value in minutes. Join the waitlist for early access to the reporting engine built specifically for search agencies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base bg-black hover:bg-neutral-800 text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Join the waiting list
            </Button>
           
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex items-center justify-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-300" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>14-day free trial</span>
            </div>
          </div> */}
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
