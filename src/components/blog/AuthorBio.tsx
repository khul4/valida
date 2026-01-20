import React from 'react';
import { AUTHOR_BIO } from '@/lib/author-bio';
import Image from 'next/image';
import Link from 'next/link';

interface AuthorBioProps {
  className?: string;
  authorName?: string;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({ className = "", authorName }) => {
  // Convert author name to slug
  const authorSlug = (authorName || AUTHOR_BIO.name)
    .toLowerCase()
    .replace(/\s+/g, '-');

  return (
    <section className={`border-t pt-8 mt-12 ${className}`}>
      <div className="flex items-start space-x-4">
        <Link href={`/author/${authorSlug}`}>
          <Image 
            src={AUTHOR_BIO.avatar} 
            alt={`${AUTHOR_BIO.name}, ${AUTHOR_BIO.role}`}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          />
        </Link>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            About <Link href={`/author/${authorSlug}`} className="hover:text-blue-600 transition-colors">{AUTHOR_BIO.name}</Link>
          </h3>
          <p className="text-sm text-gray-600 mb-3">{AUTHOR_BIO.role}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {AUTHOR_BIO.bio}
          </p>
          <div className="flex space-x-4">
            <a 
              href={AUTHOR_BIO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Connect on LinkedIn
            </a>
            <a 
              href={AUTHOR_BIO.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};