'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { GlossaryTerm } from '@/types/glossary';

type GroupedTerms = {
  [key: string]: GlossaryTerm[];
};

type GlossaryContentProps = {
  initialGroupedTerms: GroupedTerms;
};

export default function GlossaryContent({ initialGroupedTerms }: GlossaryContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLetter, setCurrentLetter] = useState('');
  const [groupedTerms] = useState<GroupedTerms>(initialGroupedTerms);
  const availableLetters = Object.keys(groupedTerms).sort();

  // Filter terms based on search
  const filteredGroupedTerms = Object.entries(groupedTerms).reduce((acc: GroupedTerms, [letter, terms]) => {
    const filteredTerms = terms.filter(term =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredTerms.length > 0) {
      acc[letter] = filteredTerms;
    }
    return acc;
  }, {});

  // Handle intersection observer for letter sections
  useEffect(() => {
    const observers = Object.keys(groupedTerms).map(letter => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setCurrentLetter(letter);
            }
          });
        },
        { threshold: 0.1, rootMargin: '-80px 0px 0px 0px' }
      );

      const element = document.getElementById(`letter-${letter}`);
      if (element) {
        observer.observe(element);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [searchTerm, groupedTerms]);

  return (
    <>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search terms..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Alphabet Navigation */}
      <nav className="alphabet-nav">
        <div className="alphabet-nav-list">
          {availableLetters.map(letter => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className={`alphabet-link ${currentLetter === letter ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {letter}
            </a>
          ))}
        </div>
      </nav>

      {/* Terms List */}
      <div>
        {Object.entries(filteredGroupedTerms).sort().map(([letter, terms]) => (
          <section key={letter} id={`letter-${letter}`} className="letter-section">
            <h2 className="letter-heading">{letter}</h2>
            <div className="space-y-6">
              {terms.map((term) => (
                <Link
                  href={`/glossary/${term.slug}`}
                  key={term.slug}
                  className="block bg-white py-6 sm:py-8 px-3 sm:px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <article>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{term.term}</h3>
                    <p className="text-gray-800 mb-2 line-clamp-2 text-sm sm:text-base leading-relaxed">{term.definition}</p>
                    {term.category && (
                      <span className="inline-block text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">
                        {term.category}
                      </span>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}