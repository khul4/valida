import { Metadata } from 'next';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Authors | Arek',
  description: 'Meet the expert team behind Arek\'s marketing insights and SEO content.',
};

export default function AuthorPage() {
  const authors = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Content & SEO Strategy',
      image: '/testimonials/user-1.jpg',
      bio: 'Sarah has over 10 years of experience in SEO and content marketing. She has helped hundreds of businesses improve their online visibility and organic traffic. Her expertise spans technical SEO, content strategy, and data analytics.',
      expertise: ['SEO Strategy', 'Content Marketing', 'Analytics', 'Link Building'],
      social: {
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'Michael Chen',
      role: 'Senior Marketing Analyst',
      image: '/testimonials/user-2.jpg',
      bio: 'Michael specializes in marketing analytics and performance optimization. With a background in data science and digital marketing, he helps businesses make data-driven decisions to maximize their ROI.',
      expertise: ['Marketing Analytics', 'PPC Campaigns', 'Conversion Optimization', 'A/B Testing'],
      social: {
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media & Ad Strategy Expert',
      image: '/testimonials/user-3.jpg',
      bio: 'Emily is a certified social media strategist with extensive experience in paid advertising across Facebook, Instagram, TikTok, and YouTube. She helps brands create engaging content and optimize their ad spend.',
      expertise: ['Social Media Marketing', 'Paid Advertising', 'Creative Strategy', 'Influencer Marketing'],
      social: {
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'David Thompson',
      role: 'Technical SEO Specialist',
      image: '/testimonials/user-1.jpg',
      bio: 'David is a technical SEO expert who focuses on website performance, crawlability, and indexation. He has worked with enterprise clients to solve complex technical SEO challenges and improve site architecture.',
      expertise: ['Technical SEO', 'Site Speed Optimization', 'Schema Markup', 'Core Web Vitals'],
      social: {
        twitter: '#',
        linkedin: '#',
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Authors
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our team of marketing professionals and SEO experts are dedicated to providing you with 
              actionable insights, comprehensive guides, and the latest industry trends.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Editorial Standards</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every piece of content on Arek is created by experienced marketing professionals who have real-world 
              experience in their respective fields. Our authors follow strict editorial guidelines to ensure that all 
              information is accurate, up-to-date, and actionable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in transparency and expertise. Each article is written by industry practitioners who have 
              implemented the strategies they write about, tested the tools they recommend, and achieved measurable 
              results for themselves and their clients.
            </p>
          </div>

          {/* Authors Grid */}
          <div className="space-y-12">
            {authors.map((author, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Author Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={author.image}
                          alt={author.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/testimonials/user-1.jpg';
                          }}
                        />
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {author.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-4">
                        {author.role}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {author.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {author.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-4">
                        <a
                          href={author.social.twitter}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label={`${author.name} on Twitter`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a
                          href={author.social.linkedin}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label={`${author.name} on LinkedIn`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contribute Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 md:p-12 mt-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Contributing?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for experienced marketing professionals and SEO experts to join our team of 
              contributors. If you have valuable insights to share, we&apos;d love to hear from you.
            </p>
            <a
              href="mailto:khulanwar@arek.pro"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Browse Content */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Content
            </h2>
            <p className="text-gray-600 mb-6">
              Check out our latest articles, guides, and resources written by our expert team.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Our Blog
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
