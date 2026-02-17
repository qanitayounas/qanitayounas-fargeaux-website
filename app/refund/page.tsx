"use client";

import { motion } from "framer-motion";

export default function Page() {
  const sections = [
    {
      title: "1. Refund Policy",
      content:
        "This Refund Policy explains how refund requests for Fargeaux subscriptions and purchases are handled.",
    },
    {
      title: "2. App Store Refunds",
      content:
        "Fargeaux is sold through the Apple App Store and Google Play Store. Refund requests must be made directly through the respective platform:",
      list: [
        "Apple App Store: Request refunds at reportaproblem.apple.com within 14 days of purchase.",
        "Google Play Store: Request refunds through Google Play within 48 hours for instant refund, or up to 14 days by contacting support.",
      ],
    },
    {
      title: "3. Our Refund Support",
      content:
        "While we cannot process refunds directly (as payments go through Apple or Google), we will support legitimate refund requests. If you are unsatisfied with Fargeaux, contact us at support@fargeaux.com and we will guide you through the refund process.",
    },
    {
      title: "4. Refund Eligibility",
      content: "Refunds are generally granted for the following situations:",
      list: [
        "Technical issues preventing app use",
        "Accidental or unauthorized purchases",
        "App not functioning as described",
        "Refunds may be denied for change of mind after extensive use",
        "Completing all content then requesting refund",
        "Attempting to circumvent payment system",
      ],
    },
    {
      title: "5. Regional Consumer Rights",
      content:
        "Nothing in this policy affects your statutory rights under applicable consumer protection laws, including but not limited to Australian Consumer Law, EU Consumer Rights Directive, or UK Consumer Rights Act 2015.",
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

          <h1 className="font-extrabold text-5xl md:text-6xl text-[#334155] mb-6">
            Refund <span className="text-[#0d9488]">Policy</span>
          </h1>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0]"
            >
              <h2 className="text-2xl font-bold text-[#0f766e] mb-4">
                {section.title}
              </h2>

              <p className="text-[#475569] mb-4">{section.content}</p>

              {section.list && (
                <ul className="space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#475569]">
                      <span className="mt-2 h-2 w-2 bg-[#f97316] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}