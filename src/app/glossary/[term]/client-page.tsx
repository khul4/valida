'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { GlossaryTerm } from '@/types/glossary';
import './term.css';

export default function GlossaryTermPage({ 
  params, 
  initialTerm, 
  relatedTerms 
}: { 
  params: { term: string }, 
  initialTerm?: GlossaryTerm | null,
  relatedTerms?: GlossaryTerm[]
}) {
  const termSlug = params.term;
  const [term, setTerm] = useState<GlossaryTerm | null>(initialTerm || null);
  const [related, setRelated] = useState<GlossaryTerm[]>(relatedTerms || []);
  const [loading, setLoading] = useState(!initialTerm);
  
  useEffect(() => {
    if (!initialTerm) {
      // Client-side fetching if server didn't provide data
      const fetchTerm = async () => {
        try {
          const response = await fetch(`/api/glossary/term?slug=${termSlug}`);
          if (!response.ok) throw new Error('Term not found');
          const data = await response.json();
          setTerm(data.term);
          setRelated(data.related || []);
        } catch (error) {
          console.error('Error fetching term:', error);
          setTerm(null);
        } finally {
          setLoading(false);
        }
      };
      
      fetchTerm();
    }
  }, [termSlug, initialTerm]);

  if (loading) {
    return <div className="glossary-detail">Loading...</div>;
  }

  if (!term) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Term Not Found</h1>
        <p className="text-gray-700 mb-4">The term you&apos;re looking for doesn&apos;t exist in our glossary.</p>
        <Link href="/glossary" className="text-blue-600 hover:underline">
          Return to Glossary
        </Link>
      </div>
    );
  }

  return (
    <div className="glossary-detail">
      {/* Hero section with blue background */}
      <div className="glossary-hero mb-12">
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
      {related.length > 0 && (
        <section className="related-terms">
          <div className="related-terms-grid">
            <div className="col-span-full mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Related Terms</h2>
            </div>
            {related.map((relatedTerm) => (
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