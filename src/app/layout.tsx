import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'
import { PostHogProvider } from '@/components/PostHogProvider'

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
  openGraph: {
    title: "Arek - AI-Powered Marketing Reports",
    description: "Stop wasting hours creating reports. Let Arek AI build customizable, client-ready reports in minutes.",
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
