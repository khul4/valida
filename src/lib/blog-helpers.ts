// Client-side types and helpers for blog content

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

// Client-side API calls to fetch blog content
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  try {
    const response = await fetch('/api/blog');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/blog?action=post&slug=${encodeURIComponent(slug)}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch blog post');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getAllCategories(): Promise<string[]> {
  try {
    const response = await fetch('/api/blog?action=categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Helper function to extract headings from content for table of contents
export function extractTableOfContents(content: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const headingRegex = /<h([2-6])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/h\1>/g;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const existingId = match[2];
    const text = match[3].replace(/<[^>]+>/g, '').trim();
    const id = existingId || text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    if (text) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

// Helper function to find related posts
export function findRelatedPosts(currentPost: BlogPost, allPosts: BlogPostMeta[], limit = 3) {
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category)
    )
    .slice(0, limit);
}

// Helper to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Create a new blog post template
export function createBlogPostTemplate(title: string, slug?: string): string {
  const postSlug = slug || title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
    
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `---
title: "${title}"
excerpt: "Add a compelling excerpt for your blog post here."
coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=entropy&q=80"
date: '${currentDate}'
author:
  name: "Your Name"
  avatar: null
  role: "Your Role"
category: "General"
tags:
  - tag1
  - tag2
readTime: "5 min read"
slug: "${postSlug}"
---

# ${title}

Your blog content goes here. You can use:

## Headings

This creates a table of contents entry.

### Subheadings

These also appear in the table of contents.

## Lists

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Code

\`\`\`javascript
console.log("Hello, world!");
\`\`\`

## Links and Images

[Link to somewhere](https://example.com)

![Alt text](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&crop=entropy&q=80)

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Feature 1 | Description 1 | ✅ |
| Feature 2 | Description 2 | 🚧 |
`;
}