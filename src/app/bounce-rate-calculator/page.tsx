import BounceRateCalculator from '@/components/calculators/BounceRateCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Bounce Rate Calculator - Analyze User Engagement | Arek',
  description: 'Calculate your website bounce rate easily. Understand user engagement and improve your landing page performance.',
  keywords: ['bounce rate calculator', 'website analytics', 'user engagement', 'conversion optimization', 'marketing metrics'],
};

export default function BounceRateCalculatorPage() {
  return <BounceRateCalculator />;
}