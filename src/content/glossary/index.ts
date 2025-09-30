import { GlossaryTerm, GlossaryCategory } from '@/types/glossary';
import { term as abTesting } from './ab-testing';
import { term as contentMarketing } from './content-marketing';
// Import other terms here as they're added

export const glossaryCategories: GlossaryCategory[] = [
  {
    name: "Testing & Optimization",
    slug: "testing-optimization",
    description: "Tools and methods for optimizing marketing performance"
  },
  {
    name: "Analytics",
    slug: "analytics",
    description: "Measurement and analysis of marketing data"
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
    description: "Creation and distribution of valuable content"
  },
  {
    name: "SEO",
    slug: "seo",
    description: "Search engine optimization techniques and strategies"
  },
  {
    name: "Social Media",
    slug: "social-media",
    description: "Social platform marketing and engagement"
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    description: "Email campaign strategies and metrics"
  }
];

// All glossary terms
export const glossaryTerms: GlossaryTerm[] = [
  abTesting,
  contentMarketing,
  // Add other terms here as they're created
];

// Helper functions
export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter(term => term.category === category);
}

export function getAllTermsSorted(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
}

export function getCategoryBySlug(slug: string): GlossaryCategory | undefined {
  return glossaryCategories.find(cat => cat.slug === slug);
}

// Group terms by first letter for alphabet navigation
export function getTermsGroupedByLetter(): { [key: string]: GlossaryTerm[] } {
  return getAllTermsSorted().reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as { [key: string]: GlossaryTerm[] });
}