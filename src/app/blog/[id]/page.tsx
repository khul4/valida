'use client';

import { useParams } from 'next/navigation';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

// Sample blog post data (you would typically fetch this from an API or database)
const blogPost = {
  id: '1',
  title: 'How to Create Effective Marketing Reports That Clients Love',
  content: `
    <p>In today's data-driven marketing landscape, creating effective reports is crucial for maintaining strong client relationships and demonstrating the value of your services. This comprehensive guide will walk you through the essential elements of creating marketing reports that not only inform but also impress your clients.</p>

    <h2>1. Start with Clear Objectives</h2>
    <p>Before diving into the data, it's essential to understand what your clients want to achieve. Every report should align with their business goals and answer their key questions.</p>

    <h2>2. Focus on Key Metrics</h2>
    <p>While it's tempting to include every available metric, focus on the ones that matter most to your client's success. Quality over quantity is key in report creation.</p>

    <h2>3. Tell a Story with Data</h2>
    <p>Don't just present numbers; weave them into a compelling narrative that explains what happened, why it happened, and what it means for the client's business.</p>

    <h2>4. Use Visual Elements Effectively</h2>
    <p>Incorporate charts, graphs, and other visual elements to make your data more digestible and engaging. Visual representation can help clients quickly grasp complex information.</p>

    <h2>5. Provide Actionable Insights</h2>
    <p>Always include recommendations based on the data. What should the client do next? What opportunities have you identified?</p>
  `,
  coverImage: '/blog/post1.jpg',
  date: 'September 20, 2025',
  author: {
    name: 'John Doe',
    avatar: '/testimonials/avatar1.png',
    role: 'Marketing Analytics Expert'
  },
  category: 'Marketing',
  readTime: '5 min read'
};

export default function BlogPost() {
  const params = useParams();

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
            
            <span className="block text-blue-600 text-sm font-medium mb-3">
              {blogPost.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <Image
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3 text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {blogPost.author.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {blogPost.author.role}
                  </p>
                </div>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{blogPost.date}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{blogPost.readTime}</span>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Featured Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={blogPost.coverImage}
          alt={blogPost.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <Container>
        <div className="max-w-3xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </Container>
    </article>
  );
}