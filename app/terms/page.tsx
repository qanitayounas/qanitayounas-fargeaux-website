"use client"; // Needed for framer-motion

import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        'These Terms constitute a legally binding agreement between you and Fargeaux. By using our platform, you agree to comply with these Terms.',
    },
    {
      title: "2. Use License",
      content:
        "We grant you a limited license for personal and educational use only.",
      list: [
        "Reproduce or resell content",
        "Reverse engineer the platform",
        "Access via unauthorized means",
        "Use commercially without permission",
      ],
    },
    {
      title: "3. Account Responsibilities",
      content:
        "You agree to maintain accurate information and secure your password.",
    },
    {
      title: "4. Subscription & Payments",
      content: "We offer subscription plans including a 24-hour free trial.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All branding, flashcards, and materials are protected by intellectual property laws.",
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
