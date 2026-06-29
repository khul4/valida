import ProductHero from '@/components/product/ProductHero';

export const metadata = {
  openGraph: {
    url: 'https://www.usearek.com',
    siteName: 'Arek Studio',
    type: 'website',
  },
};

export default function Home() {
  return <ProductHero />;
}
