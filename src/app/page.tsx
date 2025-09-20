import Hero from '@/components/hero/Hero';
import AppShowcase from '@/components/showcase/AppShowcase';
import LogosStrip from '@/components/trust/LogosStrip';
import UniqueFeatures from '@/components/features/UniqueFeatures';
import Steps from '@/components/steps/Steps';
import Integrations from '@/components/integrations/Integrations';
import Benefits from '@/components/benefits/Benefits';
import Testimonials from '@/components/testimonials/Testimonials';
import Pricing from '@/components/pricing/Pricing';
import FAQ from '@/components/faq/FAQ';
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
