'use client';

import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';
// Simple check icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 39,
    description: "Great for small teams getting started.",
    features: [
      { text: "5,000 tracked users" },
      { text: "Core analytics" },
      { text: "Simple dashboards" },
      { text: "Email support" },
      { text: "Weekly reports" }
    ]
  },
  {
    name: "Growth",
    price: 99,
    description: "For fast-growing teams who are scaling.",
    features: [
      { text: "Everything in starter" },
      { text: "50,000 tracked users" },
      { text: "Funnel & drop-off analysis" },
      { text: "Custom dashboards" },
      { text: "Team collaboration tools" }
    ],
    isPopular: true
  },
  {
    name: "Premium",
    price: 299,
    description: "Great for enterprizes to convert more.",
    features: [
      { text: "All Growth features" },
      { text: "Unlimited tracked users" },
      { text: "Dedicated account manager" },
      { text: "GDPR & compliance support" },
      { text: "Advanced integrations" }
    ]
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-medium mb-4"
          >
            Choose The Best Plan That Suites You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Pricing that grows with your agency. Flexible, transparent, and free of hidden fees
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-2xl ${
                plan.isPopular ? 'shadow-xl ring-2 ring-blue-600' : 'border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${isAnnual ? plan.price * 10 : plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-green-600 text-sm mt-2">Save 16% with annual billing</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full justify-center ${
                  plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''
                }`}
                variant={plan.isPopular ? 'default' : 'outline'}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
