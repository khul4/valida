import { Metadata } from 'next';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'About Us | Arek',
  description: 'Learn more about Arek and our mission to provide powerful marketing analytics and SEO tools for businesses.',
  openGraph: {
    title: 'About Us | Arek',
    description: 'Learn more about Arek and our mission to provide powerful marketing analytics and SEO tools for businesses.',
    url: 'https://www.usearek.com/about',
    siteName: 'Arek',
    type: 'website',
    images: [
      {
        url: '/arek-og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Arek - Marketing Analytics & SEO Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arek',
    creator: '@arek',
    title: 'About Us | Arek',
    description: 'Learn more about Arek and our mission to provide powerful marketing analytics and SEO tools for businesses.',
    images: ['/og-image.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Arek
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Reporting tool for SEO professionals to track, analyze, and optimize their digital campaigns.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                At Arek, we believe that every business deserves access to professional-grade marketing analytics and SEO tools. 
                Our mission is to democratize digital marketing by providing intuitive, powerful tools that help businesses of all 
                sizes make informed decisions and grow their online presence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide a comprehensive suite of marketing tools and calculators designed to help you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Track and optimize your marketing campaign performance</li>
                <li>Calculate important metrics like CTR, CPA, CPM, and ROAS</li>
                <li>Create professional ad mockups for social media platforms</li>
                <li>Generate UTM parameters for accurate campaign tracking</li>
                <li>Access in-depth SEO guides and resources</li>
                <li>Stay updated with the latest digital marketing trends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Simplicity</h3>
                  <p className="text-gray-700">
                    We make complex marketing analytics simple and accessible to everyone.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
                  <p className="text-gray-700">
                    Our tools are built on reliable formulas and industry best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously improve and add new features based on user feedback.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-700">
                    We&apos;re committed to building a community of data-driven marketers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Arek?</h2>
              <p className="text-gray-700 leading-relaxed">
                Unlike other analytics platforms that require extensive training or expensive subscriptions, Arek offers 
                free, easy-to-use tools that deliver professional results. Whether you&apos;re a solo entrepreneur, a marketing 
                team, or an agency, our platform provides the insights you need to succeed in today&apos;s competitive digital landscape.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We&apos;re always looking to improve and would love to hear from you. Whether you have questions, feedback, 
                or suggestions for new features, don&apos;t hesitate to reach out.
              </p>
              <p className="text-gray-700">
                Email us at: <a href="mailto:khulanwar@arek.pro" className="text-black hover:text-gray-800 underline">khulanwar@arek.pro</a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
