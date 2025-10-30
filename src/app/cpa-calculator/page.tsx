import CPACalculator from '@/components/calculators/CPACalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free CPA Calculator - Calculate Cost Per Acquisition | Arek',
  description: 'Calculate your Cost Per Acquisition (CPA) easily. Understand how much you spend per conversion and optimize your marketing ROI.',
  keywords: ['CPA calculator', 'cost per acquisition', 'marketing calculator', 'conversion cost', 'ROI calculator'],
};

export default function CPACalculatorPage() {
  return <CPACalculator />;
}