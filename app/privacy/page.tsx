import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Fargeaux',
  description: 'Fargeaux privacy policy. Learn how we protect your data and comply with GDPR.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 mb-12 border-b border-slate-200">
          <h1 className="font-poppins font-800 text-5xl md:text-6xl text-foreground mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Fargeaux ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">2.1 Information You Provide</h3>
                <p className="text-slate-700 leading-relaxed">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 mt-2 ml-2">
                  <li>Account registration information (name, email, password)</li>
                  <li>Profile information (country, learning preferences)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Contact information when you reach out to our support team</li>
                  <li>Feedback and survey responses</li>
                </ul>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-slate-700 leading-relaxed">
                  We automatically collect certain information when you use our Service:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 mt-2 ml-2">
                  <li>Device information (device type, operating system, unique identifiers)</li>
                  <li>Usage data (modules accessed, time spent learning, quiz results)</li>
                  <li>Location information (if permitted by your device settings)</li>
                  <li>IP address and analytics data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4 ml-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Personalize your learning experience with adaptive content</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze usage patterns to improve our Service</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We do not sell, trade, or rent your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4 ml-2">
              <li>Service providers who assist in operating our Service (hosting, analytics, payment processing)</li>
              <li>Law enforcement when required by law</li>
              <li>Other parties with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4 ml-2">
              <li>Right to access your data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to delete your data</li>
              <li>Right to data portability</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@fargeaux.com.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              7. GDPR Compliance
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We comply with the General Data Protection Regulation (GDPR) for users in the European Union. We only process personal data with a lawful basis, provide transparent privacy notices, and respect your rights as outlined above.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our Service is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information and terminate the child's account.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date. Your continued use of the Service constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              10. Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mt-4 border border-slate-200">
              <p className="text-slate-700"><strong>Email:</strong> privacy@fargeaux.com</p>
              <p className="text-slate-700 mt-2"><strong>Address:</strong> London, United Kingdom</p>
              <p className="text-slate-700 mt-2"><strong>Response time:</strong> We aim to respond within 30 days</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
