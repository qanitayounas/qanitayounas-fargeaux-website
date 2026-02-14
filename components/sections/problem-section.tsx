import { AlertCircle, TrendingUp, DollarSign } from 'lucide-react'

export default function ProblemSection() {
  const risks = [
    {
      icon: AlertCircle,
      title: '3x Higher Crash Risk',
      description: 'Tourists are 3 times more likely to have crashes on unfamiliar roads',
      color: 'from-red-500/20 to-red-500/10',
    },
    {
      icon: TrendingUp,
      title: '31% Wrong Side Mistakes',
      description: 'Nearly 1 in 3 tourists drive on the wrong side of unfamiliar roads',
      color: 'from-orange-500/20 to-orange-500/10',
    },
    {
      icon: DollarSign,
      title: 'Massive Financial Impact',
      description: '$140k average claims, $350k for serious injuries',
      color: 'from-yellow-500/20 to-yellow-500/10',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl text-foreground mb-4 text-balance">
            The Cost of <span className="text-accent">Unfamiliar Roads</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Travelers face real risks on foreign roads. Know the rules before you drive.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {risks.map((risk, index) => {
            const Icon = risk.icon
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${risk.color} border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg group`}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-slate-50/50 to-transparent transition-opacity" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-foreground">{risk.title}</h3>
                  <p className="text-slate-600">{risk.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-slate-700 mb-2">
            Don't become another statistic
          </p>
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-4">
            Prepare before your trip with Fargeaux
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-balance">
            Our adaptive learning system helps you master road rules in minutes, not hours. Built specifically for travelers who want to drive with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
