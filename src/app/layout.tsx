import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'
import { PostHogProvider } from '@/components/PostHogProvider'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "Arek - AI-Powered Marketing Reports",
  description: "Stop wasting hours creating reports. Let Arek AI build customizable, client-ready reports in minutes.",
  keywords: "AI reports, marketing automation, client reports, analytics",
  metadataBase: new URL('https://www.usearek.com'),
  openGraph: {
    title: "Arek - AI-Powered Marketing Reports",
    description: "Stop wasting hours creating reports. Let Arek AI build customizable, client-ready reports in minutes.",
    url: 'https://www.usearek.com',
    siteName: 'Arek',
    type: 'website',
    images: [
      {
        url: '/arek-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arek - AI-Powered Marketing Reports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arek',
    creator: '@arek',
    title: "Arek - AI-Powered Marketing Reports",
    description: "Stop wasting hours creating reports. Let Arek AI build customizable, client-ready reports in minutes.",
    images: ['/arek-og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <PostHogProvider>
          <Navbar />
          <main style={{ paddingTop: '64px' }}>
            {children}
          </main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
