"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CTRCalculator() {
  const [clicks, setClicks] = useState('');
  const [impressions, setImpressions] = useState('');
  const [ctr, setCtr] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const calculateCTR = (newClicks: string, newImpressions: string) => {
    if (newClicks && newImpressions) {
      const clicksNum = parseFloat(newClicks.replace(/,/g, ''));
      const impressionsNum = parseFloat(newImpressions.replace(/,/g, ''));
      if (impressionsNum > 0) {
        const ctrValue = (clicksNum / impressionsNum) * 100;
        setCtr(ctrValue);
      }
    } else {
      setCtr(null);
    }
  };

  const formatDisplayValue = (value: string) => {
    if (!value) return '';
    const numberValue = parseFloat(value.replace(/,/g, ''));
    return new Intl.NumberFormat('en-US').format(numberValue);
  };

  const getDisplayValue = (field: string, value: string) => {
    if (focusedField === field) {
      return value;
    }
    return formatDisplayValue(value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: string) => void,
    field: 'clicks' | 'impressions'
  ) => {
    const value = e.target.value;
    if (value === '') {
      setter('');
      // Calculate with new empty value
      if (field === 'clicks') {
        calculateCTR('', impressions);
      } else {
        calculateCTR(clicks, '');
      }
      return;
    }

    // Allow only numbers and commas
    const sanitizedValue = value.replace(/[^0-9.]/g, '');
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setter(sanitizedValue);
      // Calculate with new value
      if (field === 'clicks') {
        calculateCTR(sanitizedValue, impressions);
      } else {
        calculateCTR(clicks, sanitizedValue);
      }
    }
  };

  const clearAll = () => {
    setClicks('');
    setImpressions('');
    calculateCTR('', '');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Free CTR Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your Click-Through Rate (CTR) easily and analyze your ad performance
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Clicks Input */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Number of Clicks
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Total number of clicks received
              </span>
            </label>
            <input
              type="text"
              value={getDisplayValue('clicks', clicks)}
              onChange={(e) => handleInputChange(e, setClicks, 'clicks')}
              onFocus={() => setFocusedField('clicks')}
              onBlur={() => {
                setFocusedField(null);
                calculateCTR(clicks, impressions);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="0"
            />
          </div>

          {/* Impressions Input */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Number of Impressions
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Total number of ad views
              </span>
            </label>
            <input
              type="text"
              value={getDisplayValue('impressions', impressions)}
              onChange={(e) => handleInputChange(e, setImpressions, 'impressions')}
              onFocus={() => setFocusedField('impressions')}
              onBlur={() => {
                setFocusedField(null);
                calculateCTR(clicks, impressions);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="0"
            />
          </div>
        </div>

        {/* Result Display */}
        {ctr !== null && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your CTR Result</h3>
            <p className="text-3xl font-bold text-blue-600">
              {ctr.toFixed(2)}%
            </p>
            <p className="text-sm text-gray-600 mt-2">
              This means {clicks} people clicked out of {impressions} impressions
            </p>
          </div>
        )}

        {/* Clear Button */}
        <div className="mt-6 text-center">
          <button
            onClick={clearAll}
            className="px-8 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear & Start Over
          </button>
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* What is CTR */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is CTR?</h3>
          <p className="text-gray-600 leading-relaxed">
            Click-Through Rate (CTR) is a key performance metric that measures the percentage of people 
            who click on your ad or link after seeing it. It's a crucial indicator of how effective 
            your ad is at attracting interested users and driving engagement.
          </p>
        </div>

        {/* How to Calculate */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Calculate CTR</h3>
          <div className="text-gray-600">
            <p className="mb-3">The CTR formula is straightforward:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              CTR = (Number of Clicks ÷ Number of Impressions) × 100
            </div>
            <p className="mt-3 text-sm">
              For example, if your ad receives 100 clicks from 1,000 impressions, 
              your CTR would be 10%.
            </p>
          </div>
        </div>
      </div>

      {/* Related Tools Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Marketing Calculators</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/cpm-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-semibold text-lg mb-2">CPM Calculator</h3>
            <p className="text-gray-600 text-sm">Calculate Cost Per Thousand Impressions</p>
          </Link>
          
          {/* Placeholder for future calculators */}
          <div className="block p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-400">CPA Calculator</h3>
            <p className="text-gray-400 text-sm">Coming soon...</p>
          </div>
          
          <div className="block p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-400">ROAS Calculator</h3>
            <p className="text-gray-400 text-sm">Coming soon...</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a good CTR?</h3>
            <p className="text-gray-600">
              A good CTR varies by industry and platform. For Google Ads, the average CTR is around 2% 
              for search ads and 0.35% for display ads. For Facebook ads, 1-2% is considered good, 
              while email marketing often sees CTRs between 2-5%.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I improve my CTR?</h3>
            <p className="text-gray-600">
              Improve your CTR by writing compelling ad copy, using strong call-to-actions, 
              targeting the right audience, testing different ad creatives, and ensuring your 
              ads are relevant to your target keywords and audience intent.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is CTR important?</h3>
            <p className="text-gray-600">
              CTR is important because it indicates how well your ads resonate with your audience. 
              A higher CTR generally means better ad relevance and can lead to improved Quality 
              Scores in platforms like Google Ads, potentially reducing your cost per click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}