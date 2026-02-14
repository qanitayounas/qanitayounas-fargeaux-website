import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Destination',
      description: 'Select the country you\'re traveling to and start learning its road rules.',
      icon: '🌍',
    },
    {
      number: '02',
      title: 'Learn with Flashcards',
      description: 'Master essential road signs and rules through our interactive, spaced-repetition system.',
      icon: '📚',
    },
    {
      number: '03',
      title: 'Train Your Instincts',
      description: 'Practice with interactive maps and scenarios to build real-world driving instincts.',
      icon: '🗺️',
    },
    {
      number: '04',
      title: 'Drive with Confidence',
      description: 'Hit the road prepared. Your newfound knowledge keeps you and others safe.',
      icon: '🚗',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl text-foreground mb-4 text-balance">
            How Fargeaux Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            From first download to confident driving in just a few steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="h-full bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white font-poppins font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

             
            </div>
          ))}
        </div>

        {/* Timeline visual for mobile */}
        <div className="lg:hidden flex gap-2 justify-center mb-12">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${index === steps.length - 1 ? 'bg-primary' : 'bg-slate-300'}`} />
              {index < steps.length - 1 && <div className="w-3 h-0.5 bg-slate-300" />}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
