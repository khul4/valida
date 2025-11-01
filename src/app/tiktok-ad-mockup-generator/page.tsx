import { Metadata } from 'next';
import TikTokAdMockupGenerator from '../../components/calculators/TikTokAdMockupGenerator';

export const metadata: Metadata = {
  title: 'TikTok Ad Mockup Generator | Create Realistic TikTok Ads',
  description: 'Design and preview TikTok ads before they go live. Create realistic TikTok ad mockups with our free generator tool. Support for Story and Story CTA formats.',
  keywords: 'tiktok ads, ad mockup, tiktok marketing, social media ads, ad preview, tiktok ad generator',
  openGraph: {
    title: 'TikTok Ad Mockup Generator',
    description: 'Design and preview TikTok ads before they go live. Create realistic TikTok ad mockups with our free generator tool.',
    type: 'website',
  },
};

export default function TikTokAdMockupGeneratorPage() {
  return <TikTokAdMockupGenerator />;
}