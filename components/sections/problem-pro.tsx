import { AlertTriangle, TrendingUp } from 'lucide-react'

export default function ProblemProSection() {
  const stats = [
    {
      icon: AlertTriangle,
      value: '3x',
      label: 'Higher Crash Risk',
      description: 'Drivers unfamiliar with foreign road rules face significantly higher accident rates in the first month'
    },
    {
      icon: TrendingUp,
      value: '31%',
      label: 'Wrong-Side Driving',
      description: 'A third of international drivers struggle with opposite-side driving initially, causing dangerous situations'
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Thin Orange Gradient Line */}
        <div className="mx-auto mb-6 h-[1px] w-24 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            The Challenge of Learning New Road Rules
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Driving in a foreign country is more than just getting a license—it's about understanding local road culture, safety standards, and regulations that could save your life.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-sm border border-orange-300/30
                           hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white border border-slate-200 shadow-sm transition-all duration-300 group-hover:border-orange-400/50">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-orange-500 transition-all duration-300" />
                    </div>
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-2xl md:text-3xl text-primary mb-1 md:mb-2">
                      {stat.value}
                    </p>
                    <p className="font-poppins font-bold text-base md:text-lg text-gray-900 mb-1 md:mb-2">
                      {stat.label}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Problems List */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-10 shadow-sm border border-orange-300/30">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mb-6 md:mb-8">
            What Most Drivers Struggle With
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              'Memorizing hundreds of traffic signs and their meanings',
              'Understanding speed limits and road-specific regulations',
              'Learning how to navigate different driving conventions',
              'Practicing emergency responses to unfamiliar road scenarios',
              'Adapting to local driving behaviors and safety standards',
              'Retaining complex rules under real-world driving conditions'
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20">
                    <span className="text-primary font-bold text-xs md:text-sm">✓</span>
                  </div>
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
