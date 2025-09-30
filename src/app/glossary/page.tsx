import { Suspense } from 'react';
import { getTermsGroupedByLetter } from '@/content/glossary';
import GlossaryContent from './GlossaryContent';
import './glossary.css';

export const dynamic = 'force-dynamic';

export default async function GlossaryPage() {
  const groupedTerms = await getTermsGroupedByLetter();
  
  return (
    <div className="glossary-container">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Digital Marketing Glossary</h1>
      
      <Suspense fallback={<div>Loading glossary terms...</div>}>
        <GlossaryContent initialGroupedTerms={groupedTerms} />
      </Suspense>
    </div>
  );
}