'use client';

import { useState, useEffect } from 'react';
import { marketingGlossary } from '@/data/marketing-glossary';
import Link from 'next/link';
import './glossary.css';

type GroupedTerms = {
  [key: string]: typeof marketingGlossary;
};

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetters, setActiveLetters] = useState<string[]>([]);
  const [currentLetter, setCurrentLetter] = useState('');

  // Group terms by first letter
  const groupedTerms = marketingGlossary.reduce((acc: GroupedTerms, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});

  // Sort terms within each letter group
  Object.keys(groupedTerms).forEach(letter => {
    groupedTerms[letter].sort((a, b) => a.term.localeCompare(b.term));
  });

  // Get available letters
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
  }, [searchTerm]);

  return (
    <div className="glossary-container py-20">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 mx-auto">Digital Marketing Glossary</h1>
      
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
              {terms.map(({ term, definition, category }) => (
                <Link
                  href={`/glossary/${encodeURIComponent(term.toLowerCase())}`}
                  key={term}
                  className="block bg-white py-8 px-4 border-b border-gray-100"
                >
                  <article>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{term}</h3>
                    <p className="text-gray-800 mb-2 line-clamp-2">{definition}</p>
                    {category && (
                      <span className="inline-block text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">
                        {category}
                      </span>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
