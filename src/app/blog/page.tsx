import Container from '@/components/ui/container';
import { getAllBlogPosts, getAllCategories } from '@/lib/blog-server';
import BlogGrid from './BlogGrid';

export default async function BlogIndex() {
  try {
    const [blogPosts, categoriesData] = await Promise.all([
      getAllBlogPosts(),
      getAllCategories()
    ]);
    
    const categories = ['all', ...categoriesData];

    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <Container>
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-medium tracking-tight mb-6">
              Latest Insights
            </h1>
            <p className="text-xl text-gray-600">
              Discover the latest trends, tips, and strategies in marketing analytics and reporting
            </p>
          </div>

          {/* Blog Posts with Interactive Filtering */}
          <BlogGrid blogPosts={blogPosts} categories={categories} />
        </Container>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog data:', error);
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-medium tracking-tight mb-6">
              Blog
            </h1>
            <p className="text-xl text-red-600">
              Sorry, we couldn&apos;t load the blog posts. Please try again later.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

