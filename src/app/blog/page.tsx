'use client';

import { useState } from 'react';
import Container from '@/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Type for our blog post
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string | null;
  };
  category: string;
}

// Sample blog posts data (you can replace this with your actual data source)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Arek vs Traditional Reporting Tools: Which Marketing Solution Wins in 2026?',
    excerpt: 'A comprehensive comparison of AI-powered reporting versus traditional analytics tools. Discover which approach delivers the best ROI for different agency sizes and needs.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&q=80',
    date: 'January 5, 2026',
    author: {
      name: 'Sarah Johnson',
      avatar: null
    },
    category: 'Tool Comparison'
  },
  {
    id: '2',
    title: 'The Future of AI in Digital Marketing Analytics: 2026 Predictions',
    excerpt: 'Explore how artificial intelligence is reshaping marketing analytics, from predictive insights to automated optimization. Learn what changes to expect this year.',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=entropy&q=80',
    date: 'January 3, 2026',
    author: {
      name: 'Michael Chen',
      avatar: null
    },
    category: 'AI & Analytics'
  },
  {
    id: '3',
    title: 'How to Build Client-Ready Marketing Reports in Under 10 Minutes',
    excerpt: 'Step-by-step guide to creating professional marketing reports that clients love. Includes templates, best practices, and automation tips.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&q=80',
    date: 'December 28, 2025',
    author: {
      name: 'Emily Rodriguez',
      avatar: null
    },
    category: 'Best Practices'
  },
  {
    id: '4',
    title: 'Agency Growth Secrets: Scaling from 10 to 100 Clients',
    excerpt: 'Real strategies from successful agency owners on scaling operations, maintaining quality, and building systems that support rapid growth.',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&q=80',
    date: 'December 25, 2025',
    author: {
      name: 'David Park',
      avatar: null
    },
    category: 'Agency Growth'
  },
  {
    id: '5',
    title: 'ROI Tracking Made Simple: Metrics That Actually Matter',
    excerpt: 'Cut through the noise of vanity metrics. Focus on the KPIs that demonstrate real value to clients and drive business decisions.',
    coverImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&crop=entropy&q=80',
    date: 'December 22, 2025',
    author: {
      name: 'Lisa Thompson',
      avatar: null
    },
    category: 'Analytics'
  },
  {
    id: '6',
    title: 'White-Label Reporting: Building Trust Through Professional Presentation',
    excerpt: 'Why professional report presentation matters for client retention and how white-labeling can elevate your agency\'s credibility.',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=entropy&q=80',
    date: 'December 20, 2025',
    author: {
      name: 'Jennifer Wang',
      avatar: null
    },
    category: 'Client Relations'
  }
];

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on category
  const filteredPosts = blogPosts
    .filter((post) => selectedCategory === 'all' || post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 bg-white rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-medium tracking-tight mb-6"
          >
            Latest Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Discover the latest trends, tips, and strategies in marketing analytics and reporting
          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-blue-600 mb-2 block">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </div>
  );
}