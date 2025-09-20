'use client';

import Container from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: 'Connect Your Tools',
    description: 'Seamlessly integrate Arek with your marketing stack, Google Ads, Meta, TikTok, and more',
    image: '/steps/integrations.svg',
  },
  {
    title: 'Design Your Report',
    description: 'Drag & drop metrics, apply your branding, and let AI highlight the insights that matter',
    image: '/steps/design-report.svg',
  },
  {
    title: 'Deliver Instantly',
    description: 'Share polished, white-labeled reports with clients in one click, on schedule or on demand',
    image: '/steps/deliver-instantly.svg',
  },
];

export default function Steps() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-medium tracking-tight mb-2">Get Client-Ready Reports </h2>
            <h2 className="text-5xl font-medium tracking-tight mb-6">In 3 Simple Steps</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Reporting doesn’t have to be hard. With Arek, you can go from data to client-ready reports in minutes
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {step.description}
                </p>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden px-30 py-30 bg-red-100">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
