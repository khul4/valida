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
  icon: string;
  category: string;
}

const marketingTools: Tool[] = [
  {
    name: 'CPM Calculator',
    href: '/cpm-calculator',
    description: 'Calculate Cost Per Thousand Impressions (CPM) to measure the cost-effectiveness of your advertising campaigns.',
    features: ['Multi-currency support', 'Real-time calculations', 'Campaign comparison', 'Industry benchmarks'],
    icon: '📊',
    category: 'Cost Analysis'
  },
  {
    name: 'CTR Calculator',
    href: '/ctr-calculator',
    description: 'Calculate Click-Through Rate (CTR) to measure how effectively your ads attract clicks from impressions.',
    features: ['Performance tracking', 'Industry comparisons', 'Optimization insights', 'Historical analysis'],
    icon: '👆',
    category: 'Performance Metrics'
  },
  {
    name: 'CPA Calculator',
    href: '/cpa-calculator',
    description: 'Calculate Cost Per Acquisition (CPA) to understand how much you spend to acquire each customer.',
    features: ['ROI optimization', 'Budget planning', 'Currency conversion', 'Profit analysis'],
    icon: '🎯',
    category: 'Cost Analysis'
  },
  {
    name: 'ROAS Calculator',
    href: '/roas-calculator',
    description: 'Calculate Return on Ad Spend (ROAS) to measure the revenue generated for every dollar spent on advertising.',
    features: ['Revenue tracking', 'Profitability analysis', 'Campaign optimization', 'Performance grading'],
    icon: '💰',
    category: 'ROI Analysis'
  },
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    description: 'Calculate website bounce rate to understand user engagement and optimize your landing pages.',
    features: ['User engagement metrics', 'Page optimization', 'Conversion analysis', 'Performance benchmarks'],
    icon: '📈',
    category: 'Website Analytics'
  },
];

const categories = Array.from(new Set(marketingTools.map(tool => tool.category)));

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Free Marketing Tools & Calculators
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Optimize your marketing campaigns with our comprehensive suite of free calculators. 
              Make data-driven decisions and improve your ROI with professional-grade tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Free
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Registration Required
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Real-time Results
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Multi-currency Support
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Tools Grid */}
      <Container>
        <div className="py-16">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Choose Your Marketing Calculator
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Use Calculator
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
      <div className="bg-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Marketing Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our calculators are designed by marketing professionals to help you make data-driven decisions 
              and optimize your advertising campaigns for maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">Get immediate calculations as you type, no waiting required.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Formulas</h3>
              <p className="text-gray-600 text-sm">Industry-standard formulas used by marketing professionals worldwide.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Currency</h3>
              <p className="text-gray-600 text-sm">Support for 15+ major currencies for global marketing campaigns.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Free</h3>
              <p className="text-gray-600 text-sm">No hidden costs, no registration required, completely free forever.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Marketing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start using our free marketing calculators today and make data-driven decisions 
              that boost your campaign performance and ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cpm-calculator"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start with CPM Calculator
              </Link>
              <Link
                href="/roas-calculator"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Calculate ROAS
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}