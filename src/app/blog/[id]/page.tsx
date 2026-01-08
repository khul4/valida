'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getBlogPostBySlug, extractTableOfContents, getAllBlogPosts, findRelatedPosts, type BlogPost, type BlogPostMeta } from '@/lib/blog-helpers';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostMeta[]>([]);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

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
        
        // Fetch related posts
        const allPosts = await getAllBlogPosts();
        const related = findRelatedPosts(post, allPosts, 3);
        setRelatedPosts(related);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogPost();
  }, [params]);

  // Track active section on scroll
  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const handleScroll = () => {
      const headings = tableOfContents.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            offset: rect.top,
            bottom: rect.bottom
          };
        }
        return null;
      }).filter(Boolean);

      // Find the heading that's currently in the viewport
      // Prefer headings that are above the fold (within 150px of top)
      const viewportTop = 150;
      let activeId = '';

      // Find the last heading that's above or near the viewport top
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading!.offset <= viewportTop) {
          activeId = heading!.id;
          break;
        }
      }

      // If no heading is above the fold, use the first heading if it's close
      if (!activeId && headings.length > 0 && headings[0]!.offset <= window.innerHeight * 0.5) {
        activeId = headings[0]!.id;
      }

      if (activeId !== activeSection) {
        setActiveSection(activeId);
      }
    };

    // Debounce scroll events for better performance
    let ticking = false;
    const debouncedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    debouncedHandleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [tableOfContents, activeSection]);

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
      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl">
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
            
            <span className="block text-blue-600 text-sm font-medium mb-4">
              {blogPost.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {blogPost.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">
                    {blogPost.author.name}
                  </p>
                  <p className="text-gray-500">
                    {blogPost.author.role}
                  </p>
                </div>
              </div>
              <span className="text-gray-300">•</span>
              <span>{blogPost.date}</span>
              <span className="text-gray-300">•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content with Sidebar */}
      <div className="w-full pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image - within content width */}
          {blogPost.coverImage && (
            <div className="mb-12 max-w-7xl">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src={blogPost.coverImage}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="lg:flex gap-8 lg:gap-12 items-start relative">
          {/* Main Content */}
          <main className="flex-1 min-w-0 max-w-4xl">
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
            
            {/* Typography styles */}
            <style jsx global>{`
              /* Heading sizes and spacing */
              .prose h1 {
                font-size: 2.25rem;
                line-height: 2.5rem;
                font-weight: 800;
                margin-top: 0;
                margin-bottom: 1.5rem;
                scroll-margin-top: 6rem;
              }
              
              .prose h2 {
                font-size: 1.875rem;
                line-height: 2.25rem;
                font-weight: 700;
                margin-top: 2.5rem;
                margin-bottom: 1.25rem;
                scroll-margin-top: 6rem;
              }
              
              .prose h3 {
                font-size: 1.5rem;
                line-height: 2rem;
                font-weight: 600;
                margin-top: 2rem;
                margin-bottom: 1rem;
                scroll-margin-top: 6rem;
              }
              
              .prose h4 {
                font-size: 1.25rem;
                line-height: 1.75rem;
                font-weight: 600;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                scroll-margin-top: 6rem;
              }
              
              .prose h5 {
                font-size: 1.125rem;
                line-height: 1.75rem;
                font-weight: 600;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                scroll-margin-top: 6rem;
              }
              
              .prose h6 {
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 600;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                scroll-margin-top: 6rem;
              }
              
              /* Body text */
              .prose p {
                font-size: 1.125rem;
                line-height: 1.75rem;
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
              }
              
              /* Lists */
              .prose ul, .prose ol {
                font-size: 1.125rem;
                line-height: 1.75rem;
              }
              
              .prose li {
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
              }
              
              /* Links */
              .prose a {
                font-weight: 500;
                text-decoration: underline;
              }
              
              /* Strong and emphasis */
              .prose strong {
                font-weight: 600;
              }
              
              .prose em {
                font-style: italic;
              }
              
              /* Code */
              .prose code {
                font-size: 0.875rem;
              }
              
              .prose pre {
                font-size: 0.875rem;
              }
            `}</style>
            
            {/* CTA Section */}
            <div className="mt-16 p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
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
            
            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className={`grid gap-6 ${
                  relatedPosts.length === 1 
                    ? 'grid-cols-1 max-w-md' 
                    : relatedPosts.length === 2 
                    ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {relatedPosts.slice(0, 3).map((post) => (
                    <Link 
                      key={post.id} 
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      <article className="h-full bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                        {post.coverImage && (
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <div className="text-xs font-medium text-blue-600 mb-2">
                            {post.category}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
          
          {/* Table of Contents Sidebar */}
          {tableOfContents.length > 0 && (
            <aside 
              className="hidden lg:block w-64 flex-shrink-0"
              style={{
                position: 'sticky',
                top: '5.5rem',
                alignSelf: 'flex-start',
                maxHeight: 'calc(100vh - 6.5rem)',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">On This Page</h3>
                
                <nav className="space-y-1">
                  {tableOfContents.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1.5 text-sm transition-colors ${ 
                          item.level === 3 ? 'ml-3' : ''
                        } ${
                          isActive
                            ? 'text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            window.history.replaceState(null, '', `#${item.id}`);
                          }
                        }}
                      >
                        {item.text}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          )}
          </div>
        </div>
      </div>
        
        {/* Mobile TOC Button */}
        {tableOfContents.length > 0 && (
          <>
            <button
              onClick={() => setMobileTocOpen(true)}
              className="lg:hidden fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              aria-label="Open table of contents"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile TOC Overlay */}
            {mobileTocOpen && (
              <div className="lg:hidden fixed inset-0 z-50 flex">
                {/* Backdrop */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-50"
                  onClick={() => setMobileTocOpen(false)}
                />
                
                {/* TOC Panel */}
                <div className="relative bg-white w-80 max-w-[90vw] h-full overflow-y-auto shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Table of Contents</h3>
                      <button
                        onClick={() => setMobileTocOpen(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block py-3 px-4 text-sm rounded-lg transition-all duration-200 border-l-3 ${
                              item.level === 3 ? 'ml-4' : ''
                            } ${
                              isActive
                                ? 'text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border-l-blue-500 font-semibold'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 border-l-transparent'
                            }`}
                            style={{
                              fontSize: item.level === 3 ? '0.875rem' : '0.9rem',
                              borderLeftWidth: '3px'
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(item.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                window.history.replaceState(null, '', `#${item.id}`);
                                setMobileTocOpen(false);
                              }
                            }}
                          >
                            {item.text}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
    </article>
  );
}