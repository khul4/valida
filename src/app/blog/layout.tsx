import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Arek Marketing Reports',
  description: 'Discover the latest insights, tips, and strategies for marketing reports, SEO, and digital analytics.',
  openGraph: {
    title: 'Blog - Arek Marketing Reports',
    description: 'Discover the latest insights, tips, and strategies for marketing reports, SEO, and digital analytics.',
    url: 'https://www.usearek.com/blog',
    siteName: 'Arek',
    type: 'website',
    images: [
      {
        url: '/arek-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arek Blog - Marketing Reports Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arek',
    creator: '@arek',
    title: 'Blog - Arek Marketing Reports',
    description: 'Discover the latest insights, tips, and strategies for marketing reports, SEO, and digital analytics.',
    images: ['/arek-og-image.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}