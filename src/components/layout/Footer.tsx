import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/container';

interface FooterLink {
  name: string;
  href: string;
  badge?: string;
}

interface NavigationSection {
  title: string;
  links: FooterLink[];
}

const navigation: NavigationSection[] = [
  {
    title: 'Product',
    links: [
      { name: 'SEO Reporting', href: '/product' },
      { name: 'Tools', href: '/tools' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Authors', href: '/authors' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Glossary', href: '/glossary' },
    ],
  },
  {
    title: 'Calculators',
    links: [
      { name: 'CPM Calculator', href: '/cpm-calculator' },
      { name: 'CTR Calculator', href: '/ctr-calculator' },
      { name: 'CPA Calculator', href: '/cpa-calculator' },
      { name: 'ROAS Calculator', href: '/roas-calculator' },
      { name: 'Bounce Rate', href: '/bounce-rate-calculator' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { name: 'Instagram Ad Mockup', href: '/instagram-ad-mockup-generator' },
      { name: 'TikTok Ad Mockup', href: '/tiktok-ad-mockup-generator' },
      { name: 'YouTube Ad Mockup', href: '/youtube-ad-mockup-generator' },
      { name: 'UTM Builder', href: '/utm-builder' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

const socialLinks = [
  // {
  //   name: 'Twitter',
  //   href: 'https://twitter.com/arek',
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //     </svg>
  //   ),
  // },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/arekpro/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-black mb-4">
                  {section.title}
                </h3>
                <ul role="list" className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-black transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-black text-white rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                  <svg
                width="25"
                height="25"
                viewBox="0 0 279 279"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.122574"
                  width="278.849"
                  height="278.849"
                  rx="50"
                  fill="#000000"
                />
                <path
                  d="M106.579 76.8025C114.629 60.8647 134.076 54.4705 150.013 62.5207C165.951 70.5709 172.345 90.0171 164.295 105.955L115.399 202.76C107.349 218.697 87.9029 225.092 71.9651 217.041C56.0272 208.991 49.633 189.545 57.6832 173.607L106.579 76.8025Z"
                  fill="white"
                />
                <circle cx="192.058" cy="185.693" r="39.0658" fill="white" />
              </svg>
                </div>
                <span className="font-semibold text-black">Arek</span>
              </Link>
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Arek. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-black transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        
        </div>
      </Container>
    </footer>
  );
}
