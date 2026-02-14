import { BookOpen, Map, Zap, TrendingUp, Clock, Target } from 'lucide-react'

export default function FeaturesProSection() {
  const features = [
    {
      icon: BookOpen,
      title: '424 Interactive Flashcards',
      description: 'Comprehensive flashcard system covering every aspect of driving rules, signs, and regulations'
    },
    {
      icon: Map,
      title: '26 Organized Modules',
      description: 'Content structured by topic from basic rules to advanced techniques and special situations'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Real-time explanations for every answer to reinforce learning and prevent mistakes'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Visual metrics showing completion percentage, mastery levels, and areas for improvement'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with sessions that fit into your schedule—5 minutes or 50'
    },
    {
      icon: Target,
      title: 'Smart Review System',
      description: 'Algorithm-based spaced repetition ensures you retain critical information long-term'
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
            Powerful Learning Tools
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Everything You Need to Master Road Rules
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our scientifically-designed learning system combines proven educational methods with interactive technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="group p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <h3 className="font-poppins font-bold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-base mb-6">
            Combined with our intelligent review algorithm, these tools create the most effective way to learn road rules
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            See all features
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
