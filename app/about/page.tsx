import type { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lightbulb, Map, Globe, Zap, BarChart3, Lock, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features - Fargeaux',
  description: 'Explore Fargeaux features: 424 flashcards, 26 modules, interactive training maps, and adaptive learning for road rules mastery.',
}

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      icon: Lightbulb,
      title: 'Interactive Flashcards',
      description: 'Learn from 424 meticulously researched flashcards covering road signs, rules, and regulations.',
      highlights: [
        'Spaced repetition algorithm for optimal memory retention',
        'Beautiful visual design for easy recognition',
        'Audio pronunciation for international road signs',
        'Difficulty levels: Beginner, Intermediate, Expert',
      ],
      color: 'from-primary to-secondary',
    },
    {
      icon: Map,
      title: 'Instinct Training Maps',
      description: 'Master driving on unfamiliar roads with 12 interactive training scenarios.',
      highlights: [
        'Haptic feedback for muscle memory building',
        '360-degree road perspectives',
        'Real-world traffic scenarios',
        'Performance analytics per scenario',
      ],
      color: 'from-secondary to-accent',
    },
    {
      icon: Globe,
      title: 'Multi-Country Support',
      description: 'Prepare for driving in multiple countries with country-specific modules.',
      highlights: [
        'Currently: United Kingdom (MVP)',
        'Coming soon: EU countries, Asia, Australia',
        'Localized road signs and rules',
        'Currency and measurement conversions',
      ],
      color: 'from-accent to-orange-500',
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Intelligent algorithms personalize your learning path based on your performance.',
      highlights: [
        'Real-time difficulty adjustment',
        'Smart content recommendations',
        'Weak area reinforcement',
        'Optimal learning pace',
      ],
      color: 'from-primary to-accent',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with comprehensive analytics.',
      highlights: [
        'Module completion rates',
        'Mastery level per topic',
        'Time spent learning',
        'Strength and weakness heatmaps',
      ],
      color: 'from-secondary to-primary',
    },
    {
      icon: Lock,
      title: 'Offline Access',
      description: 'Download modules and learn anywhere, anytime without internet.',
      highlights: [
        'Download entire modules for offline use',
        'Sync progress when reconnected',
        'Lightweight app size',
        'Works on flight mode',
      ],
      color: 'from-orange-500 to-accent',
    },
  ]

  const comparisons = [
    { feature: 'Total Flashcards', fargeaux: '424+', competitors: '100-200' },
    { feature: 'Interactive Maps', fargeaux: '12', competitors: '0-3' },
    { feature: 'Learning Modules', fargeaux: '26', competitors: '10-15' },
    { feature: 'Offline Support', fargeaux: 'Yes', competitors: 'Limited' },
    { feature: 'Adaptive Learning', fargeaux: 'Yes', competitors: 'No' },
    { feature: 'Community Features', fargeaux: 'Yes', competitors: 'No' },
  ]

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-800 text-5xl md:text-6xl text-foreground mb-4 text-balance">
              Comprehensive Learning <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
              Everything you need to master foreign road rules with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {detailedFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Visual */}
                <div className={`relative h-96 flex items-center justify-center ${!isEven && 'lg:order-last'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-10 blur-2xl`} />
                  <div className={`relative w-72 h-72 bg-gradient-to-br ${feature.color} rounded-3xl shadow-2xl flex items-center justify-center`}>
                    <Icon size={80} className="text-white" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="font-poppins font-800 text-3xl md:text-4xl text-foreground mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats & Comparison */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="font-poppins font-800 text-3xl md:text-4xl text-center text-foreground mb-12">
              Why Fargeaux Stands Out
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                      <th className="px-6 py-4 text-left font-poppins font-bold">Feature</th>
                      <th className="px-6 py-4 text-left font-poppins font-bold">Fargeaux</th>
                      <th className="px-6 py-4 text-left font-poppins font-bold">Other Apps</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {comparisons.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                        <td className="px-6 py-4 text-primary font-semibold">{row.fargeaux}</td>
                        <td className="px-6 py-4 text-slate-600">{row.competitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Experience All Features Free for 24 Hours
            </h3>
            <p className="text-white/90 mb-6">
              No credit card required. Full access to all features, modules, and flashcards.
            </p>
            <Button size="lg" className="bg-accent text-primary hover:bg-orange-500 gap-2">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
