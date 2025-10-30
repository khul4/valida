"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CurrencySelector, getCurrencySymbol } from '../ui/currency-selector';
import RelatedTools from './RelatedTools';

export default function ROASCalculator() {
  const [revenue, setRevenue] = useState('');
  const [adSpend, setAdSpend] = useState('');
  const [roas, setRoas] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [currency, setCurrency] = useState('USD');

  const calculateROAS = (newRevenue: string, newAdSpend: string) => {
    if (newRevenue && newAdSpend) {
      const revenueNum = parseFloat(newRevenue.replace(/,/g, ''));
      const adSpendNum = parseFloat(newAdSpend.replace(/,/g, ''));
      if (adSpendNum > 0) {
        const roasValue = (revenueNum / adSpendNum);
        setRoas(roasValue);
      }
    } else {
      setRoas(null);
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
    field: 'revenue' | 'adSpend'
  ) => {
    const value = e.target.value;
    if (value === '') {
      setter('');
      if (field === 'revenue') {
        calculateROAS('', adSpend);
      } else {
        calculateROAS(revenue, '');
      }
      return;
    }

    const sanitizedValue = value.replace(/[^0-9.]/g, '');
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setter(sanitizedValue);
      if (field === 'revenue') {
        calculateROAS(sanitizedValue, adSpend);
      } else {
        calculateROAS(revenue, sanitizedValue);
      }
    }
  };

  const clearAll = () => {
    setRevenue('');
    setAdSpend('');
    calculateROAS('', '');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-12 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Free ROAS Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your Return on Ad Spend (ROAS) and measure your advertising efficiency
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <CurrencySelector
          selectedCurrency={currency}
          onCurrencyChange={setCurrency}
          className="mb-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Revenue
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Total revenue from ads
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                {getCurrencySymbol(currency)}
              </span>
              <input
                type="text"
                value={getDisplayValue('revenue', revenue)}
                onChange={(e) => handleInputChange(e, setRevenue, 'revenue')}
                onFocus={() => setFocusedField('revenue')}
                onBlur={() => {
                  setFocusedField(null);
                  calculateROAS(revenue, adSpend);
                }}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Ad Spend
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Total advertising costs
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                {getCurrencySymbol(currency)}
              </span>
              <input
                type="text"
                value={getDisplayValue('adSpend', adSpend)}
                onChange={(e) => handleInputChange(e, setAdSpend, 'adSpend')}
                onFocus={() => setFocusedField('adSpend')}
                onBlur={() => {
                  setFocusedField(null);
                  calculateROAS(revenue, adSpend);
                }}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          {roas !== null && (
            <div className="col-span-1 sm:col-span-2">
              <div className="bg-white shadow-lg rounded-xl border border-blue-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Your ROAS Result</h3>
                      <p className="text-4xl font-bold text-blue-600">
                        {roas.toFixed(2)}x
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {getCurrencySymbol(currency)}{revenue} revenue from {getCurrencySymbol(currency)}{adSpend} ad spend
                      </p>
                    </div>
                    <button
                      onClick={clearAll}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="px-6 py-4 bg-white border-t border-blue-50">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Performance:</span>
                    <span className="font-medium">
                      {roas < 1 ? 'Poor' : roas < 2 ? 'Break-even' : roas < 4 ? 'Good' : 'Excellent'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is ROAS?</h3>
          <p className="text-gray-600 leading-relaxed">
            Return on Ad Spend (ROAS) is a marketing metric that measures the revenue generated for 
            every dollar spent on advertising. It&apos;s a key performance indicator that helps you 
            evaluate the effectiveness of your advertising campaigns and optimize your marketing budget.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Calculate ROAS</h3>
          <div className="text-gray-600">
            <p className="mb-3">The ROAS formula is straightforward:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              ROAS = Revenue ÷ Ad Spend
            </div>
            <p className="mt-3 text-sm">
              For example, if you generate $2,000 in revenue from $500 in ad spend, 
              your ROAS would be 4x.
            </p>
          </div>
        </div>
      </div>

      <RelatedTools currentTool="ROAS Calculator" />

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a good ROAS?</h3>
            <p className="text-gray-600">
              A good ROAS depends on your industry and business model. Generally, a ROAS of 4:1 ($4 in 
              revenue for every $1 spent) is considered good for most businesses. However, some industries 
              might be profitable at 2:1, while others need 6:1 or higher to maintain profitability.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I improve my ROAS?</h3>
            <p className="text-gray-600">
              Improve your ROAS by optimizing your targeting, testing different ad creatives and messages,
              improving your landing page conversion rate, adjusting bid strategies, and focusing on 
              high-value customers. Regular testing and optimization are key to improving ROAS over time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How is ROAS different from ROI?</h3>
            <p className="text-gray-600">
              While ROAS measures revenue generated per dollar of ad spend, ROI considers the total profit
              by factoring in all costs (not just ad spend). ROAS is more specific to advertising
              performance, while ROI gives a broader picture of business profitability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}