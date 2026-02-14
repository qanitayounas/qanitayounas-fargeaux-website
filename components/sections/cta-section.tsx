import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export default function CTASection() {
  const trialFeatures = [
    'Full access to all 26 learning modules',
    '424 comprehensive flashcards',
    '12 interactive training maps',
    'Offline download capability',
    'Progress tracking & analytics',
    'No credit card required',
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/95 to-secondary/95 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl mb-4 text-balance">
            Ready to Drive Safely?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Start your journey to confident driving. No credit card required.
          </p>
        </div>

        {/* Trial Box */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: CTA */}
            <div className="space-y-6">
              <div>
                <p className="text-white/80 text-sm font-medium mb-2">START YOUR FREE TRIAL</p>
                <h3 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
                  24 Hours of Complete Access
                </h3>
                <p className="text-white/80 text-lg">
                  No credit card, no hidden fees, no commitment. Everything included.
                </p>
              </div>

              <Button size="lg" className="bg-accent text-primary hover:bg-orange-500 gap-2 w-full md:w-auto text-base font-semibold">
                Start Free Trial Now
                <ArrowRight size={20} />
              </Button>

              <p className="text-sm text-white/70">
                ✓ Instant access · ✓ 24-hour trial period · ✓ Cancel anytime
              </p>
            </div>

            {/* Right: Features */}
            <div className="space-y-3">
              {trialFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
