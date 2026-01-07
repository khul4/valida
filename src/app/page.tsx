import { Suspense } from 'react';
import Hero from '@/components/hero/Hero';
import UniqueFeatures from '@/components/features/UniqueFeatures';
import Steps from '@/components/steps/Steps';
import Integrations from '@/components/integrations/Integrations';
import Benefits from '@/components/benefits/Benefits';
import CTASection from '@/components/cta/CTASection';

// Loading component for better UX
const LoadingComponent = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

export default function Home() {
  return (
    <div className="font-sans text-foreground">
      <Hero />
      <UniqueFeatures />
      
      <Suspense fallback={<LoadingComponent />}>
        <Benefits />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>
        <Steps />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>      
        <Integrations />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
