import { Suspense } from 'react';
import { getTermBySlug, getTermsByCategory } from '@/content/glossary';
import type { GlossaryTerm } from '@/types/glossary';
import GlossaryTermPage from './client-page';
import './term.css';

export const dynamic = 'force-dynamic';

export default async function TermPage({ params }: { params: Promise<{ term: string }> }) {
  try {
    // Await the params first
    const resolvedParams = await params;
    const termSlug = resolvedParams.term;
    
    const term = await getTermBySlug(termSlug);
    let relatedTerms: GlossaryTerm[] = [];
    
    if (term?.category) {
      const categoryTerms = await getTermsByCategory(term.category);
      relatedTerms = categoryTerms.filter(t => t.slug !== term.slug).slice(0, 3);
    }
    
    return (
      <Suspense fallback={<div>Loading term details...</div>}>
        <GlossaryTermPage 
          params={{term: termSlug}}
          initialTerm={term || null} 
          relatedTerms={relatedTerms}
        />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading term:', error);
    return (
      <GlossaryTermPage params={{term: (await params).term}} initialTerm={null} relatedTerms={[]} />
    );
  }
}