'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingClient() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePurchase = () => {
    if (!selectedPlan) {
      alert('Please select a plan to continue.')
      return
    }

    const confirmPurchase = confirm(
      `You selected the ${selectedPlan} plan. Continue to demo purchase?`
    )

    if (confirmPurchase) {
      alert('Demo purchase successful! 🎉 Welcome to Fargeaux Premium.')
    }
  }

  const plans = [
    {
      name: 'Free Trial',
      duration: '24 hours',
      price: '$0',
      description: 'Perfect for exploring Fargeaux',
      features: [
        'Full access to all 26 modules',
        '424 flashcards included',
        '12 training maps',
        'Progress tracking',
        'Offline downloads',
        'No credit card required',
        'Cancel anytime',
      ],
      highlighted: true,
    },
    {
      name: 'Monthly',
      duration: 'per month',
      price: '$9.99',
      description: 'Great for quick trips',
      features: [
        'All features from Free Trial',
        'Unlimited learning access',
        'Ad-free experience',
        'New country modules monthly',
        'Priority email support',
        '30-day money-back guarantee',
        'Cancel anytime',
      ],
      highlighted: false,
    },
    {
      name: 'Annual',
      duration: 'per year',
      price: '$79.99',
      description: 'Best value for travelers',
      features: [
        'All features from Monthly',
        'Advanced analytics dashboard',
        'Early access to new countries',
        '24/7 priority support',
        'Exclusive community access',
        'Annual roadmap voting rights',
        'Family sharing (up to 5 users)',
      ],
      highlighted: true,
    },
  ]

  return (
    <main className="pt-20">
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(plan.name)}
                className="cursor-pointer transition-all duration-300"
              >
                <Card
                  className={`h-full p-8 flex flex-col border-2 transition-all duration-300
                    ${
                      selectedPlan === plan.name
                        ? 'border-primary shadow-2xl bg-primary/5 scale-105'
                        : plan.highlighted
                        ? 'border-primary'
                        : 'border-slate-200 hover:border-primary/30'
                    }`}
                >
                  <div className="mb-6">
                    <h3 className="font-poppins font-bold text-2xl text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="font-poppins font-extrabold text-5xl text-primary">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 text-sm">
                      {' '}
                      {plan.duration}
                    </span>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </main>
  )
}
