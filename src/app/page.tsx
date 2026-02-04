import ProductHero from '@/components/product/ProductHero';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductIntegrations from '@/components/product/ProductIntegrations';
import ProductVisuals from '@/components/product/ProductVisuals';
import ProductMetrics from '@/components/product/ProductMetrics';
import ProductCTA from '@/components/product/ProductCTA';

export const metadata = {
  title: 'AREK - SEO Reports That Show the Value of Your Work',
  description: 'Create SEO reports that explain what changed, why it matters, and how your work creates value',
  openGraph: {
    title: 'AREK - SEO Reports That Show the Value of Your Work',
    description: 'Create SEO reports that explain what changed, why it matters, and how your work creates value',
    url: 'https://www.usearek.com',
    siteName: 'Arek',
    type: 'website',
    images: [
      {
        url: '/arek-og-image.png',
        width: 1200,
        height: 630,
        alt: 'AREK - SEO Reports That Show the Value of Your Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arek',
    creator: '@arek',
    title: 'AREK - SEO Reports That Show the Value of Your Work',
    description: 'Create SEO reports that explain what changed, why it matters, and how your work creates value',
    images: ['/arek-og-image.png'],
  },
};

export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        <ProductHero />
        <ProductFeatures />
        <ProductIntegrations />
        <ProductVisuals />
        <ProductMetrics />
        <ProductCTA />
      </div>
    );
}
