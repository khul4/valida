import ProductHero from '@/components/product/ProductHero';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductVisuals from '@/components/product/ProductVisuals';
import ProductMetrics from '@/components/product/ProductMetrics';
import ProductCTA from '@/components/product/ProductCTA';

export const metadata = {
  title: 'SEO Reporting Tool - Arek AI | Automated Client-Ready Reports',
  description: 'Transform your SEO data into beautiful, client-ready reports in minutes. Automate your reporting workflow with AI-powered insights.',
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProductHero />
      <ProductFeatures />
      <ProductVisuals />
      <ProductMetrics />
      <ProductCTA />
    </div>
  );
}
