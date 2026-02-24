'use client'

import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic Package',
      price: '$79 AUD',
      description: 'Complete access to all core learning materials',
      features: [
        'All 26 modules',
        '12 practice maps',
        'Theory test preparation',
        'Progress saving',
        '424 flashcards',
      ],
      recommended: false,
    },
    {
      name: 'Premium Package',
      price: '$119 AUD',
      description: 'Unlock advanced tools and priority support',
      features: [
        'Everything in Basic',
        'Interactive mini-games',
        'Advanced practice scenarios',
        'Priority support',
        'Bonus study materials',
      ],
      recommended: true,
    },
  ]

  return (
    <section className="relative bg-white pt-16 md:pt-20 pb-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          {/* Thin Accent Line */}
          <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40 mb-6" />

          <p className="text-primary text-xs tracking-widest uppercase font-medium">
            Pricing Plans
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mt-4">
            Choose Your <span className="text-primary">Package</span>
          </h1>

          <p className="text-gray-600 text-[15px] leading-relaxed mt-6">
            Simple, transparent pricing designed to support your road learning journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative group transition-all duration-500"
            >
              <div
                className={`
                  relative p-12 rounded-[2rem] border bg-white
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:shadow-2xl
                  ${plan.recommended
                    ? 'border-primary shadow-lg'
                    : 'border-gray-200'}
                `}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 right-8 bg-primary text-white text-xs font-medium px-4 py-1 rounded-full shadow-md">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10">
                  <span className="text-5xl font-semibold text-primary tracking-tight">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Background Accents (matching Hero) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />

    </section>
  )
}
