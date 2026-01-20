import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog-server';
import { AUTHORS_DATA } from '@/lib/authors';

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const author = AUTHORS_DATA[resolvedParams.slug];
  
  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }
  
  return {
    title: `${author.name} - Author at Arek`,
    description: `Read articles by ${author.name}, ${author.role}. ${author.bio}`,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const resolvedParams = await params;
  const author = AUTHORS_DATA[resolvedParams.slug];
  
  if (!author) {
    notFound();
  }
  
  // Get all blog posts and filter by this author
  const allPosts = await getAllBlogPosts();
  const authorPosts = allPosts.filter(post => 
    post.author.name.toLowerCase() === author.name.toLowerCase()
  );
  
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Author Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Author Info */}
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {author.name}
                </h1>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  {author.role}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {author.fullBio}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise:</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Author's Posts */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Articles by {author.name} ({authorPosts.length})
            </h2>
          </div>

          {authorPosts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <p className="text-gray-600">No articles published yet.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {authorPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex flex-col md:flex-row">
                      {/* Post Image */}
                      <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="p-6 md:p-8 flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <time className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="text-blue-600 font-medium text-sm hover:text-blue-700">
                          Read article →
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
