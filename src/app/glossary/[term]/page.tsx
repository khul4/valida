import { Suspense } from 'react';
import { getTermBySlug, getTermsByCategory } from '@/content/glossary';
import GlossaryTermPage from './client-page';
import './term.css';

export const dynamic = 'force-dynamic';

export default async function TermPage({ params }: { params: { term: string } }) {
  try {
    const term = await getTermBySlug(params.term);
    let relatedTerms = [];
    
    if (term?.category) {
      const categoryTerms = await getTermsByCategory(term.category);
      relatedTerms = categoryTerms.filter(t => t.slug !== term.slug).slice(0, 3);
    }
    
    return (
      <Suspense fallback={<div>Loading term details...</div>}>
        <GlossaryTermPage 
          params={params}
          initialTerm={term || null} 
          relatedTerms={relatedTerms}
        />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading term:', error);
    return (
      <GlossaryTermPage params={params} initialTerm={null} relatedTerms={[]} />
    );
  }
}