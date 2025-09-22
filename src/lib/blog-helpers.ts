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
    avatar: string;
    role: string;
  };
  category: string;
  readTime: string;
  slug: string;
  tags: string[];
}

// Helper function to extract headings from content
export function extractTableOfContents(content: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]+>/g, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    headings.push({ id, text, level });
  }

  return headings;
}

// Helper function to find related posts
export function findRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 3) {
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

// Function to process markdown/frontmatter content
export function processBlogContent(content: string) {
  const frontMatterRegex = /---\n([\s\S]*?)\n---/;
  const match = content.match(frontMatterRegex);
  
  if (!match) return { frontMatter: {}, content };

  const frontMatterString = match[1];
  const frontMatter = frontMatterString.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      acc[key.trim()] = values.join(':').trim();
    }
    return acc;
  }, {} as Record<string, string>);

  const contentWithoutFrontMatter = content.replace(match[0], '').trim();
  
  return {
    frontMatter,
    content: contentWithoutFrontMatter
  };
}