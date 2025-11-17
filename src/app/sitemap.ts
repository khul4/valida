import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arek.pro'

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

  return [...staticPages, ...calculatorPages]
}
