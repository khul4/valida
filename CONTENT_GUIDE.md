# Content Creation Guide

Your blog now supports **MDX content creation**! You can write blog posts in Markdown format with frontmatter and they'll be automatically displayed with professional styling, table of contents, and SEO optimization.

## 📁 File Structure

```
content/
└── blog/
    ├── effective-marketing-reports.md
    ├── how-to-create-mdx-content.md
    └── your-new-post.md
```

## 🚀 Quick Start

### Method 1: Using the CLI Helper (Recommended)

```bash
npm run create-post
```

This interactive script will guide you through creating a new blog post with all the necessary frontmatter.

### Method 2: Manual Creation

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top
3. Write your content in Markdown
4. Save and test!

## 📝 Blog Post Structure

### Frontmatter (Required)

Every blog post must start with frontmatter:

```yaml
---
title: "Your Post Title"
excerpt: "Brief description for SEO and previews"
coverImage: "https://images.unsplash.com/photo-example"
date: '2026-01-07'
author:
  name: "Your Name"
  avatar: null  # or image URL
  role: "Your Role"
category: "Category Name"
tags:
  - tag1
  - tag2
readTime: "5 min read"
slug: "url-friendly-slug"
---
```

### Content (Markdown)

After the frontmatter, write your content in standard Markdown:

```markdown
# Main Title (H1)

Introduction paragraph...

## Section Heading (H2)

These create table of contents entries.

### Subsection (H3)

These also appear in the TOC.

**Bold text** and *italic text*

- Bullet points
- Another point

1. Numbered lists
2. Second item

[Links](https://example.com)

![Images](https://images.unsplash.com/photo-example)
```

## 🎨 Styling Features

### Automatic Features
- ✅ **Table of Contents** - Generated from H2 and H3 headings
- ✅ **SEO Optimization** - Meta tags from frontmatter
- ✅ **Responsive Images** - Auto-optimized for all devices
- ✅ **Professional Typography** - Beautiful prose styling
- ✅ **Author Cards** - Automatic initials if no avatar
- ✅ **Category Filtering** - Posts grouped by category
- ✅ **Related Posts** - Based on category matching

### Custom Styling Options

You can add HTML with inline styles for special elements:

```html
<div style="background-color: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1.5rem; margin: 2rem 0;">
  <p><strong>Pro Tip:</strong> This creates a highlighted callout box.</p>
</div>
```

## 🖼️ Images

### Cover Images
Use high-quality images (1200x600px minimum) from Unsplash:
```
https://images.unsplash.com/photo-ID?w=1200&h=600&fit=crop&crop=entropy&q=80
```

### Inline Images
For content images (800x400px recommended):
```
![Alt text](https://images.unsplash.com/photo-ID?w=800&h=400&fit=crop&crop=entropy&q=80)
```

## 📂 Categories

Organize your content with these categories:

- **Tutorial** - How-to guides
- **Tool Comparison** - Product reviews
- **Best Practices** - Tips and strategies  
- **Case Studies** - Real examples
- **Industry News** - Updates and trends
- **Agency Growth** - Business scaling
- **Analytics** - Data and metrics

## 🏷️ Tags

Use relevant tags for better organization:
- `marketing`, `analytics`, `reporting`
- `ai`, `automation`, `tools`
- `seo`, `content`, `strategy`
- `tutorials`, `tips`, `guides`

## 📋 Content Checklist

Before publishing, ensure your post has:

- [ ] **Compelling title** with target keywords
- [ ] **Engaging excerpt** (1-2 sentences)
- [ ] **High-quality cover image**
- [ ] **Proper headings structure** (H2, H3)
- [ ] **Author information** complete
- [ ] **Relevant category** selected
- [ ] **Appropriate tags** added
- [ ] **Estimated read time** accurate
- [ ] **Content proofread** and formatted
- [ ] **Images have alt text**

## 🚀 Publishing Process

1. **Create** your MDX file in `content/blog/`
2. **Test locally** by running `npm run dev`
3. **Visit** `/blog/your-slug` to preview
4. **Review** content and table of contents
5. **Deploy** your changes

## 💡 Content Ideas

### High-Performing Topics:
- "How to..." tutorials
- "X vs Y" comparisons  
- "Best practices for..."
- "Complete guide to..."
- Case studies and results
- Industry trend analysis
- Tool reviews and roundups

### SEO Tips:
- Include target keywords naturally
- Write for humans, not just search engines
- Use descriptive headings and subheadings
- Add relevant internal and external links
- Optimize meta descriptions (excerpts)

## 🔧 Advanced Features

### Code Blocks
```javascript
// Syntax highlighting supported
function example() {
  return "Hello, world!";
}
```

### Tables
| Feature | Basic | Pro |
|---------|-------|-----|
| Posts | 10 | Unlimited |
| Analytics | Basic | Advanced |

### Blockquotes
> Important information stands out in blockquotes

## 🆘 Troubleshooting

### Common Issues:

**Blog post not appearing?**
- Check frontmatter format
- Ensure file is in `content/blog/`
- Verify slug is unique

**Images not loading?**
- Use full HTTPS URLs
- Check Unsplash links are valid
- Ensure images are publicly accessible

**Table of contents empty?**
- Use H2 (`##`) and H3 (`###`) headings
- Include `id` attributes if needed

**Styling looks off?**
- Check for unclosed HTML tags
- Validate markdown syntax
- Test in development mode

## 📞 Need Help?

The content system automatically:
- Parses your markdown to HTML
- Generates table of contents
- Optimizes images
- Creates SEO meta tags
- Handles responsive design

Just focus on writing great content – the system handles the rest!

---

**Happy writing! 🎉**