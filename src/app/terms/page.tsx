import { Metadata } from 'next';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Arek',
  description: 'Terms and conditions for using Arek marketing analytics and SEO tools.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              Last updated: January 21, 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Arek (&quot;the Service&quot;), you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to use the tools and resources provided by Valida for personal and commercial purposes, 
                subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You may not modify or copy the materials without permission</li>
                <li>You may not use the materials for any commercial purpose without attribution</li>
                <li>You may not attempt to reverse engineer any software contained on Valida</li>
                <li>You may not remove any copyright or other proprietary notations from the materials</li>
                <li>You may not transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Arek at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions 
                under your password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service and its original content (excluding content provided by users), features, and functionality are and will 
                remain the exclusive property of Arek and its licensors. The Service is protected by copyright, trademark, and other 
                laws of both the United States and foreign countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, 
                or other material. You are responsible for the content that you post on or through the Service, including its legality, 
                reliability, and appropriateness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To exploit, harm, or attempt to exploit or harm minors in any way</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate Valida, a Valida employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Analytics and Calculators</h2>
              <p className="text-gray-700 leading-relaxed">
                The calculators and analytics tools provided on our Service are for informational purposes only. While we strive for 
                accuracy, we make no warranties about the completeness, reliability, or accuracy of the calculations. Any reliance you 
                place on such information is strictly at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Arek, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any 
                indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, 
                use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. 
                The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, 
                implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will 
                be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: <a href="mailto:khulanwar@arek.pro" className="text-black hover:text-gray-800 underline">khulanwar@arek.pro</a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
