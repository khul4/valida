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
  title: "Arek Studio — Creative Studio",
  description: "A boutique creative studio doing brand identity, art direction, and digital design.",
  metadataBase: new URL('https://www.usearek.com'),
  openGraph: {
    title: "Arek Studio — Creative Studio",
    description: "A boutique creative studio doing brand identity, art direction, and digital design.",
    url: 'https://www.usearek.com',
    siteName: 'Arek Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arek Studio — Creative Studio",
    description: "A boutique creative studio doing brand identity, art direction, and digital design.",
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
          <main>
            {children}
          </main>
        </PostHogProvider>
      </body>
    </html>
  );
}
