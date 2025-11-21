import React from 'react';
import { Metadata } from 'next';
import UTMBuilder from '@/components/calculators/UTMBuilder';
import Container from '@/components/ui/container';
import RelatedTools from '@/components/calculators/RelatedTools';

export const metadata: Metadata = {
  title: 'Free UTM Builder | Create Campaign Tracking URLs | Valida Analytics',
  description: 'Generate custom UTM parameters for your marketing campaigns. Track your traffic sources, campaigns, and content in Google Analytics with our free UTM builder tool.',
  keywords: 'UTM builder, UTM parameters, campaign tracking, Google Analytics, UTM generator, URL builder, marketing tracking, campaign URLs, utm_source, utm_medium, utm_campaign',
  openGraph: {
    title: 'Free UTM Builder | Create Campaign Tracking URLs',
    description: 'Generate custom UTM parameters for your marketing campaigns. Track your traffic sources, campaigns, and content in Google Analytics.',
    type: 'website',
  },
};

export default function UTMBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <UTMBuilder />
      
      <Container>
        {/* Educational Content */}
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding UTM Parameters for Campaign Tracking
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a UTM Builder?</h3>
              <p className="text-gray-600 mb-4">
                A UTM builder is a tool that helps you create custom URLs with tracking parameters (UTM codes) 
                that allow you to measure the effectiveness of your marketing campaigns in Google Analytics and 
                other analytics platforms.
              </p>
              <p className="text-gray-600">
                UTM parameters are tags you add to your URLs to track where your website traffic comes from. 
                When someone clicks a link with UTM parameters, that data is sent to your analytics tool, 
                providing detailed insights about your traffic sources and campaign performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The 5 UTM Parameters Explained</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">1. utm_source (Required)</h4>
                  <p className="text-gray-600 mb-2">
                    Identifies the source of your traffic, such as a search engine, newsletter, or social media platform.
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono">
                    Example: google, facebook, newsletter, partner-site
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">2. utm_medium (Required)</h4>
                  <p className="text-gray-600 mb-2">
                    Identifies the marketing medium, such as email, social media, or paid advertising.
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono">
                    Example: cpc, email, social, banner, affiliate
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">3. utm_campaign (Required)</h4>
                  <p className="text-gray-600 mb-2">
                    Identifies the specific campaign name, promotion, or product being advertised.
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono">
                    Example: spring-sale, product-launch, black-friday-2024
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">4. utm_term (Optional)</h4>
                  <p className="text-gray-600 mb-2">
                    Identifies paid search keywords. Used primarily for paid search campaigns to note the keywords.
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono">
                    Example: running+shoes, marketing+software
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">5. utm_content (Optional)</h4>
                  <p className="text-gray-600 mb-2">
                    Used to differentiate similar content or links within the same ad or campaign. Great for A/B testing.
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono">
                    Example: logo-link, text-link, banner-ad, cta-button
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UTM Parameter Best Practices</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1. Use Consistent Naming Conventions</h4>
                  <p className="text-gray-600">
                    Always use lowercase and be consistent with your naming. UTM parameters are case-sensitive, 
                    so "Facebook" and "facebook" will be tracked as different sources.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">2. Avoid Spaces</h4>
                  <p className="text-gray-600">
                    Use hyphens (-) or underscores (_) instead of spaces. For example, use "spring-sale" instead of "spring sale".
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">3. Be Descriptive but Concise</h4>
                  <p className="text-gray-600">
                    Make your parameters descriptive enough to understand at a glance, but keep them short and simple.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">4. Document Your Strategy</h4>
                  <p className="text-gray-600">
                    Create a naming convention document and share it with your team to ensure consistency across all campaigns.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">5. Don't Use UTMs for Internal Links</h4>
                  <p className="text-gray-600">
                    Only use UTM parameters for external campaigns. Using them on internal links can mess up your analytics data.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Use Cases</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Email Marketing</h4>
                  <p className="text-gray-600 mb-2">Track which email campaigns drive the most traffic and conversions.</p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono break-all">
                    ?utm_source=newsletter&utm_medium=email&utm_campaign=summer-sale
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Social Media Campaigns</h4>
                  <p className="text-gray-600 mb-2">Measure the performance of your social media posts and ads.</p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono break-all">
                    ?utm_source=facebook&utm_medium=social&utm_campaign=product-launch
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Paid Advertising</h4>
                  <p className="text-gray-600 mb-2">Track ROI from your paid search and display campaigns.</p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono break-all">
                    ?utm_source=google&utm_medium=cpc&utm_campaign=brand-keywords&utm_term=marketing+tool
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Partner and Affiliate Links</h4>
                  <p className="text-gray-600 mb-2">Monitor traffic and conversions from partner websites and affiliates.</p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded font-mono break-all">
                    ?utm_source=partner-blog&utm_medium=referral&utm_campaign=guest-post
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Use a UTM Builder?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Accurate Campaign Tracking:</strong> Know exactly which campaigns drive traffic and conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Better ROI Analysis:</strong> Understand which marketing channels provide the best return</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Data-Driven Decisions:</strong> Make informed choices about where to invest your marketing budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Easy A/B Testing:</strong> Compare different versions of ads and content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Free and Simple:</strong> No cost and easy to implement across all your campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <RelatedTools currentTool="UTM Builder" />
      </Container>
    </div>
  );
}
