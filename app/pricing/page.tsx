'use client'

import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0 USD',
      description: 'Test the experience for 24 hours',
      features: [
        'Access to 3 starter modules',
        '50 sample flashcards',
        '3 sample practice brain trainers',
        'No credit card required',
        '24-hour limited access',
      ],
      recommended: false,
    },
    {
      name: '1 Country Basic Package',
      price: '$79 USD',
      description: 'Complete access to all core learning materials',
      features: [
        'All 26 modules',
        '12 practice brain trainers',
        'Theory test preparation',
        'Progress saving',
        '424 flashcards',
        '$15 USD per country',
      ],
      recommended: false,
    },
    {
      name: 'All Countries Premium Package',
      price: '$119 USD',
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
    <section className="relative bg-white pt-16 pb-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <div className="h-[1px] w-20 mx-auto bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40 mb-5" />

          <p className="text-primary text-xs tracking-widest uppercase font-medium">
            Pricing Plans
          </p>

          {/* Reduced Heading Size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-4">
            Choose Your <span className="text-primary">Package</span>
          </h1>

          <p className="text-gray-600 text-sm mt-5">
            Simple, transparent pricing designed to support your road learning journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

          {plans.map((plan, index) => (
            <div key={index} className="flex">

              <div
                className={`
                  relative w-full p-10 rounded-[2rem] border bg-white
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                  flex flex-col
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

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-3xl font-semibold text-primary">
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm leading-relaxed">
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

      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full -z-10" />

    </section>
  )
}