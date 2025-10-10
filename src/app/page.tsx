import { Suspense, lazy } from 'react';
import Hero from '@/components/hero/Hero';
import UniqueFeatures from '@/components/features/UniqueFeatures';

// Lazy load components that are below the fold
const Steps = lazy(() => import('@/components/steps/Steps'));
const Integrations = lazy(() => import('@/components/integrations/Integrations'));
const Benefits = lazy(() => import('@/components/benefits/Benefits'));
const CTASection = lazy(() => import('@/components/cta/CTASection'));
const Footer = lazy(() => import('@/components/layout/Footer'));

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
      
      <Suspense fallback={<LoadingComponent />}>
        <Footer />
      </Suspense>
    </div>
  );
}
