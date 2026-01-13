import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { NextRequest, NextResponse } from 'next/server';
import { AUTHOR_BIO, generateAuthorSchema } from '@/lib/author-bio';

// Types for our blog content
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string | null;
    role: string;
  };
  category: string;
  readTime: string;
  slug: string;
  tags: string[];
  schema?: any; // Schema.org structured data
}

export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string | null;
  };
  category: string;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

// Helper function to add IDs to headings
function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(/<h([2-6])([^>]*)>([^<]+)<\/h\1>/g, (match, level, attributes, text) => {
    // Generate ID from text
    const id = text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    // Check if ID already exists in attributes
    if (attributes.includes('id=')) {
      return match; // Return unchanged if ID already exists
    }
    
    return `<h${level}${attributes} id="${id}">${text}</h${level}>`;
  });
}

// Get all blog post files
function getBlogPostFiles(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Get all blog posts metadata (for listing page)
async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const files = getBlogPostFiles();
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const post = await getBlogPostBySlug(slug);
      if (!post) return null;
      
      return {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        coverImage: post.coverImage,
        date: post.date,
        author: {
          name: post.author.name,
          avatar: post.author.avatar
        },
        category: post.category,
        slug: post.slug
      };
    })
  );
  
  return posts
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single blog post by slug
async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const files = getBlogPostFiles();
    const fileName = files.find(file => {
      const fileSlug = file.replace(/\.(md|mdx)$/, '');
      return fileSlug === slug;
    });
    
    if (!fileName) return null;
    
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content);
    let htmlContent = processedContent.toString();
    
    // Add IDs to headings manually
    htmlContent = addHeadingIds(htmlContent);
    
    // Generate ID from filename
    const id = fileName.replace(/\.(md|mdx)$/, '');
    
    // Calculate read time (approximate)
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    
    return {
      id,
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: htmlContent,
      coverImage: data.coverImage || '',
      date: data.date || new Date().toISOString(),
      author: {
        name: data.author?.name || AUTHOR_BIO.name,
        avatar: data.author?.avatar || AUTHOR_BIO.avatar,
        role: data.author?.role || AUTHOR_BIO.role
      },
      category: data.category || 'General',
      readTime: data.readTime || `${readTime} min read`,
      tags: data.tags || [],
      schema: data.schema || null
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get all unique categories
async function getAllCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  return categories.sort();
}

// API route to get all blog posts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const action = searchParams.get('action') || 'list';
  
  try {
    if (action === 'post' && slug) {
      // Get single post
      const post = await getBlogPostBySlug(slug);
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    } else if (action === 'categories') {
      // Get all categories
      const categories = await getAllCategories();
      return NextResponse.json(categories);
    } else {
      // Get all posts (default)
      const posts = await getAllBlogPosts();
      return NextResponse.json(posts);
    }
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}