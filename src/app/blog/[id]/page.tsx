import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-server';
import { findRelatedPosts } from '@/lib/blog-helpers';
import BlogPostClient from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.id);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  const baseUrl = 'https://www.usearek.com'; // You might want to move this to an env var
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonicalUrl,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
      authors: [post.author.name],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.id);
  
  if (!post) {
    notFound();
  }
  
  const allPosts = await getAllBlogPosts();
  const relatedPosts = findRelatedPosts(post, allPosts, 3);
  
  return (
    <BlogPostClient 
      blogPost={post} 
      relatedPosts={relatedPosts} 
    />
  );
}
