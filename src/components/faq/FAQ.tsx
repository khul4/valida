'use client';

import { useState } from 'react';
import Container from '@/components/ui/container';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "How does your platform track feature usage?",
    answer: "Our platform uses advanced analytics to track user interactions with your features in real-time. We provide detailed insights into which features are being used, how often, and by whom, helping you make data-driven decisions about your product development."
  },
  {
    question: "Do I need technical skills to use Reporto?",
    answer: "Not at all. Reporto is built for teams of all sizes. Whether you're in marketing, product, or operations, the interface is intuitive and requires no coding."
  },
  {
    question: "Can Reporto integrate with tools we already use?",
    answer: "Yes. Reporto integrates with major tools like Stripe, Google Analytics, HubSpot, and more. You can also connect via API or no-code platforms."
  },
  {
    question: "Is my data secure on Reporto?",
    answer: "We take data security seriously. All data is encrypted both in transit and at rest, and we maintain strict compliance with GDPR, CCPA, and other privacy regulations. Our servers are hosted in secure, SOC 2 compliant facilities."
  },
  {
    question: "Can I try Reporto before committing?",
    answer: "Absolutely! We offer a free trial period that gives you full access to all features. No credit card required, and you can upgrade or cancel at any time."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(current => 
      current.includes(index) 
        ? current.filter(i => i !== index)
        : [...current, index]
    );
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-medium mb-4"
            >
              Common Questions
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-medium mb-6"
            >
              With Clear Answers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Here are answers to the most common things people ask before getting started.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        openItems.includes(index) ? 'transform rotate-45' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
