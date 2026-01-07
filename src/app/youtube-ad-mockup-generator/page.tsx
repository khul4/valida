import React from 'react';
import { Metadata } from 'next';
import YouTubeAdMockupGenerator from '@/components/calculators/YouTubeAdMockupGenerator';

export const metadata: Metadata = {
  title: 'Free YouTube Ad Mockup Generator | Create Video Ad Previews | Valida',
  description: 'Generate realistic YouTube ad mockups for skippable, non-skippable, bumper, and display ads. Preview your video ads before launching campaigns.',
  keywords: 'YouTube ad mockup, video ad generator, YouTube ads preview, skippable ads, non-skippable ads, bumper ads, display ads, YouTube advertising, ad mockup tool',
  openGraph: {
    title: 'Free YouTube Ad Mockup Generator | Create Video Ad Previews',
    description: 'Generate realistic YouTube ad mockups for all ad formats. Preview your video ads before launching campaigns.',
    type: 'website',
  },
};

export default function YouTubeAdMockupGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50">
      <YouTubeAdMockupGenerator />
    </div>
  );
}
