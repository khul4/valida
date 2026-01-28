"use client";

import React, { useState } from 'react';
import { CurrencySelector, getCurrencySymbol } from '../ui/currency-selector';
import RelatedTools from './RelatedTools';

export default function CPACalculator() {
  const [cost, setCost] = useState('');
  const [conversions, setConversions] = useState('');
  const [cpa, setCpa] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [currency, setCurrency] = useState('USD');

  const calculateCPA = (newCost: string, newConversions: string) => {
    if (newCost && newConversions) {
      const costNum = parseFloat(newCost.replace(/,/g, ''));
      const conversionsNum = parseFloat(newConversions.replace(/,/g, ''));
      if (conversionsNum > 0) {
        const cpaValue = costNum / conversionsNum;
        setCpa(cpaValue);
      }
    } else {
      setCpa(null);
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
    field: 'cost' | 'conversions'
  ) => {
    const value = e.target.value;
    if (value === '') {
      setter('');
      if (field === 'cost') {
        calculateCPA('', conversions);
      } else {
        calculateCPA(cost, '');
      }
      return;
    }

    const sanitizedValue = value.replace(/[^0-9.]/g, '');
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setter(sanitizedValue);
      if (field === 'cost') {
        calculateCPA(sanitizedValue, conversions);
      } else {
        calculateCPA(cost, sanitizedValue);
      }
    }
  };

  const clearAll = () => {
    setCost('');
    setConversions('');
    calculateCPA('', '');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-12 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Free CPA Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your Cost Per Acquisition (CPA) and optimize your marketing spend
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
              Total Cost
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Total advertising spend
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                {getCurrencySymbol(currency)}
              </span>
              <input
                type="text"
                value={getDisplayValue('cost', cost)}
                onChange={(e) => handleInputChange(e, setCost, 'cost')}
                onFocus={() => setFocusedField('cost')}
                onBlur={() => {
                  setFocusedField(null);
                  calculateCPA(cost, conversions);
                }}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Number of Conversions
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Total successful conversions
              </span>
            </label>
            <input
              type="text"
              value={getDisplayValue('conversions', conversions)}
              onChange={(e) => handleInputChange(e, setConversions, 'conversions')}
              onFocus={() => setFocusedField('conversions')}
              onBlur={() => {
                setFocusedField(null);
                calculateCPA(cost, conversions);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="0"
            />
          </div>

          {cpa !== null && (
            <div className="col-span-1 sm:col-span-2">
              <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Your CPA Result</h3>
                      <p className="text-4xl font-bold text-black">
                        {getCurrencySymbol(currency)}{cpa.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {getCurrencySymbol(currency)}{cost} spent for {conversions} conversions
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
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is CPA?</h3>
          <p className="text-gray-600 leading-relaxed">
            Cost Per Acquisition (CPA) is a marketing metric that measures how much it costs to acquire one
            paying customer or generate one conversion action. It&apos;s a crucial metric for understanding
            the efficiency of your marketing campaigns and optimizing your advertising spend.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Calculate CPA</h3>
          <div className="text-gray-600">
            <p className="mb-3">The CPA formula is straightforward:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              CPA = Total Cost ÷ Number of Conversions
            </div>
            <p className="mt-3 text-sm">
              For example, if you spend $1,000 and get 50 conversions, your CPA would be $20.
            </p>
          </div>
        </div>
      </div>

      <RelatedTools currentTool="CPA Calculator" />

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a good CPA?</h3>
            <p className="text-gray-600">
              A good CPA varies significantly by industry, product price point, and business model. 
              The key is ensuring your CPA is lower than your customer lifetime value (CLV) to maintain 
              profitability. Generally, aim for a CPA that&apos;s 1/3 or less of your customer&apos;s first purchase value.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I improve my CPA?</h3>
            <p className="text-gray-600">
              Improve your CPA by optimizing your targeting, improving your landing page conversion rate,
              testing different ad creatives and messages, and focusing on high-converting channels.
              Regular A/B testing and audience refinement can help reduce costs while maintaining conversion volume.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is CPA important?</h3>
            <p className="text-gray-600">
              CPA is crucial because it directly ties your marketing spend to actual business results.
              It helps you understand the true cost of acquiring customers and allows you to make
              data-driven decisions about where to allocate your marketing budget for the best ROI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}