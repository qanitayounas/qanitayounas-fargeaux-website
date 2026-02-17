'use client'

import { motion } from "framer-motion"
import { BookOpen, LayoutDashboard, BarChart3, ClipboardCheck } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Structured Modules",
      description:
        "26 carefully organized learning modules covering every essential UK driving topic from road signs to right of way.",
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
        "Visual completion indicators help you focus on weak areas and track mastery across all topics.",
    },
    {
      icon: ClipboardCheck,
      title: "Realistic Theory Tests",
      description:
        "Practice with quick, standard, and comprehensive mock exams that simulate real test conditions.",
    },
  ]

  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 overflow-hidden">

      <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.03] pointer-events-none" />

      {/* HERO */}
      <section className="relative py-32 md:py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-teal-600 text-xs font-semibold tracking-widest uppercase mb-4">
              About The App
            </p>

            {/* Reduced size */}
            <h1 className="font-poppins font-semibold text-3xl md:text-5xl leading-[1.05] mb-6 text-slate-900">
              A Modern Way to Master
              <span className="block text-teal-600">UK Driving Theory</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Built for clarity, focus, and efficiency — this platform helps learners
              confidently understand UK road rules through structured modules,
              interactive flashcards, and realistic theory testing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="relative pb-32">
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
                  {/* Hover gradient glow changed to orange */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500
                                  bg-gradient-to-br from-orange-100/30 via-transparent to-orange-200/30 pointer-events-none" />

                  {/* Icon */}
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

      {/* EXPERIENCE SECTION */}
      <section className="relative py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Slightly reduced */}
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.1]">
              Designed for Focused,
              <span className="block">Efficient Progress</span>
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Clean layouts, smooth transitions, and distraction-free interfaces
              keep your attention on what matters most — understanding UK road
              safety principles and preparing effectively for your theory exam.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
