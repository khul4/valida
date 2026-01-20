import { Metadata } from 'next';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Arek',
  description: 'Privacy policy for Arek - learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: January 21, 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Arek. We respect your privacy and are committed to protecting your personal data. This privacy policy 
                will inform you about how we look after your personal data when you visit our website and tell you about your privacy 
                rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services</li>
                <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the 
                following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. 
                Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your 
                browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you 
                may not be able to use some portions of our Service.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li><strong>Essential Cookies:</strong> Required for the operation of our website</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method 
                of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, 
                we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including 
                for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention 
                period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of 
                harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data 
                and whether we can achieve those purposes through other means.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Data Protection Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following data protection rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data</li>
                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions</li>
                <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions</li>
                <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We may employ third-party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), provide the 
                Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used. These third 
                parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose 
                or use it for any other purpose.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
                <li><strong>PostHog:</strong> For product analytics and user behavior tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information, including personal data, may be transferred to — and maintained on — computers located outside of 
                your state, province, country or other governmental jurisdiction where the data protection laws may differ from those 
                of your jurisdiction. We will take all steps reasonably necessary to ensure that your data is treated securely and in 
                accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information 
                from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with 
                personal data, please contact us. If we become aware that we have collected personal data from children without 
                verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-700 mt-2">
                Email: <a href="mailto:khulanwar@arek.pro" className="text-blue-600 hover:text-blue-700 underline">khulanwar@arek.pro</a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
