import { Check } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Confidence Behind the Wheel',
      description: 'Know exactly what to expect. Master road rules before you arrive, eliminating uncertainty and stress.',
      gradient: 'from-blue-200 to-blue-400',
    },
    {
      title: 'Explore Without Fear',
      description: 'Focus on enjoying your trip, not worrying about breaking traffic laws. Drive safely on any road.',
      gradient: 'from-purple-200 to-purple-400',
    },
    {
      title: 'Memory That Sticks',
      description: 'Our scientifically-proven spaced repetition ensures you remember rules when you need them most.',
      gradient: 'from-teal-200 to-teal-400',
    },
    {
      title: 'Safety First Always',
      description: 'Every module is research-backed and designed to prevent accidents. Your safety is our priority.',
      gradient: 'from-orange-200 to-orange-400',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Soft Orange Divider Line */}
        <div className="mx-auto mb-8 h-[1px] w-20 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Why Choose <span className="text-primary">Fargeaux</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            More than just another learning app. Purpose-built for travelers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-8 md:p-10 group transition-all duration-300
                         bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Subtle Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-20 group-hover:opacity-25 transition-opacity`} />

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-lg flex-shrink-0">
                    <Check size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl mb-2 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
