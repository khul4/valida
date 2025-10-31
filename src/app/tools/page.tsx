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
];

const categories = Array.from(new Set(marketingTools.map(tool => tool.category)));

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Container>
          <div className="py-24 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                Marketing Tools
                <span className="block text-blue-400">That Drive Results</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Professional-grade calculators designed to optimize your marketing campaigns, 
                improve ROI, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Always Free
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No Registration
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time Results
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  15+ Currencies
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Tools Grid */}
      <Container>
        <div className="py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Select the marketing metric you want to calculate and optimize your campaigns with precision.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

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
                    Start Calculating
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

      {/* Why Use Our Tools Section */}
      <div className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Built for Marketing Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our calculators combine industry-standard formulas with intuitive design, 
              helping you make confident decisions that drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Calculations</h3>
              <p className="text-gray-600 leading-relaxed">Get immediate results as you type. No waiting, no delays, just instant insights for faster decision-making.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Standard</h3>
              <p className="text-gray-600 leading-relaxed">Proven formulas used by marketing professionals worldwide, ensuring accuracy and reliability in every calculation.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Support</h3>
              <p className="text-gray-600 leading-relaxed">Support for 15+ major currencies, making it perfect for international marketing campaigns and global teams.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Completely Free</h3>
              <p className="text-gray-600 leading-relaxed">No hidden costs, no subscriptions, no registration required. Professional tools that remain free forever.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Start Optimizing Today
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join thousands of marketers who use our calculators to make smarter decisions, 
              optimize campaigns, and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/cpm-calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Calculate CPM
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/roas-calculator"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Calculate ROAS
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}