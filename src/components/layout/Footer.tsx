import React from 'react';
import Container from '@/components/ui/container';

interface Link {
  name: string;
  href: string;
}

interface NavigationSection {
  title: string;
  links: Link[];
}

const navigation: {
  main: NavigationSection[];
  calculators: NavigationSection[];
} = {
  main: [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Glossary', href: '/glossary' },
        { name: 'Guides', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
  ],
  calculators: [
    {
      title: 'Marketing Calculators',
      links: [
        { name: 'CPM Calculator', href: '/cpm-calculator' },
        { name: 'CTR Calculator', href: '/ctr-calculator' },
        { name: 'CPA Calculator', href: '/cpa-calculator' },
        { name: 'ROAS Calculator', href: '/roas-calculator' },
        { name: 'Bounce Rate Calculator', href: '/bounce-rate-calculator' },
      ],
    },
    {
      title: 'Creative Tools',
      links: [
        { name: 'Instagram Ad Mockup Generator', href: '/instagram-ad-mockup-generator' },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navigation.main.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {navigation.calculators.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="py-10 border-t border-gray-100">
          <div className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Arek. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
