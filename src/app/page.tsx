import Hero from '@/components/hero/Hero';
import UniqueFeatures from '@/components/features/UniqueFeatures';
import Steps from '@/components/steps/Steps';
import Integrations from '@/components/integrations/Integrations';
import Benefits from '@/components/benefits/Benefits';
import CTASection from '@/components/cta/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="font-sans text-foreground">
      <Hero />
      {/* <LogosStrip />
      <AppShowcase /> */}
      <UniqueFeatures />
      <Benefits />
      <Steps />      
      <Integrations />
      {/* <Testimonials />
      <Pricing />
      <FAQ /> */}
      <CTASection />
      <Footer />
    </div>
  );
}
