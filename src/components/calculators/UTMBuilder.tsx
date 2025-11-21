'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, Share2 } from 'lucide-react';

interface UTMParams {
  websiteUrl: string;
  campaignSource: string;
  campaignMedium: string;
  campaignName: string;
  campaignTerm: string;
  campaignContent: string;
}

export default function UTMBuilder() {
  const [params, setParams] = useState<UTMParams>({
    websiteUrl: '',
    campaignSource: '',
    campaignMedium: '',
    campaignName: '',
    campaignTerm: '',
    campaignContent: '',
  });

  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Common presets
  const mediumPresets = ['cpc', 'email', 'social', 'display', 'affiliate', 'referral'];
  const sourcePresets = ['google', 'facebook', 'instagram', 'twitter', 'linkedin', 'newsletter'];

  useEffect(() => {
    generateUrl();
  }, [params]);

  const validateUrl = (url: string): boolean => {
    if (!url) return false;
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const generateUrl = () => {
    const newErrors: { [key: string]: string } = {};

    if (!params.websiteUrl) {
      setGeneratedUrl('');
      return;
    }

    if (!validateUrl(params.websiteUrl)) {
      newErrors.websiteUrl = 'Please enter a valid URL';
      setErrors(newErrors);
      setGeneratedUrl('');
      return;
    }

    if (!params.campaignSource) {
      newErrors.campaignSource = 'Campaign Source is required';
    }
    if (!params.campaignMedium) {
      newErrors.campaignMedium = 'Campaign Medium is required';
    }
    if (!params.campaignName) {
      newErrors.campaignName = 'Campaign Name is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setGeneratedUrl('');
      return;
    }

    try {
      let baseUrl = params.websiteUrl;
      if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
        baseUrl = `https://${baseUrl}`;
      }

      const url = new URL(baseUrl);
      
      // Add UTM parameters
      url.searchParams.set('utm_source', params.campaignSource.toLowerCase().replace(/\s+/g, '-'));
      url.searchParams.set('utm_medium', params.campaignMedium.toLowerCase().replace(/\s+/g, '-'));
      url.searchParams.set('utm_campaign', params.campaignName.toLowerCase().replace(/\s+/g, '-'));
      
      if (params.campaignTerm) {
        url.searchParams.set('utm_term', params.campaignTerm.toLowerCase().replace(/\s+/g, '-'));
      }
      
      if (params.campaignContent) {
        url.searchParams.set('utm_content', params.campaignContent.toLowerCase().replace(/\s+/g, '-'));
      }

      setGeneratedUrl(url.toString());
    } catch (error) {
      console.error('Error generating URL:', error);
      setGeneratedUrl('');
    }
  };

  const handleCopy = async () => {
    if (generatedUrl) {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setParams({
      websiteUrl: '',
      campaignSource: '',
      campaignMedium: '',
      campaignName: '',
      campaignTerm: '',
      campaignContent: '',
    });
    setGeneratedUrl('');
    setErrors({});
    setCopied(false);
  };

  const handlePresetClick = (field: 'campaignMedium' | 'campaignSource', value: string) => {
    setParams({ ...params, [field]: value });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          UTM Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create custom campaign URLs with UTM parameters to track your marketing campaigns in Google Analytics
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Details</h2>
          
          <div className="space-y-6">
            {/* Website URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Website URL *
              </label>
              <input
                type="text"
                value={params.websiteUrl}
                onChange={(e) => setParams({ ...params, websiteUrl: e.target.value })}
                placeholder="https://example.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.websiteUrl ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.websiteUrl && (
                <p className="mt-1 text-sm text-red-600">{errors.websiteUrl}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">The full website URL (e.g., https://example.com/page)</p>
            </div>

            {/* Campaign Source */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Campaign Source *
              </label>
              <input
                type="text"
                value={params.campaignSource}
                onChange={(e) => setParams({ ...params, campaignSource: e.target.value })}
                placeholder="google, facebook, newsletter"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.campaignSource ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.campaignSource && (
                <p className="mt-1 text-sm text-red-600">{errors.campaignSource}</p>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {sourcePresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handlePresetClick('campaignSource', preset)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 rounded-full transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500">The referrer (e.g., google, newsletter)</p>
            </div>

            {/* Campaign Medium */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Campaign Medium *
              </label>
              <input
                type="text"
                value={params.campaignMedium}
                onChange={(e) => setParams({ ...params, campaignMedium: e.target.value })}
                placeholder="cpc, email, social"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.campaignMedium ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.campaignMedium && (
                <p className="mt-1 text-sm text-red-600">{errors.campaignMedium}</p>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {mediumPresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handlePresetClick('campaignMedium', preset)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 rounded-full transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500">Marketing medium (e.g., cpc, email, social)</p>
            </div>

            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Campaign Name *
              </label>
              <input
                type="text"
                value={params.campaignName}
                onChange={(e) => setParams({ ...params, campaignName: e.target.value })}
                placeholder="spring_sale, product_launch"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.campaignName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.campaignName && (
                <p className="mt-1 text-sm text-red-600">{errors.campaignName}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">Product, promo code, or slogan</p>
            </div>

            {/* Campaign Term (Optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Campaign Term <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={params.campaignTerm}
                onChange={(e) => setParams({ ...params, campaignTerm: e.target.value })}
                placeholder="running+shoes, blue+widgets"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <p className="mt-1 text-xs text-gray-500">Identify paid search keywords</p>
            </div>

            {/* Campaign Content (Optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Campaign Content <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={params.campaignContent}
                onChange={(e) => setParams({ ...params, campaignContent: e.target.value })}
                placeholder="logolink, textlink, banner"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <p className="mt-1 text-xs text-gray-500">Use to differentiate ads or links</p>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              Reset All Fields
            </button>
          </div>
        </div>

        {/* Result Panel */}
        <div className="space-y-6">
          {/* Generated URL */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Generated URL</h2>
            
            {generatedUrl ? (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 break-all font-mono">{generatedUrl}</p>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy URL
                      </>
                    )}
                  </button>
                  
                  <a
                    href={generatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Test
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                <Share2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Fill in the required fields to generate your tracking URL</p>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-3">What are UTM Parameters?</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p><strong>utm_source:</strong> Identifies which site sent the traffic</p>
              <p><strong>utm_medium:</strong> Identifies what type of link was used</p>
              <p><strong>utm_campaign:</strong> Identifies a specific campaign</p>
              <p><strong>utm_term:</strong> Identifies search terms (for paid search)</p>
              <p><strong>utm_content:</strong> Identifies what was clicked (for A/B testing)</p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-lg font-bold text-green-900 mb-3">Best Practices</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>✓ Use lowercase for consistency</li>
              <li>✓ Use hyphens or underscores instead of spaces</li>
              <li>✓ Be consistent with naming conventions</li>
              <li>✓ Keep it simple and descriptive</li>
              <li>✓ Document your naming strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
