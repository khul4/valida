# Author Pages System

This document explains how the author pages work in the Arek blog.

## Overview

The author system allows:
- **Individual author pages** showing all posts by that author (`/author/[slug]`)
- **Team authors page** showing all authors on the team (`/authors`)
- **Clickable author links** in blog posts that navigate to author pages

## File Structure

```
src/
├── app/
│   ├── author/
│   │   └── [slug]/
│   │       └── page.tsx          # Individual author page (dynamic route)
│   └── authors/
│       └── page.tsx               # Team page listing all authors
├── components/
│   └── blog/
│       └── AuthorBio.tsx          # Author bio component (with clickable author link)
└── lib/
    ├── authors.ts                 # Central author data management
    └── author-bio.ts              # Legacy author bio data (still used)
```

## How It Works

### 1. Individual Author Pages (`/author/khul-anwar`)

When a user clicks on an author's name in a blog post:
1. They're taken to `/author/[slug]` where slug is the author's name in lowercase with dashes
2. The page displays:
   - Author profile (photo, bio, expertise, social links)
   - All blog posts written by that author
   - Links back to the blog

**Example:** 
- Author name: "Khul Anwar"
- URL: `/author/khul-anwar`

### 2. Team Authors Page (`/authors`)

Shows all authors on the team with their profiles and a contributor invitation section.

### 3. Clickable Author Links

Author names are clickable in:
- **Blog post headers** - Author name and avatar link to author page
- **Author bio section** - Author name at bottom of blog posts links to author page

## Adding a New Author

To add a new author, edit `/src/lib/authors.ts`:

```typescript
export const AUTHORS_DATA: Record<string, Author> = {
  'khul-anwar': {
    name: 'Khul Anwar',
    slug: 'khul-anwar',
    avatar: 'https://...',
    role: 'SaaS Founder & Digital Marketing Strategist',
    bio: 'Short bio...',
    fullBio: 'Longer bio for author page...',
    expertise: ['SEO Strategy', 'SaaS Marketing', 'Content Marketing'],
    social: {
      linkedin: 'https://www.linkedin.com/in/khulanwar/',
      twitter: 'https://x.com/khulanwar'
    }
  },
  // Add new author here:
  'jane-doe': {
    name: 'Jane Doe',
    slug: 'jane-doe',
    avatar: '/path/to/avatar.jpg',
    role: 'Content Marketing Specialist',
    bio: 'Jane specializes in...',
    fullBio: 'Extended bio...',
    expertise: ['Content Strategy', 'Email Marketing'],
    social: {
      linkedin: 'https://linkedin.com/in/janedoe',
      twitter: 'https://x.com/janedoe'
    }
  }
};
```

### Important Notes:

1. **Slug must match author name in blog posts**: The slug should be the author's name converted to lowercase with spaces replaced by dashes.

2. **Blog post frontmatter**: Make sure your blog posts have the correct author name:
   ```yaml
   author:
     "@type": "Person"
     name: "Khul Anwar"
   ```

3. **Author matching**: The system automatically converts author names to slugs when creating links, so "Khul Anwar" becomes "khul-anwar".

## Navigation Links

Author pages are accessible through:
- Footer → Company → Authors (`/authors`)
- Any blog post → Click author name or avatar → Individual author page (`/author/[slug]`)
- Author bio section at bottom of blog posts

## SEO Optimization

Each author page includes:
- Proper metadata (title, description)
- Author profile information
- List of all posts by that author with images and excerpts
- Social media links
- Internal linking to blog posts

## Customization

### Changing Author Bio Component

Edit `/src/components/blog/AuthorBio.tsx` to customize how author information appears at the bottom of blog posts.

### Changing Team Page

Edit `/src/app/authors/page.tsx` to customize the team authors listing page.

### Changing Individual Author Page Layout

Edit `/src/app/author/[slug]/page.tsx` to customize how individual author pages look.
