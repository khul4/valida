"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CalculatorValues {
  totalCost: string;
  impressions: string;
  cpm: string;
}

interface Currency {
  code: string;
  symbol: string;
  name: string;
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht' },
];

export default function CPMCalculator() {
  const [values, setValues] = useState<CalculatorValues>({
    totalCost: '',
    impressions: '',
    cpm: ''
  });
  
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);

  const calculateMissingValue = (field: keyof CalculatorValues, value: string) => {
    const newValues = { ...values, [field]: value };
    const { totalCost, impressions, cpm } = newValues;
    
    const cost = parseFloat(totalCost);
    const imps = parseFloat(impressions);
    const cpmValue = parseFloat(cpm);

    // Calculate Total Cost if CPM and Impressions are provided and totalCost is empty
    if (field !== 'totalCost' && !isNaN(cpmValue) && !isNaN(imps) && totalCost === '') {
      const calculatedCost = (cpmValue * imps) / 1000;
      newValues.totalCost = calculatedCost.toFixed(2);
    }
    // Calculate Impressions if Total Cost and CPM are provided and impressions is empty
    else if (field !== 'impressions' && !isNaN(cost) && !isNaN(cpmValue) && impressions === '') {
      const calculatedImpressions = (cost * 1000) / cpmValue;
      newValues.impressions = Math.round(calculatedImpressions).toString();
    }
    // Calculate CPM if Total Cost and Impressions are provided and cpm is empty
    else if (field !== 'cpm' && !isNaN(cost) && !isNaN(imps) && cpm === '') {
      const calculatedCPM = (cost * 1000) / imps;
      newValues.cpm = calculatedCPM.toFixed(2);
    }

    return newValues;
  };

  const handleInputChange = (field: keyof CalculatorValues, value: string) => {
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      const newValues = calculateMissingValue(field, value);
      setValues(newValues);
    }
  };

  const clearAll = () => {
    setValues({ totalCost: '', impressions: '', cpm: '' });
  };

  const formatNumber = (num: string) => {
    if (!num) return '';
    const number = parseFloat(num);
    if (isNaN(number)) return num;
    return number.toLocaleString();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Free CPM Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your cost per thousand & compare across different channels or multiple campaigns
        </p>
      </div>

      {/* Currency Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Currency
          </label>
          <select
            value={selectedCurrency.code}
            onChange={(e) => {
              const currency = currencies.find(c => c.code === e.target.value);
              if (currency) setSelectedCurrency(currency);
            }}
            className="block w-48 px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.symbol} {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Total Cost */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900">
              Total Cost
              <span className="block text-xs font-normal text-gray-500 mt-1">
                The total cost or budget for the campaign
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                {selectedCurrency.symbol}
              </span>
              <input
                type="text"
                value={values.totalCost}
                onChange={(e) => handleInputChange('totalCost', e.target.value)}
                placeholder="0.00"
                className={`w-full pr-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  selectedCurrency.symbol.length > 1 ? 'pl-12' : 'pl-8'
                }`}
              />
            </div>
          </div>

          {/* Impressions */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900">
              Impressions
              <span className="block text-xs font-normal text-gray-500 mt-1">
                The total advertising impressions over the life of the campaign
              </span>
            </label>
            <input
              type="text"
              value={formatNumber(values.impressions)}
              onChange={(e) => handleInputChange('impressions', e.target.value.replace(/,/g, ''))}
              placeholder="0"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* CPM */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900">
              CPM
              <span className="block text-xs font-normal text-gray-500 mt-1">
                The cost of the campaign per 1,000 ad exposures
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                {selectedCurrency.symbol}
              </span>
              <input
                type="text"
                value={values.cpm}
                onChange={(e) => handleInputChange('cpm', e.target.value)}
                placeholder="0.00"
                className={`w-full pr-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  selectedCurrency.symbol.length > 1 ? 'pl-12' : 'pl-8'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-800 flex items-center">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Fill in any 2 fields - The value of the third will appear
          </p>
        </div>

        {/* Clear Button */}
        <div className="mt-6 text-center">
          <Button
            onClick={clearAll}
            variant="outline"
            className="px-8 py-2"
          >
            Clear & Start Over
          </Button>
        </div>
      </div>

      {/* Information Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* What is CPM */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is CPM?</h3>
          <p className="text-gray-600 leading-relaxed">
            CPM (Cost Per Mille) is a marketing metric that represents the cost an advertiser pays for 
            1,000 impressions of their advertisement. It&apos;s one of the most common pricing models in 
            digital advertising and helps marketers understand the cost-effectiveness of their campaigns.
          </p>
        </div>

        {/* How to Calculate */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Calculate CPM</h3>
          <div className="text-gray-600">
            <p className="mb-3">The CPM formula is simple:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              CPM = (Total Cost ÷ Impressions) × 1,000
            </div>
            <p className="mt-3 text-sm">
              For example, if you spend {selectedCurrency.symbol}500 on a campaign that generates 100,000 impressions, 
              your CPM would be {selectedCurrency.symbol}5.00.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a good CPM?</h3>
            <p className="text-gray-600">
              A good CPM varies by industry, platform, and target audience. Generally, CPMs between {selectedCurrency.symbol}1-{selectedCurrency.symbol}10 
              are considered reasonable, but high-value audiences may justify higher CPMs if they convert well.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I improve my CPM?</h3>
            <p className="text-gray-600">
              Improve your CPM by targeting more specific audiences, improving ad quality and relevance, 
              testing different ad formats, optimizing for better placement, and focusing on platforms 
              where your audience is most engaged.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What factors affect CPM?</h3>
            <p className="text-gray-600">
              CPM is influenced by audience targeting (demographics, interests, behavior), ad placement, 
              competition in your industry, ad quality and relevance, platform choice, and seasonal demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}