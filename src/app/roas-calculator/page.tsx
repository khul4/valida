import ROASCalculator from '@/components/calculators/ROASCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free ROAS Calculator - Calculate Return on Ad Spend | Arek',
  description: 'Calculate your Return on Ad Spend (ROAS) easily. Measure and optimize your advertising efficiency and marketing ROI.',
  keywords: ['ROAS calculator', 'return on ad spend', 'marketing calculator', 'advertising ROI', 'marketing metrics'],
};

export default function ROASCalculatorPage() {
  return <ROASCalculator />;
}