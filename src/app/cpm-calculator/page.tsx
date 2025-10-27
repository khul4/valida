import CPMCalculator from '@/components/calculators/CPMCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free CPM Calculator - Calculate Cost Per Mille | Reporto',
  description: 'Calculate your cost per thousand impressions (CPM) for advertising campaigns. Compare across different channels and optimize your marketing budget.',
  keywords: ['CPM calculator', 'cost per mille', 'advertising calculator', 'marketing metrics', 'impression cost'],
};

export default function CPMCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-foreground">
      <div className="pt-24 pb-16">
        <CPMCalculator />
      </div>
    </div>
  );
}