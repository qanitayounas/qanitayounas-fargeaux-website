'use client'

import { motion } from "framer-motion"
import { BookOpen, LayoutDashboard, BarChart3, ClipboardCheck } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Structured Modules",
      description:
        "26 carefully organized learning modules covering essential UK driving topics — from left-hand driving fundamentals to road positioning and right of way.",
    },
    {
      icon: BookOpen,
      title: "Interactive Flashcards",
      description:
        "Over 400 flashcards designed to reinforce memory through repetition and active recall.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Visual completion indicators help you focus on weak areas and build real confidence before getting behind the wheel.",
    },
    {
      icon: ClipboardCheck,
      title: "Realistic Practice Tests",
      description:
        "Test your understanding with structured mock assessments designed to simulate real-world road scenarios.",
    },
  ]

  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 overflow-hidden">

      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal-600 text-xs font-semibold tracking-widest uppercase mb-4">
              Why Fargeaux Exists
            </p>

            <h1 className="font-poppins font-semibold text-3xl md:text-5xl leading-tight mb-6 text-slate-900">
              Safer Roads Start With
              <span className="block text-teal-600">Prepared Drivers</span>
            </h1>
          </motion.div>
        </div>
      </section>

{/* PREMIUM MISSION CONTAINER */}
<section className="pb-24">
  <div className="max-w-4xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        rounded-3xl
        p-10 md:p-14
        text-center
        border border-slate-200/60
        bg-gradient-to-br from-white via-slate-50 to-slate-100/60
        shadow-[0px_25px_70px_rgba(15,23,42,0.06)]
        backdrop-blur-sm
      "
    >
      {/* subtle glow accent */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 via-transparent to-orange-500/5 pointer-events-none" />

      <div className="relative">
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
          Every year, international tourists are killed or seriously injured on UK roads because they weren’t prepared for left-hand driving, unfamiliar road signs, and different road rules.
        </p>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
          But it’s not just tourists who pay the price — local residents, cyclists, and pedestrians share those same roads. Beyond road safety, unprepared tourists create friction, frustration, and real harm in the communities they visit.
        </p>

        <p className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
          Fargeaux exists to change that.
        </p>

        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
          A prepared tourist is a safer tourist, a more respectful guest, and a better ambassador for travel done right.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* FEATURES GRID */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, i) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-white rounded-3xl p-10 border border-slate-200
                             hover:border-orange-500/40 transition-all duration-500
                             shadow-sm hover:shadow-[0px_20px_60px_rgba(0,0,0,0.06)]
                             hover:-translate-y-1 hover:scale-[1.015]"
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500
                                  bg-gradient-to-br from-orange-100/30 via-transparent to-orange-200/30 pointer-events-none" />

                  <div className="relative w-14 h-14 flex items-center justify-center mb-6
                                  rounded-xl bg-slate-50 border border-slate-200
                                  transition-all duration-300 group-hover:border-orange-500/40">
                    <Icon className="w-6 h-6 text-teal-600/80 group-hover:text-orange-500 transition-all duration-300" />
                  </div>

                  <h3 className="font-poppins text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </main>
  )
}