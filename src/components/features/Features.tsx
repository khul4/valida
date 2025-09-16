import Container from '@/components/ui/container';
import FeatureCard from './FeatureCard';
import { Button } from '@/components/ui/button';

export default function Features() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold">4 core values</h2>
        <p className="mt-2 text-gray-600">Create reports faster and smarter.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Fast">Create reports in minutes, not hours.</FeatureCard>
          <FeatureCard title="Insight">AI-powered recommendations for your next move.</FeatureCard>
          <FeatureCard title="Schedule">Automated weekly or monthly reports for clients.</FeatureCard>
          <FeatureCard title="Customize">Tailor reports for each client’s needs.</FeatureCard>
        </div>

        <div className="mt-8">
          <Button variant="ghost">Start creating reports faster →</Button>
        </div>
      </Container>
    </section>
  );
}
