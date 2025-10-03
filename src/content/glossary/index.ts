import { GlossaryTerm, GlossaryCategory } from '@/types/glossary';
import { cache } from 'react';
import matter from 'gray-matter';

// Import markdown content
import contentMarketing from './content-marketing.md';
import abTesting from './ab-testing.md';

// Categories configuration
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

export function getCategoryBySlug(slug: string): GlossaryCategory | undefined {
  return glossaryCategories.find((cat: GlossaryCategory) => cat.slug === slug);
}

// This is a build-time function that will be executed during static generation
export const getGlossaryData = cache(async () => {
  // Using webpack's require.context to get all markdown files at build time
  const glossaryData: { [key: string]: string } = {
    'content-marketing': contentMarketing,
    'ab-testing': abTesting
    // Add more terms here as they're created
  };

  const terms = Object.entries(glossaryData).map(([slug, content]) => {
    // Parse frontmatter and content
    const { data, content: markdownContent } = matter(content);
    
    // Get the sections by splitting on h2 headers
    const sections = markdownContent
      .split(/^## /m)
      .map((section: string) => section.trim())
      .filter(Boolean)
      .map((section: string) => {
        // Check if the section contains a list
        const isList = section.includes('\n- ');
        
        if (isList) {
          const [title, ...items] = section.split('\n');
          return {
            title,
            type: 'list' as const,
            items: items
              .filter((item: string) => item.startsWith('- '))
              .map((item: string) => item.slice(2).trim())
          };
        }
        
        return {
          type: 'text' as const,
          content: section
        };
      });

    return {
      term: data.term,
      slug,
      definition: data.definition,
      category: data.category,
      content: {
        sections
      }
    } as GlossaryTerm;
  });

  return terms.sort((a: GlossaryTerm, b: GlossaryTerm) => a.term.localeCompare(b.term));
});

export const getTermBySlug = cache(async (slug: string): Promise<GlossaryTerm | undefined> => {
  const terms = await getGlossaryData();
  return terms.find((term: GlossaryTerm) => term.slug === slug);
});

export const getAllTerms = cache(async (): Promise<GlossaryTerm[]> => {
  return getGlossaryData();
});

export const getTermsByCategory = cache(async (category: string): Promise<GlossaryTerm[]> => {
  const terms = await getGlossaryData();
  return terms.filter((term: GlossaryTerm) => term.category === category);
});

export const getTermsGroupedByLetter = cache(async (): Promise<{ [key: string]: GlossaryTerm[] }> => {
  const terms = await getGlossaryData();
  return terms.reduce((acc: { [key: string]: GlossaryTerm[] }, term: GlossaryTerm) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});
});