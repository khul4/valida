'use client';

import Container from '@/components/ui/container';
import WaitlistForm from './WaitlistForm';

export default function WaitlistSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Early Access
            </h2>
            <p className="text-lg text-gray-600">
              Join our waitlist to be the first to know when we launch. Get exclusive early access and special benefits.
            </p>
          </div>
          
          <div className="pt-4">
            <WaitlistForm />
          </div>
          
          <p className="text-sm text-gray-500">
            We&apos;ll never spam you. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
