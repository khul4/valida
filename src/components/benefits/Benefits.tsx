'use client';

import React from 'react';
import Container from '@/components/ui/container';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Drag & Drop Reporting',
    description: 'Create polished reports in minutes with a simple drag-and-drop canvas.',
    icon: (
      <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
  },
  {
    title: 'Automated Scheduling',
    description: 'Deliver weekly or monthly updates on autopilot—set it once and never worry again.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'AI Insights That Guide You',
    description: 'Turn data into action with AI-powered recommendations tailored to each campaign.',
    icon: (
      <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Integrates With Your Stack',
    description: 'Works seamlessly with the tools you already use: Google Ads, Meta, TikTok, LinkedIn, and more.',
    icon: (
      <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    title: 'Custom to Every Client',
    description: 'Easily adapt layouts and metrics so every report speaks your client\'s language.',
    icon: (
      <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    title: 'White-Label Ready',
    description: 'Keep the spotlight on your agency with branded reports that look like they came straight from your team.',
    icon: (
      <svg className="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-medium tracking-tight mb-4"
          >
            Benefits That Truly 
            <br/>Matter To You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Stop wasting time on manual reports. Arek gives you smart, simple tools that make reporting faster, sharper, and truly client-ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group h-full"
            >
              <div className="flex flex-col h-full p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-xl ${benefit.bgColor}`}>
                  <div className={benefit.iconColor}>{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground flex-grow">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
