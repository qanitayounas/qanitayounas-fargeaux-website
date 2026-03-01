import { AlertCircle, TrendingUp, DollarSign } from 'lucide-react'

export default function ProblemSection() {
  const risks = [
    {
      icon: AlertCircle,
      title: '3x Higher Crash Risk',
      description: 'Tourists are 3 times more likely to have crashes on unfamiliar roads',
      color: 'from-red-600/30 to-red-600/20',
    },
    {
      icon: TrendingUp,
      title: '31% Wrong Side Mistakes',
      description: 'Nearly 1 in 3 tourists drive on the wrong side of unfamiliar roads',
      color: 'from-orange-600/30 to-orange-600/20',
    },
    {
      icon: DollarSign,
      title: 'Massive Financial Impact',
      description: '$140k average claims, $350k for serious injuries',
      color: 'from-yellow-500/30 to-yellow-500/20',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900/80 to-slate-800 text-white">
      
      {/* Ambient Glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-secondary/20 blur-3xl rounded-full -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl mb-4 text-white">
            The Cost of <span className="text-accent">Unfamiliar Roads</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
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
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${risk.color} border border-white/20 hover:border-white/40 transition-all hover:shadow-lg group`}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white/10 to-transparent transition-opacity" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white">{risk.title}</h3>
                  <p className="text-gray-200">{risk.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-700/70 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <p className="text-gray-200 mb-2">
            Don't become another statistic
          </p>
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
            Prepare before your trip with Fargeaux
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our adaptive learning system helps you master road rules in minutes, not hours. Built specifically for travelers who want to drive with confidence.
          </p>
        </div>

      </div>
    </section>
  )
}