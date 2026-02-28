'use client'

import { Card } from '@/components/ui/card'
import { Mail, MessageSquare, Phone } from 'lucide-react'

export default function ContactPage() {

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      desc: 'For detailed inquiries',
      info: 'hello@fargeaux.com',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      desc: 'Get instant support',
      info: 'Available 24/7',
    },
    {
      icon: Phone,
      title: 'Phone',
      desc: 'Call support',
      info: '+44 (0) 20 1234 5678',
    },
  ]

  return (
    <main className="bg-white pt-20">

      {/* HERO */}
      <section className="pt-14 md:pt-20 pb-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            We're Here to <span className="text-primary">Help</span>
          </h1>

          <p className="text-gray-600 text-[15px] max-w-xl mx-auto mt-4 leading-relaxed">
            Questions about Fargeaux? Our support team is available anytime to help
            you learn road rules with confidence.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((m, i) => {
              const Icon = m.icon
              return (
                <Card
                  key={i}
                  className="p-7 border transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition group-hover:bg-orange-500">
                      <Icon
                        size={22}
                        className="text-primary transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="text-lg font-semibold transition group-hover:text-orange-500">
                      {m.title}
                    </h3>

                    <p className="text-sm text-gray-500">{m.desc}</p>

                    <p className="font-medium text-primary transition group-hover:text-orange-500">
                      {m.info}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>

        </div>
      </section>

    </main>
  )
}
