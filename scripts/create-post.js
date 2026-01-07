#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function createBlogPostTemplate(data) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `---
title: "${data.title}"
excerpt: "${data.excerpt}"
coverImage: "${data.coverImage}"
date: '${currentDate}'
author:
  name: "${data.author}"
  avatar: null
  role: "${data.role}"
category: "${data.category}"
tags:
  - ${data.tags.split(',').map(tag => tag.trim()).join('\n  - ')}
readTime: "${data.readTime}"
slug: "${data.slug}"
---

# ${data.title}

${data.content || 'Start writing your blog post content here...'}

## Introduction

Write an engaging introduction that hooks your readers.

## Main Content

### Subheading 1

Your content goes here.

### Subheading 2

More content here.

## Conclusion

Wrap up your post with key takeaways and next steps.
`;
}

async function createNewPost() {
  console.log('🚀 Creating a new blog post...\n');
  
  const title = await question('📝 Post title: ');
  const excerpt = await question('📄 Brief excerpt (1-2 sentences): ');
  const author = await question('👤 Author name: ');
  const role = await question('💼 Author role: ');
  const category = await question('🏷️  Category (Tutorial, Tool Comparison, Best Practices, etc.): ');
  const tags = await question('🏷️  Tags (comma-separated): ');
  const readTime = await question('⏱️  Estimated read time (e.g., "5 min read"): ');
  
  const defaultSlug = createSlug(title);
  const slug = await question(`🔗 URL slug (default: ${defaultSlug}): `) || defaultSlug;
  
  const defaultImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=entropy&q=80';
  const coverImage = await question(`🖼️  Cover image URL (default: stock image): `) || defaultImage;
  
  const postData = {
    title,
    excerpt,
    author,
    role,
    category,
    tags,
    readTime,
    slug,
    coverImage
  };
  
  const template = createBlogPostTemplate(postData);
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const filename = `${slug}.md`;
  const filepath = path.join(contentDir, filename);
  
  // Ensure content directory exists
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  if (fs.existsSync(filepath)) {
    console.log(`\n❌ File ${filename} already exists!`);
    const overwrite = await question('Overwrite? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('✅ Cancelled.');
      rl.close();
      return;
    }
  }
  
  fs.writeFileSync(filepath, template);
  
  console.log(`\n✅ Created new blog post: ${filename}`);
  console.log(`📁 Location: content/blog/${filename}`);
  console.log(`🌐 URL: /blog/${slug}`);
  console.log('\n📝 Next steps:');
  console.log('1. Open the file and add your content');
  console.log('2. Replace the placeholder sections with your content');
  console.log('3. Test locally by visiting the URL');
  console.log('4. Deploy when ready!\n');
  
  rl.close();
}

createNewPost().catch(console.error);