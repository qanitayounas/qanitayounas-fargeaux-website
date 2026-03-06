import { BookOpen, Map, Zap, TrendingUp, Clock, Target } from "lucide-react"

export default function FeaturesProSection() {
  const features = [
    {
      icon: BookOpen,
      title: "424 Interactive Flashcards",
      description:
        "Comprehensive flashcard system covering every aspect of driving rules, signs, and regulations",
    },
    {
      icon: Map,
      title: "26 Organized Modules",
      description:
        "Content structured by topic from basic rules to advanced techniques and special situations",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description:
        "Real-time explanations for every answer to reinforce learning and prevent mistakes",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Visual metrics showing completion percentage, mastery levels, and areas for improvement",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Learn at your own pace with sessions that fit into your schedule—5 minutes or 50",
    },
    {
      icon: Target,
      title: "Smart Review System",
      description:
        "Algorithm-based spaced repetition ensures you retain critical information long-term",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Thin Orange Gradient Line */}
        <div className="mx-auto mb-6 h-[1px] w-24 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

        {/* Header */}
        <div className="text-center mb-10 px-4">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">
            Features
          </p>

          <h2 className="font-poppins text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
            Everything You Need to Master Road Rules
          </h2>
        </div>

        {/* Research Card */}
        <div className="max-w-4xl mx-auto mb-10 p-6 md:p-8 bg-orange-50 border border-orange-200 rounded-xl shadow-md text-center">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Fargeaux is grounded in established cognitive science. Our flashcard and quiz-based learning system draws on spaced repetition research (Kornell, 2009; Kang, 2016) and the testing effect (Roediger & Karpicke, 2006) — methods proven to significantly improve long-term retention compared to passive study. We believe that preparing tourists with knowledge that actually sticks is the most effective form of upstream road safety.
          </p>
        </div>

        {/* Optional tagline below card */}
        <div className="text-center mb-8">
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A focused learning system built for clarity, speed, and long-term retention.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group flex items-start gap-4 transition-all duration-200
                           hover:-translate-y-[1px]"
              >
                {/* Premium Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full
                                bg-primary/10 shadow-sm group-hover:bg-gradient-to-br
                                group-hover:from-primary/20 group-hover:to-primary/40
                                transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-poppins text-base font-semibold text-gray-900 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mt-0.5 max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}