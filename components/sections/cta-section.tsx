import { Check } from 'lucide-react'

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
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary/80 to-secondary/80 text-white overflow-hidden">
      {/* Decorative soft circles */}
      <div className="absolute top-10 right-16 w-36 h-36 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 left-16 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Divider */}
        <div className="mx-auto mb-6 h-[1px] w-16 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

        {/* Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-3xl md:text-4xl mb-2 text-white">
            Ready to Drive Safely?
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Start your journey to confident driving. No credit card required.
          </p>
        </div>

        {/* Trial Box */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* Left: CTA Info */}
            <div className="space-y-3">
              <p className="text-white/70 text-xs font-medium tracking-wider uppercase">
                START YOUR FREE TRIAL
              </p>
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white">
                24 Hours of Complete Access
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-snug">
                No credit card, no hidden fees, no commitment. Everything included.
              </p>
              <p className="text-xs text-white/60 mt-1">
                ✓ Instant access · ✓ 24-hour trial period · ✓ Cancel anytime
              </p>
            </div>

            {/* Right: Features */}
            <div className="space-y-2">
              {trialFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-accent" />
                  </div>
                  <span className="text-white/90 text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
