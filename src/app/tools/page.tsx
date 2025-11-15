import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Marketing Calculators & Tools | Valida Analytics',
  description: 'Access our comprehensive suite of free marketing calculators. Calculate CPM, CTR, CPA, ROAS, and bounce rate to optimize your marketing campaigns and improve ROI.',
  keywords: 'marketing calculators, CPM calculator, CTR calculator, CPA calculator, ROAS calculator, bounce rate calculator, marketing tools, digital marketing, advertising metrics',
  openGraph: {
    title: 'Free Marketing Calculators & Tools | Valida Analytics',
    description: 'Access our comprehensive suite of free marketing calculators. Calculate CPM, CTR, CPA, ROAS, and bounce rate to optimize your marketing campaigns.',
    type: 'website',
  },
};

interface Tool {
  name: string;
  href: string;
  description: string;
  features: string[];
  category: string;
}

const marketingTools: Tool[] = [
  {
    name: 'CPM Calculator',
    href: '/cpm-calculator',
    description: 'Calculate Cost Per Thousand Impressions (CPM) to measure the cost-effectiveness of your advertising campaigns.',
    features: ['Multi-currency support', 'Real-time calculations', 'Campaign comparison', 'Industry benchmarks'],
    category: 'Cost Analysis'
  },
  {
    name: 'CTR Calculator',
    href: '/ctr-calculator',
    description: 'Calculate Click-Through Rate (CTR) to measure how effectively your ads attract clicks from impressions.',
    features: ['Performance tracking', 'Industry comparisons', 'Optimization insights', 'Historical analysis'],
    category: 'Performance Metrics'
  },
  {
    name: 'CPA Calculator',
    href: '/cpa-calculator',
    description: 'Calculate Cost Per Acquisition (CPA) to understand how much you spend to acquire each customer.',
    features: ['ROI optimization', 'Budget planning', 'Currency conversion', 'Profit analysis'],
    category: 'Cost Analysis'
  },
  {
    name: 'ROAS Calculator',
    href: '/roas-calculator',
    description: 'Calculate Return on Ad Spend (ROAS) to measure the revenue generated for every dollar spent on advertising.',
    features: ['Revenue tracking', 'Profitability analysis', 'Campaign optimization', 'Performance grading'],
    category: 'ROI Analysis'
  },
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    description: 'Calculate website bounce rate to understand user engagement and optimize your landing pages.',
    features: ['User engagement metrics', 'Page optimization', 'Conversion analysis', 'Performance benchmarks'],
    category: 'Website Analytics'
  },
  {
    name: 'Instagram Ad Mockup Generator',
    href: '/instagram-ad-mockup-generator',
    description: 'Generate pixel-perfect Instagram ad mockups for sponsored posts, carousels, reels & stories in every format.',
    features: ['All Instagram formats', 'Real-time preview', 'Custom branding', 'High-quality downloads'],
    category: 'Creative Tools'
  },
  {
    name: 'TikTok Ad Mockup Generator',
    href: '/tiktok-ad-mockup-generator',
    description: 'Design and preview TikTok ads before they go live. Create realistic TikTok ad mockups with Story and Story CTA formats.',
    features: ['Story & Story CTA formats', 'Video upload support', 'Real-time preview', 'TikTok UI simulation'],
    category: 'Creative Tools'
  },
];

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white">
        <Container>
          <div className="py-24 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-medium text-4xl sm:text-5xl leading-[1.02] tracking-[-0.02em] mb-3 relative z-20 px-4 sm:px-0">
                Free Marketing Toolkit
                
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-5 relative z-20 px-4 sm:px-0">
                A series of free tools for creator marketing, paid social, organic social, created by Arek
              </p>
              
            </div>
          </div>
        </Container>
      </div>

      {/* Tools Grid */}
      <Container>
        <div className="py-10 mb-20">
          

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {marketingTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-base">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Try it Free
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

   
     
    </div>
  );
}