import InstagramAdMockupGenerator from '@/components/calculators/InstagramAdMockupGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Instagram Ad Mockup Generator | Create Perfect Ad Previews',
  description: 'Generate pixel-perfect Instagram ad mockups for free. Preview sponsored posts, carousels, reels & stories in every format before your campaigns go live.',
  keywords: 'instagram ad mockup, ad preview generator, instagram ad creator, social media mockup, sponsored post generator, instagram stories mockup, reel mockup',
  openGraph: {
    title: 'Free Instagram Ad Mockup Generator | Create Perfect Ad Previews',
    description: 'Generate pixel-perfect Instagram ad mockups for free. Preview sponsored posts, carousels, reels & stories before your campaigns go live.',
    type: 'website',
  },
};

export default function InstagramAdMockupGeneratorPage() {
  return <InstagramAdMockupGenerator />;
}