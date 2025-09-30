'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { getTermBySlug, getTermsByCategory } from '@/content/glossary';
import type { GlossaryTerm } from '@/types/glossary';
import './term.css';

export default function GlossaryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const termSlug = resolvedParams.term;
  
  const term = getTermBySlug(termSlug);

  if (!term) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Term Not Found</h1>
        <p className="text-gray-700 mb-4">The term you're looking for doesn't exist in our glossary.</p>
        <Link href="/glossary" className="text-blue-600 hover:underline">
          Return to Glossary
        </Link>
      </div>
    );
  }

  // Find related terms (same category)
  const relatedTerms = getTermsByCategory(term.category)
    .filter((t: GlossaryTerm) => t.slug !== term.slug)
    .slice(0, 3);

  return (
    <div className="glossary-detail">
      {/* Hero section with blue background */}
      <div className="glossary-hero">
        <div className="glossary-content">
          <Link href="/glossary" className="inline-flex items-center text-blue-100 mb-6 hover:text-white">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Glossary
          </Link>
          <h1 className="text-4xl font-bold mb-4">{term.term}</h1>
          {term.category && (
            <span className="inline-block text-sm bg-blue-600 bg-opacity-20 rounded-full px-3 py-1">
              {term.category}
            </span>
          )}
        </div>
      </div>

      {/* Main content */}
      <main className="glossary-content">
        <div className="prose prose-lg max-w-none">
          {term.content ? (
            <div className="space-y-8">
              {term.content.sections.map((section, index) => (
                <div key={index} className="content-section">
                  {section.title && (
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                  )}
                  {section.type === 'list' ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-lg leading-relaxed">{term.definition}</p>
          )}
        </div>

        {/* Promotional Banner */}
        <div className="glossary-banner">
          <h3 className="glossary-banner-title">Want to improve your digital marketing?</h3>
          <p className="text-gray-600">Get access to our premium tools and resources to boost your marketing strategy.</p>
          <a href="/pricing" className="glossary-banner-button">
            Start Free Trial
          </a>
        </div>
      </main>

      {/* Related terms */}
      {relatedTerms.length > 0 && (
        <section className="related-terms">
          <div className="related-terms-grid">
            <div className="col-span-full mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Related Terms</h2>
            </div>
            {relatedTerms.map((relatedTerm) => (
              <Link
                key={relatedTerm.slug}
                href={`/glossary/${relatedTerm.slug}`}
                className="related-term-card"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{relatedTerm.term}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{relatedTerm.definition}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}