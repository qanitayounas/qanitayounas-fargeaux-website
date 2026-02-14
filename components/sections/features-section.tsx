import { Card } from '@/components/ui/card'
import { Lightbulb, Map, Globe, Zap, BarChart3, Lock } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Interactive Flashcards',
      description: '424 researched flashcards covering essential road rules and signs across different countries.',
      color: 'text-primary',
    },
    {
      icon: Map,
      title: 'Instinct Training Maps',
      description: '12 interactive maps with haptic feedback to train your driving instincts on unfamiliar roads.',
      color: 'text-secondary',
    },
    {
      icon: Globe,
      title: 'Multi-Country Support',
      description: 'Starting with UK rules. Expanding to Europe, Asia, and beyond. Travel anywhere prepared.',
      color: 'text-accent',
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Smart algorithms adjust difficulty based on your performance for optimal learning.',
      color: 'text-primary',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Track your learning journey with detailed progress reports and mastery levels.',
      color: 'text-secondary',
    },
    {
      icon: Lock,
      title: 'Offline Access',
      description: 'Download modules for offline learning. Study anywhere, anytime, no internet needed.',
      color: 'text-accent',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Powerful Features for <span className="text-primary">Safe Travels</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Everything you need to master foreign road rules and drive with confidence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${feature.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Learning Stats */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-poppins font-800 text-3xl md:text-4xl text-primary mb-2">26</p>
              <p className="text-slate-600 font-medium">Learning Modules</p>
            </div>
            <div>
              <p className="font-poppins font-800 text-3xl md:text-4xl text-primary mb-2">424</p>
              <p className="text-slate-600 font-medium">Study Cards</p>
            </div>
            <div>
              <p className="font-poppins font-800 text-3xl md:text-4xl text-primary mb-2">12</p>
              <p className="text-slate-600 font-medium">Training Maps</p>
            </div>
            <div>
              <p className="font-poppins font-800 text-3xl md:text-4xl text-accent mb-2">40%</p>
              <p className="text-slate-600 font-medium">Crash Prevention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
