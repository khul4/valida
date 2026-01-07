'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getBlogPostBySlug, extractTableOfContents, type BlogPost } from '@/lib/blog-helpers';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlogPost() {
      try {
        const resolvedParams = await params;
        const post = await getBlogPostBySlug(resolvedParams.id);
        if (!post) {
          setError('Blog post not found');
          return;
        }
        
        setBlogPost(post);
        const toc = extractTableOfContents(post.content);
        setTableOfContents(toc);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogPost();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Container>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Blog post not found'}
            </h1>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              ← Back to Blog
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
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
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {blogPost.author.name.split(' ').map(n => n[0]).join('')}
                </div>
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
          </div>
        </Container>
      </div>

      {/* Featured Image */}
      {blogPost.coverImage && (
        <div className="relative h-[400px] w-full">
          <Image
            src={blogPost.coverImage}
            alt={blogPost.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content with Sidebar */}
      <Container>
        <div className="flex gap-12 py-16">
          {/* Table of Contents Sidebar */}
          {tableOfContents.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors ${
                        item.level === 3 ? 'pl-4' : ''
                      }`}
                      style={{
                        fontSize: item.level === 3 ? '0.875rem' : '0.9rem',
                        fontWeight: item.level === 2 ? '500' : '400'
                      }}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className={`flex-1 ${tableOfContents.length > 0 ? 'max-w-3xl' : 'max-w-4xl mx-auto'}`}>
            <div
              className="prose prose-lg prose-blue max-w-none"
              style={{
                '--tw-prose-body': '#374151',
                '--tw-prose-headings': '#111827',
                '--tw-prose-links': '#2563eb',
                '--tw-prose-bold': '#111827',
                '--tw-prose-counters': '#6b7280',
                '--tw-prose-bullets': '#d1d5db',
                lineHeight: '1.75'
              } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Transform Your Marketing Reports?
              </h3>
              <p className="text-gray-600 mb-6">
                Stop spending hours on manual report creation. Let Arek AI build professional, client-ready reports in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </article>
  );
}