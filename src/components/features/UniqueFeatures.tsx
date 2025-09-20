'use client';

import Container from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Save Time Instantly',
    description: 'Build reports in minutes, not hours. So you can focus on strategy instead of spreadsheets',
    preview: (
      <div className="rounded-lg overflow-hidden bg-gray-50">
        <Image
          src="/save-time.svg"
          alt="Unified Metrics Preview"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    ),
  },
  {
    title: 'From Data to Decisions',
    description: 'Go beyond charts. AI highlights what matters and suggests the best next steps.',
    preview: (
      <div className="rounded-lg overflow-hidden bg-gray-50">
        <Image
          src="/ai-insight.svg"
          alt="AI Growth Insights Preview"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    ),
  },
  {
    title: 'Never Miss a Client Update',
    description: 'Automate weekly or monthly reports. Set it once and deliver on time, every time.',
    preview: (
      <div className="rounded-lg overflow-hidden bg-gray-50">
        <Image
          src="/weekly-report.svg"
          alt="Product Usage Tracking Preview"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    ),
  },
  {
    title: 'Give Clients Exactly What They Want',
    description: 'Customize and brand every report with the metrics that matter most to each client.',
    preview: (
      <div className="rounded-lg overflow-hidden bg-gray-50">
        <Image
          src="/customize.svg"
          alt="Feature Impact Analysis Preview"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    ),
  },
];

export default function UniqueFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-medium tracking-tight mb-4"
          >
            Meet Arek, Your AI-powered reporting partner
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Arek combines metrics with actionable insights so you can focus on optimization and client conversations instead of data crunching
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <div className="relative">
                  {feature.preview}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
