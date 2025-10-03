import { Suspense } from 'react';
import { getTermsGroupedByLetter } from '@/content/glossary';
import GlossaryContent from './GlossaryContent';
import './glossary.css';

export const dynamic = 'force-dynamic';

export default async function GlossaryPage() {
  const groupedTerms = await getTermsGroupedByLetter();
  
  return (
    <div className="glossary-container">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 px-2 sm:px-0">Digital Marketing Glossary</h1>
      
      <Suspense fallback={<div className="text-center py-8">Loading glossary terms...</div>}>
        <GlossaryContent initialGroupedTerms={groupedTerms} />
      </Suspense>
    </div>
  );
}