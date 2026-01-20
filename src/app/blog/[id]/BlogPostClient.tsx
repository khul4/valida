'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { extractTableOfContents, type BlogPost, type BlogPostMeta } from '@/lib/blog-helpers';
import { AuthorBio } from '@/components/blog/AuthorBio';
import '../blog.css';

interface BlogPostClientProps {
  blogPost: BlogPost;
  relatedPosts: BlogPostMeta[];
}

export default function BlogPostClient({ blogPost, relatedPosts }: BlogPostClientProps) {
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    // Generate TOC from content
    const toc = extractTableOfContents(blogPost.content);
    setTableOfContents(toc);
  }, [blogPost]);

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

  return (
    <article className="min-h-screen bg-white">
      {/* Structured Data (Schema.org JSON-LD) */}
      {blogPost.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPost.schema)
          }}
        />
      )}
      
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
                <Link href={`/author/${blogPost.author.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D5603AQHif-7tB-iyvg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721016736149?e=1769644800&v=beta&t=OmhelGKv3eUOvr3COMioESeI61iIBSqfflOAk68wqUg"
                      alt={blogPost.author.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="ml-3">
                  <Link href={`/author/${blogPost.author.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <p className="font-medium text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                      {blogPost.author.name}
                    </p>
                  </Link>
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
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '1200/630' }}>
                <Image
                  src={blogPost.coverImage}
                  alt={blogPost.title}
                  fill
                  className="object-contain"
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
              /* Table Styles Override for Prose */
              .prose table {
                width: 100% !important;
                margin: 2rem 0 !important;
                border-collapse: collapse !important;
                border: 1px solid #e5e7eb !important;
                border-radius: 8px !important;
                overflow: hidden !important;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
              }
              
              .prose thead th {
                background-color: #f9fafb !important;
                padding: 1rem !important;
                font-size: 0.9rem !important;
                font-weight: 600 !important;
                color: #111827 !important;
                border-bottom: 2px solid #e5e7eb !important;
                border-right: 1px solid #e5e7eb !important;
                text-align: left !important;
              }
              
              .prose th:last-child {
                border-right: none !important;
              }
              
              .prose td {
                padding: 1rem !important;
                font-size: 0.9rem !important;
                color: #4b5563 !important;
                border-bottom: 1px solid #e5e7eb !important;
                border-right: 1px solid #e5e7eb !important;
                vertical-align: top !important;
              }
              
              .prose td:last-child {
                border-right: none !important;
              }
              
              .prose tr:last-child td {
                border-bottom: none !important;
              }
              
              .prose tbody tr:nth-child(even) {
                background-color: rgba(249, 250, 251, 0.5) !important;
              }
              
              .prose tbody tr:hover {
                background-color: rgba(59, 130, 246, 0.05) !important;
              }
              
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
              
              .prose ul, .prose ol {
                margin-top: 1.25rem;
                margin-bottom: 1.25rem;
                padding-left: 1.5rem;
              }
              
              .prose li {
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
              }
              
              .prose img {
                border-radius: 0.75rem;
                margin-top: 2rem;
                margin-bottom: 2rem;
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
            
            {/* Author Bio Section */}
            <AuthorBio />
            
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
                      <article className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                        {post.coverImage && (
                          <div className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-xl" style={{ aspectRatio: '16/9' }}>
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                            Read more
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </main>
          
          {/* Sidebar */}
          <aside className="hidden lg:block w-80 sticky top-24 shrink-0">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-3 rounded-md text-sm transition-colors border-l-2 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 border-blue-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-transparent'
                    }`}
                    style={{ 
                      paddingLeft: `${(item.level - 1) * 0.75 + 0.75}rem` 
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.replaceState(null, '', `#${item.id}`);
                        setActiveSection(item.id);
                      }
                    }}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          </div>
        </div>
      </div>
      
       {/* Mobile TOC Button */}
       {tableOfContents.length > 0 && (
          <>
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-transform hover:scale-105 active:scale-95"
              aria-label="Table of Contents"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              </svg>
            </button>

            {/* Mobile TOC Drawer */}
            {mobileTocOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div 
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setMobileTocOpen(false)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl animate-slide-up">
                  <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                    <button 
                      onClick={() => setMobileTocOpen(false)}
                      className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="overflow-y-auto p-4 custom-scrollbar">
                    <nav className="space-y-1">
                      {tableOfContents.map((item) => {
                         const isActive = activeSection === item.id;
                         return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block py-3 px-4 rounded-lg text-sm transition-all duration-200 border-l-4 ${
                              isActive
                                ? 'bg-blue-50 text-blue-700 border-blue-600 font-semibold shadow-sm'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent'
                            }`}
                            style={{ 
                              paddingLeft: `${(item.level - 1) * 1 + 1}rem`,
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