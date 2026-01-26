'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

export default function ProductCTA() {
  return (
    <section className="py-24 bg-black text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] mb-6">
            Start building better
            <br />
            reports today.
          </h2>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Join hundreds of agencies saving 10+ hours per week on reporting. 
            No credit card required. Free 14-day trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base bg-white hover:bg-neutral-100 text-black shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://tally.so/r/3x5eLo', '_blank')}
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base border-2 border-neutral-700 hover:border-white hover:bg-neutral-900 text-white transition-all"
            >
              Talk to Sales
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-neutral-800">
          {[
            { value: '500+', label: 'Agencies' },
            { value: '50K+', label: 'Reports generated' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
