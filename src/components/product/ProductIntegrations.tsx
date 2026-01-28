'use client';

import Container from '@/components/ui/container';
import Image from 'next/image';

const integrations = [
  {
    name: 'Google Search Console',
    description: 'Track rankings, impressions, and clicks automatically',
    icon: (
      <Image
        src="/integrations/gsc.svg"
        alt="Google Search Console"
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
    ),
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Google Analytics',
    description: 'Pull traffic, conversions, and user metrics seamlessly',
    icon: (
      <Image
        src="/integrations/google-analytics.svg"
        alt="Google Analytics"
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
    ),
    color: 'from-orange-500 to-orange-600',
  },
];

const comingSoon = [
  { 
    name: 'Ahrefs', 
    logo: '/integrations/ahrefs.svg'
  },
  { 
    name: 'SEMrush', 
    logo: '/integrations/semrush.svg'
  },
  { 
    name: 'Google My Business', 
    logo: '/integrations/google_my_business_icon_website.svg'
  },
  { 
    name: 'Moz', 
    logo: '/integrations/moz.svg'
  },
];

export default function ProductIntegrations() {
  return (
    <section className="py-24 bg-white border-b border-neutral-100">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] mb-6 text-black">
            Connect once.
            <br />
            Report forever.
          </h2>
          <p className="text-lg text-neutral-600">
            Seamlessly integrate with your favorite SEO tools. We automatically pull and sync your data.
          </p>
        </div>

        {/* Current Integrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 text-black">
                  {integration.name}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {integration.description}
                </p>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-700">Connected</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-black mb-2">Coming Soon</h3>
            <p className="text-neutral-600">We're constantly adding new integrations</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {comingSoon.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white transition-all"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-neutral-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-4">
            Don't see your tool? <a href="mailto:support@arek.pro" className="text-black font-medium underline">Request an integration</a>
          </p>
        </div>
      </Container>
    </section>
  );
}
