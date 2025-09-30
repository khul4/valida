import { GlossaryTerm } from '@/types/glossary';
import matter from 'gray-matter';

export function parseMarkdownToGlossaryTerm(markdown: string): GlossaryTerm {
  const { data, content } = matter(markdown);
  
  // Get the sections by splitting on h2 headers
  const sections = content
    .split(/^## /m)
    .map((section: string) => section.trim())
    .filter((section: string): boolean => Boolean(section))
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
    slug: data.slug || data.term.toLowerCase().replace(/\s+/g, '-'),
    definition: data.definition,
    category: data.category,
    content: {
      sections
    }
  };
}