"use client";

import React, { useState } from 'react';
import RelatedTools from './RelatedTools';

export default function BounceRateCalculator() {
  const [bounces, setBounces] = useState('');
  const [sessions, setSessions] = useState('');
  const [bounceRate, setBounceRate] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const calculateBounceRate = (newBounces: string, newSessions: string) => {
    if (newBounces && newSessions) {
      const bouncesNum = parseFloat(newBounces.replace(/,/g, ''));
      const sessionsNum = parseFloat(newSessions.replace(/,/g, ''));
      if (sessionsNum > 0) {
        const bounceRateValue = (bouncesNum / sessionsNum) * 100;
        setBounceRate(bounceRateValue);
      }
    } else {
      setBounceRate(null);
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
    field: 'bounces' | 'sessions'
  ) => {
    const value = e.target.value;
    if (value === '') {
      setter('');
      if (field === 'bounces') {
        calculateBounceRate('', sessions);
      } else {
        calculateBounceRate(bounces, '');
      }
      return;
    }

    const sanitizedValue = value.replace(/[^0-9.]/g, '');
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setter(sanitizedValue);
      if (field === 'bounces') {
        calculateBounceRate(sanitizedValue, sessions);
      } else {
        calculateBounceRate(bounces, sanitizedValue);
      }
    }
  };

  const clearAll = () => {
    setBounces('');
    setSessions('');
    calculateBounceRate('', '');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-12 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Free Bounce Rate Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your website&apos;s bounce rate and analyze user engagement
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Number of Bounces
              <span className="block text-xs font-normal text-gray-500 mt-1">
                Single-page sessions
              </span>
            </label>
            <input
              type="text"
              value={getDisplayValue('bounces', bounces)}
              onChange={(e) => handleInputChange(e, setBounces, 'bounces')}
              onFocus={() => setFocusedField('bounces')}
              onBlur={() => {
                setFocusedField(null);
                calculateBounceRate(bounces, sessions);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="0"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 h-12 flex flex-col justify-start">
              Total Sessions
              <span className="block text-xs font-normal text-gray-500 mt-1">
                All website sessions
              </span>
            </label>
            <input
              type="text"
              value={getDisplayValue('sessions', sessions)}
              onChange={(e) => handleInputChange(e, setSessions, 'sessions')}
              onFocus={() => setFocusedField('sessions')}
              onBlur={() => {
                setFocusedField(null);
                calculateBounceRate(bounces, sessions);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="0"
            />
          </div>

          {bounceRate !== null && (
            <div className="col-span-1 sm:col-span-2">
              <div className="bg-white shadow-lg rounded-xl border border-blue-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Bounce Rate</h3>
                      <p className="text-4xl font-bold text-blue-600">
                        {bounceRate.toFixed(2)}%
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {bounces} bounces from {sessions} sessions
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
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium">
                      {bounceRate > 85 ? 'Very High' : bounceRate > 70 ? 'High' : bounceRate > 40 ? 'Average' : bounceRate > 20 ? 'Good' : 'Excellent'}
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is Bounce Rate?</h3>
          <p className="text-gray-600 leading-relaxed">
            Bounce rate is the percentage of visitors who navigate away from your website after viewing 
            only one page. It&apos;s a key metric for understanding user engagement and the effectiveness
            of your landing pages in retaining visitors.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Calculate Bounce Rate</h3>
          <div className="text-gray-600">
            <p className="mb-3">The bounce rate formula is:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              Bounce Rate = (Number of Bounces ÷ Total Sessions) × 100
            </div>
            <p className="mt-3 text-sm">
              For example, if you have 300 bounces from 1,000 sessions, 
              your bounce rate would be 30%.
            </p>
          </div>
        </div>
      </div>

      <RelatedTools currentTool="Bounce Rate Calculator" />

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a good bounce rate?</h3>
            <p className="text-gray-600">
              A good bounce rate varies by industry and website type. For most websites, a bounce rate
              between 40-60% is average. E-commerce sites typically aim for 20-45%, while blogs might
              see 65-90% as normal since readers often come for specific content.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I reduce bounce rate?</h3>
            <p className="text-gray-600">
              Improve your bounce rate by enhancing page load speed, making navigation intuitive,
              ensuring content matches search intent, optimizing for mobile devices, and creating
              compelling calls-to-action that encourage further exploration.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is bounce rate important?</h3>
            <p className="text-gray-600">
              Bounce rate helps you understand user engagement and content relevance. A high bounce
              rate might indicate issues with user experience, content quality, or website performance.
              It&apos;s particularly important for landing pages and conversion optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}