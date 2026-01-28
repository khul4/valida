'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllBlogPosts, getAllCategories, type BlogPostMeta } from '@/lib/blog-helpers';

export default function BlogIndex() {
  const [blogPosts, setBlogPosts] = useState<BlogPostMeta[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogData() {
      try {
        const [posts, cats] = await Promise.all([
          getAllBlogPosts(),
          getAllCategories()
        ]);
        setBlogPosts(posts);
        setCategories(['all', ...cats]);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogData();
  }, []);

  // Filter posts based on category
  const filteredPosts = blogPosts
    .filter((post) => selectedCategory === 'all' || post.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <Container>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        </Container>
      </div>
    );
  }

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
                    ? 'bg-black text-white'
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
                  <span className="text-sm font-medium text-black mb-2 block">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    {post.author.avatar ? (
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
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