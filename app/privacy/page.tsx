"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        `Bonnum Lux Group Pty Ltd ("we", "us", "our") operates Fargeaux. This Privacy Policy explains how we collect, use, and protect your information.`,
    },
    {
      title: "2. Information We Collect",
      content: `When you purchase the App, payment is processed through Apple App Store or Google Play Store. We do not directly collect or store payment information. We may collect your email address if you contact support or opt in to receive updates.`,
      list: [
        "Device information (device type, operating system version)",
        "App usage data (features used, quiz scores, progress)",
        "Crash reports and performance data",
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: `We use collected information to:`,
      list: [
        "Provide and maintain the App",
        "Improve and optimize App performance",
        "Track your learning progress within the App",
        "Respond to support requests",
        "Send important updates about the App (if opted in)",
        "Process Safety Pioneer Program payments (email required)",
      ],
    },
    {
      title: "4. Data Sharing",
      content: `We do NOT sell your personal information. We may share data with:`,
      list: [
        "Service providers who assist in App operations (analytics, crash reporting)",
        "Law enforcement if required by law",
        "Payment processors for Safety Pioneer Program disbursement",
      ],
    },
    {
      title: "5. Data Retention",
      content: `Learning progress is stored locally on your device. If you delete the App, this data is deleted. Any data we collect on our servers is retained only as long as necessary to fulfill the purposes outlined in this policy.`,
    },
    {
      title: "6. Your Rights",
      content: `You have the right to:`,
      list: [
        "Access your personal data",
        "Request correction of inaccurate data",
        "Request deletion of your data",
        "Opt out of marketing communications",
        "To exercise these rights, contact support@fargeaux.com",
      ],
    },
    {
      title: "7. Children's Privacy",
      content: `The App is not directed at children under 16. We do not knowingly collect information from children under 16. If we discover we have collected such information, we will delete it promptly.`,
    },
    {
      title: "8. International Data Transfers",
      content: `Your information may be transferred to and processed in Australia or other countries. By using the App, you consent to such transfers.`,
    },
    {
      title: "9. Security",
      content: `We implement reasonable security measures to protect your information. However, no method of electronic transmission or storage is 100% secure.`,
    },
    {
      title: "10. Changes to Privacy Policy",
      content: `We may update this Privacy Policy. We will notify you of material changes through the App or via email.`,
    },
    
  ];

  return (
    <main className="pt-24 pb-24 bg-[#f1f5f9] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-[#0d9488]/10 text-[#0d9488] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Legal Information
          </div>

          <h1 className="font-extrabold text-5xl md:text-6xl text-[#334155] leading-tight mb-6">
            Privacy <span className="text-[#0d9488]">Policy</span>
          </h1>
        </motion.div>

        {/* CONTENT SECTIONS */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <h2 className="text-2xl font-bold text-[#0f766e] mb-4">
                {section.title}
              </h2>

              <p className="text-[#475569] leading-relaxed mb-4">
                {section.content}
              </p>

              {section.list && (
                <ul className="space-y-2 mt-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#475569]">
                      <span className="mt-2 h-2 w-2 bg-[#f97316] rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
            
          ))}
            {/* CONTACT */}
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: sections.length * 0.1 }}
            className="bg-[#0d9488] text-white rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

            <p className="text-white/90 mb-6">
              If you have questions about these Terms, please contact us.
            </p>

            <div className="space-y-2 text-white/90">
              <p><strong>Email:</strong> legal@fargeaux.com</p>
              <p><strong>Address:</strong> London, United Kingdom</p>
              <p><strong>Response time:</strong> Within 30 days</p>
            </div>
          </motion.section>
        </div>

      </div>
    </main>
  );
}
