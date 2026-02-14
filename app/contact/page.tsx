'use client'

import type { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const faqItems = [
    {
      question: 'How long is the free trial?',
      answer: 'The free trial lasts 24 hours with full access to all features, modules, and flashcards. No credit card required.',
    },
    {
      question: 'Can I download modules for offline learning?',
      answer: 'Yes! All modules can be downloaded for offline access. Your progress syncs when you reconnect to the internet.',
    },
    {
      question: 'What countries are currently supported?',
      answer: 'We currently offer comprehensive coverage for the United Kingdom. We\'re actively expanding to EU countries, Asia, and Australia.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and comply with GDPR. Your learning data is private and secure.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied with your subscription.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel anytime from your account settings. No questions asked, no hidden fees.',
    },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'For detailed inquiries',
      info: 'hello@fargeaux.com',
      color: 'from-primary to-secondary',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant support',
      info: 'Available 24/7',
      color: 'from-secondary to-accent',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call our support team',
      info: '+44 (0) 20 1234 5678',
      color: 'from-accent to-orange-500',
    },
  ]

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-800 text-5xl md:text-6xl text-foreground mb-4 text-balance">
              We're Here to <span className="text-primary">Help</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
              Have questions? Our support team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={index}
                  className="p-8 border-border/50 hover:shadow-lg transition-all hover:border-primary/30"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-poppins font-bold text-xl text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{method.description}</p>
                    <p className="font-semibold text-primary">{method.info}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-8">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <MessageSquare size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Thank you for reaching out!</p>
                  <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-800 text-4xl md:text-5xl text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-primary/30 transition-colors"
              >
                <summary className="font-poppins font-bold text-lg text-foreground flex items-center justify-between group-open:text-primary transition-colors">
                  {item.question}
                  <span className="text-primary text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
