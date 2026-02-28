"use client"; // Needed for framer-motion

import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By downloading, installing, or using Fargeaux (“the App”), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App. The App is owned and operated by Bonnum Lux Group Pty Ltd (“we”, “us”, “our”, “the Company”), an Australian company.",
    },
    {
      title: "2. Description of Service",
      content:
        "Fargeaux is an educational mobile application designed to help international tourists learn driving rules, road signs, and driving conventions for countries they plan to visit. The App provides educational content including flashcards, quizzes, games, and reference materials for multiple countries.",
      list: [
        "IMPORTANT DISCLAIMER: Fargeaux is an educational tool only.",
        "It is NOT a substitute for official driving instruction, official highway codes, or professional driving lessons.",
        "Users must comply with all applicable laws and regulations when driving in any country.",
        "We do not guarantee that using this App will result in safe or legal driving.",
        "Always refer to official government sources for authoritative information.",
      ],
    },
    {
      title: "3. Eligibility",
      content:
        "You must be at least 16 years old to use this App. By using the App, you represent that you meet this age requirement.",
    },
    {
      title: "4. License Grant",
      content:
        "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on devices you own or control, solely for your personal, non-commercial educational purposes.",
    },
    {
      title: "5. Restrictions",
      content: "You agree NOT to:",
      list: [
        "Copy, modify, or distribute the App or its content",
        "Reverse engineer, decompile, or disassemble the App",
        "Rent, lease, lend, sell, or sublicense the App",
        "Use the App for any commercial purpose without our written consent",
        "Remove any proprietary notices from the App",
        "Use the App in any way that violates applicable laws",
      ],
    },
    {
      title: "6. Intellectual Property",
      content:
        "The App and all content, features, and functionality are owned by Bonnum Lux Group Pty Ltd and are protected by international copyright, trademark, and other intellectual property laws. Road sign images from various countries may be government copyright and used under applicable open government licences.",
    },
    {
      title: "7. Updates and Changes",
      content:
        "We may update the App from time to time. Continued use of the App after updates constitutes acceptance of any changes. We reserve the right to modify these Terms at any time. Material changes will be notified through the App or via email.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BONNUM LUX GROUP PTY LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP.",
    },
    {
      title: "9. Indemnification",
      content:
        "You agree to indemnify and hold harmless Bonnum Lux Group Pty Ltd from any claims, damages, or expenses arising from your use of the App or violation of these Terms.",
    },
    {
      title: "10. Governing Law",
      content:
        "These Terms are governed by the laws of the Australian Capital Territory, Australia. Any disputes shall be resolved in the courts of the Australian Capital Territory.",
    },
    {
      title: "11. Contact Information",
      content:
        "For questions about these Terms, contact us at: support@fargeaux.com",
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
            Terms of <span className="text-[#0d9488]">Service</span>
          </h1>

          <p className="text-[#475569]">
            Bonnum Lux Group Pty Ltd | ABN: 956 937 29207
          </p>

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