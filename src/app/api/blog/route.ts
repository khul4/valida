import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogPosts, getBlogPostBySlug, getAllCategories } from '@/lib/blog-server';

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