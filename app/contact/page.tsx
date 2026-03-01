'use client'

import { Card } from '@/components/ui/card'
import { Mail, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {

  const emails = [
    {
      title: 'General Support',
      desc: 'For questions about the app, your account, technical issues, or anything else. We aim to respond within 24–48 hours.',
      info: 'support@fargeaux.com',
      icon: Mail,
    },
    {
      title: 'Privacy Enquiries',
      desc: 'For questions about your data, privacy rights, or our data practices.',
      info: 'support@fargeaux.com',
      icon: Mail,
    },
    {
      title: 'Partnerships & Media',
      desc: 'Interested in partnering with Fargeaux or working on a story about road safety or tourism?',
      info: 'hello@fargeaux.com',
      icon: Mail,
    },
  ]

  const socialLinks = [
    { title: 'LinkedIn', url: 'https://linkedin.com/company/fargeaux', icon: Linkedin },
    { title: 'Facebook', url: 'https://facebook.com/fargeauxapp', icon: Facebook },
    { title: 'Instagram', url: 'https://instagram.com/fargeaux.app', icon: Instagram },
  ]

  const charities = [
    { name: 'iRAP (International Road Assessment Programme)', url: 'https://irap.org' },
    { name: 'WWF UK (World Wildlife Fund)', url: 'https://wwf.org.uk' },
    { name: 'Day One Trauma Support', url: 'https://dayonetrauma.org' },
  ]

  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section className="pt-10 md:pt-14 pb-12 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-3 leading-relaxed">
            Whether you have a question about the app, need help with your purchase, or just want to say g’day — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* EMAIL CONTACTS */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {emails.map((item, i) => {
              const Icon = item.icon
              return (
                <Card
                  key={i}
                  className="p-6 md:p-8 border transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition group-hover:bg-orange-500">
                      <Icon
                        size={22}
                        className="text-primary transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="text-lg font-semibold transition group-hover:text-orange-500">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">{item.desc}</p>

                    <p className="font-medium text-primary transition group-hover:text-orange-500">
                      {item.info}
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