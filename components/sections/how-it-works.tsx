import { Map, BookOpen, MousePointer2, ShieldCheck } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Map,
      title: "Choose Your Destination",
      description:
        "Select the country you're traveling to and instantly access its driving rules.",
    },
    {
      icon: BookOpen,
      title: "Learn with Flashcards",
      description:
        "Study road signs and essential rules using a clean, structured learning experience.",
    },
    {
      icon: MousePointer2,
      title: "Train Your Instincts",
      description:
        "Practice with real-world driving scenarios designed to build confident reactions.",
    },
    {
      icon: ShieldCheck,
      title: "Drive with Confidence",
      description:
        "Step on the road fully prepared with knowledge that keeps you and others safe.",
    },
  ]

  return (
    <section className="relative bg-white py-28 md:py-36">

      {/* Soft noise texture */}
      <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Divider */}
        <div className="mx-auto mb-16 h-[1px] w-24 bg-gradient-to-r from-orange-300/50 via-orange-500/80 to-orange-300/50" />

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            How It Works
          </p>

          <h2 className="font-poppins font-semibold text-4xl md:text-5xl text-gray-900 leading-[1.05] mb-4">
            A Simple Path to Confident Driving
          </h2>

          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Learn smarter with a clean, structured, and intuitive step-by-step approach.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <div
                key={i}
                className="group relative bg-slate-50 rounded-3xl p-10 border
                           border-orange-300/40 hover:border-orange-500/60
                           transition-all duration-500 shadow-sm
                           hover:shadow-[0px_14px_45px_rgba(0,0,0,0.07)]
                           hover:-translate-y-1 hover:scale-[1.017]"
                style={{ backdropFilter: "saturate(125%) blur(1px)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-orange-200/15 via-transparent to-orange-300/20 pointer-events-none" />

                {/* Icon */}
                <div
                  className="relative w-16 h-16 flex items-center justify-center mb-6
                             rounded-xl bg-white border border-slate-300 shadow-sm
                             transition-all duration-300 group-hover:border-orange-500/50"
                >
                  <Icon
                    className="w-7 h-7 transition-all duration-300
                               text-orange-500/70 group-hover:text-orange-600"
                  />

                  {/* Soft inner glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-200/10 to-orange-300/30 opacity-0 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Title */}
                <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Mobile Indicators */}
        <div className="lg:hidden flex gap-2 justify-center mt-14">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  index === steps.length - 1 ? "bg-primary" : "bg-gray-300"
                }`}
              />
              {index < steps.length - 1 && (
                <div className="w-5 h-[2px] bg-gray-300" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
