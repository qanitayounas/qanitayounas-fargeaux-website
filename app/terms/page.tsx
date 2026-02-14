import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Fargeaux',
  description: 'Fargeaux Terms of Service. Read our usage terms and conditions.',
}

export default function TermsPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 mb-12 border-b border-slate-200">
          <h1 className="font-poppins font-800 text-5xl md:text-6xl text-foreground mb-4">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User" or "you") and Fargeaux ("we," "us," "our," or "Company"). By accessing and using our mobile application and website (collectively, the "Service"), you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our Service.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              2. Use License
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to use our Service solely for personal, educational purposes. You agree not to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4 ml-2">
              <li>Reproduce, duplicate, copy, or sell content from the Service</li>
              <li>Attempt to reverse engineer or decompile the Service</li>
              <li>Remove or obscure any proprietary notices</li>
              <li>Access the Service through unauthorized means</li>
              <li>Use the Service for commercial purposes without permission</li>
              <li>Harass or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              3. Account Responsibilities
            </h2>
            <p className="text-slate-700 leading-relaxed">
              When you create an account with Fargeaux, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4 ml-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Not share your account with others</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              4. Subscription and Payment
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">4.1 Free Trial</h3>
                <p className="text-slate-700 leading-relaxed">
                  We offer a 24-hour free trial with full access to all features. Your free trial will automatically end after 24 hours, and you will not be charged unless you explicitly upgrade to a paid plan.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">4.2 Paid Subscriptions</h3>
                <p className="text-slate-700 leading-relaxed">
                  By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis. All charges are non-refundable except as expressly provided in these Terms.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">4.3 Cancellation</h3>
                <p className="text-slate-700 leading-relaxed">
                  You may cancel your subscription at any time through your account settings. Cancellation is effective at the end of your current billing cycle. We offer a 30-day money-back guarantee for first-time subscribers.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">4.4 Price Changes</h3>
                <p className="text-slate-700 leading-relaxed">
                  We reserve the right to change subscription prices with 30 days' written notice. Price changes will take effect at your next billing cycle.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              5. Intellectual Property Rights
            </h2>
            <p className="text-slate-700 leading-relaxed">
              All content, features, and functionality (including but not limited to software, text, graphics, logos, flashcards, and maps) are owned by Fargeaux, our licensors, or other providers of such material and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              6. User Content
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you submit feedback, suggestions, or other content ("User Content"), you grant us a worldwide, royalty-free license to use, modify, and display such content without obligation to you.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-slate-700 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-slate-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FARGEAUX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              9. Indemnification
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Fargeaux from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              10. Governing Law
            </h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in London.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              11. Dispute Resolution
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Before initiating litigation, we encourage you to contact us to resolve any disputes. If we cannot reach a resolution within 60 days, either party may pursue legal action.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              12. Modifications to Terms
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may revise these Terms at any time without notice. Your continued use of the Service following such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              13. Termination
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may terminate or suspend your account and access to the Service at any time, with or without cause, and with or without notice, including if you violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-4">
              14. Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mt-4 border border-slate-200">
              <p className="text-slate-700"><strong>Email:</strong> legal@fargeaux.com</p>
              <p className="text-slate-700 mt-2"><strong>Address:</strong> London, United Kingdom</p>
              <p className="text-slate-700 mt-2"><strong>Response time:</strong> We aim to respond within 30 days</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
