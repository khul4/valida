import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://usearek.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Dynamically get all calculator pages from app directory
  const appDir = path.join(process.cwd(), 'src', 'app')
  const calculatorPages: MetadataRoute.Sitemap = []

  try {
    const entries = fs.readdirSync(appDir, { withFileTypes: true })
    
    entries.forEach((entry) => {
      if (entry.isDirectory() && !entry.name.startsWith('_') && !['api', 'tools', 'blog', 'glossary'].includes(entry.name)) {
        const pagePath = path.join(appDir, entry.name, 'page.tsx')
        if (fs.existsSync(pagePath)) {
          calculatorPages.push({
            url: `${baseUrl}/${entry.name}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          })
        }
      }
    })
  } catch (error) {
    console.error('Error reading app directory:', error)
  }

  // Dynamically get all blog posts
  const blogPages: MetadataRoute.Sitemap = []

  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (fs.existsSync(blogDir)) {
      const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'))
      
      blogFiles.forEach((file) => {
        const filePath = path.join(blogDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(fileContent)
        
        if (data.slug) {
          blogPages.push({
            url: `${baseUrl}/blog/${data.slug}`,
            lastModified: data.date ? new Date(data.date) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          })
        }
      })
    }
  } catch (error) {
    console.error('Error reading blog directory:', error)
  }

  return [...staticPages, ...calculatorPages, ...blogPages]
}
