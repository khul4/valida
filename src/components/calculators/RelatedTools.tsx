import React from 'react';
import Link from 'next/link';

interface Tool {
  name: string;
  href: string;
  description: string;
}

interface RelatedToolsProps {
  currentTool?: string;
}

const allTools: Tool[] = [
  {
    name: 'CPM Calculator',
    href: '/cpm-calculator',
    description: 'Calculate Cost Per Thousand Impressions'
  },
  {
    name: 'CTR Calculator',
    href: '/ctr-calculator',
    description: 'Calculate Click-Through Rate'
  },
  {
    name: 'CPA Calculator',
    href: '/cpa-calculator',
    description: 'Calculate Cost Per Acquisition'
  },
  {
    name: 'ROAS Calculator',
    href: '/roas-calculator',
    description: 'Calculate Return on Ad Spend'
  },
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    description: 'Calculate Website Bounce Rate'
  },
  {
    name: 'Instagram Ad Mockup Generator',
    href: '/instagram-ad-mockup-generator',
    description: 'Create Instagram Ad Previews'
  },
  {
    name: 'TikTok Ad Mockup Generator',
    href: '/tiktok-ad-mockup-generator',
    description: 'Create TikTok Ad Previews'
  },
  {
    name: 'UTM Builder',
    href: '/utm-builder',
    description: 'Create Campaign Tracking URLs'
  },
  {
    name: 'YouTube Ad Mockup Generator',
    href: '/youtube-ad-mockup-generator',
    description: 'Create YouTube Ad Previews'
  },
];

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  // Filter out the current tool from the related tools list
  const relatedTools = allTools.filter(tool => tool.name !== currentTool);

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Marketing Calculators</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedTools.map((tool) => (
          <Link 
            key={tool.name}
            href={tool.href} 
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors hover:border-black hover:shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-2 text-black hover:text-gray-800">
              {tool.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}