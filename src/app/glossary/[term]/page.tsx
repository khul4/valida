'use client';

import { useRouter } from 'next/navigation';
import { marketingGlossary } from '@/data/marketing-glossary';
import Link from 'next/link';
import { use } from 'react';
import './term.css';

export default function GlossaryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const decodedTerm = decodeURIComponent(resolvedParams.term);
  
  const currentIndex = marketingGlossary.findIndex(
    (t) => t.term.toLowerCase() === decodedTerm.toLowerCase()
  );

  const term = marketingGlossary[currentIndex];

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

  // Get prev and next terms
  const prevTerm = currentIndex > 0 ? marketingGlossary[currentIndex - 1] : null;
  const nextTerm = currentIndex < marketingGlossary.length - 1 ? marketingGlossary[currentIndex + 1] : null;

  // Find related terms (same category)
  const relatedTerms = marketingGlossary
    .filter((t) => t.category === term.category && t.term !== term.term)
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

      {/* Navigation */}
      <nav className="glossary-nav">
        {prevTerm && (
          <Link
            href={`/glossary/${encodeURIComponent(prevTerm.term.toLowerCase())}`}
            className="glossary-nav-link prev"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{prevTerm.term}</span>
          </Link>
        )}
        {nextTerm && (
          <Link
            href={`/glossary/${encodeURIComponent(nextTerm.term.toLowerCase())}`}
            className="glossary-nav-link next"
          >
            <span>{nextTerm.term}</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </nav>

      {/* Main content */}
      <main className="glossary-content">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">{term.definition}</p>
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
                key={relatedTerm.term}
                href={`/glossary/${encodeURIComponent(relatedTerm.term.toLowerCase())}`}
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