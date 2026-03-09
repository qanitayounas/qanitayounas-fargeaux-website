'use client'

import { motion } from "framer-motion"
import { ShieldCheck, Heart, Globe, Lightbulb, Info } from "lucide-react"

export default function AboutPage() {
  const sections = [
    {
      title: "A road is a promise between strangers",
      description: "Every time you get behind the wheel, you enter an unspoken agreement with every other person on that road - drivers, cyclists, pedestrians, families walking to school, someone's grandmother crossing the street. You're promising to be competent, attentive, and careful. You're promising that you belong there. That promise matters more than most of us ever stop to think about.",
      icon: Heart,
      color: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    {
      title: "Not everyone gets to drive",
      description: "Billions of people on this planet will never sit behind a steering wheel. For some, it's economics. For others, it's geography, disability, age, or the laws of the country they were born in. Driving - the ability to go where you want, when you want, on your own terms - is one of the most profound freedoms a person can have. And most of us treat it as ordinary. It isn't.",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Tourism should enrich communities, not endanger them",
      description: "Every year, international tourists are killed or seriously injured on unfamiliar roads. An unprepared tourist doesn't just put themselves at risk. They put entire communities at risk. When tourists arrive unprepared - confused, stressed, making dangerous mistakes - they create friction and frustration in the places they've come to enjoy.",
      icon: ShieldCheck,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      title: "Why Fargeaux exists",
      description: "Fargeaux was built on a simple belief: preparation transforms outcomes. We exist to save lives. To make local communities safer. And to help every tourist become the kind of visitor that locals are glad to see. Not through passive reading, but through active, science-backed learning methods that actually build knowledge into memory where it counts: behind the wheel.",
      icon: Lightbulb,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ]

  return (
    <main className="relative bg-white text-slate-800 overflow-hidden font-poppins">

      {/* HERO */}
      <section className="pt-24 md:pt-32 pb-16 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              About <span className="text-teal-600">Fargeaux</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We believe that the best holidays aren't just about where you go — they're about how you get there.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${section.bgColor} ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <section.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BONNUM LUX */}
      <section className="py-24 bg-[#334155] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Bonnum Lux = <span className="text-teal-400">Good Light</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Fargeaux is a product of Bonnum Lux Group - a name that means "good light" in Latin. We chose it because that's what we believe preparation provides: clarity where there was confusion, confidence where there was anxiety, and safety where there was risk.
              </p>
              <p>
                Our charity affiliates — <span className="text-white font-medium">iRAP, WWF, and Day One Trauma Support</span> — exist because of the damage that unprepared driving causes. We're proud to work upstream, helping to prevent the harm before it happens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold tracking-wide uppercase">
              Know Before You Go
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Drive safe. Drive confident. <br className="hidden md:block" />
              Drive fun. Holiday better.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The roads you'll travel don't belong to you. They belong to the people who live there. Honour that trust. Learn before you leave. Arrive ready.
            </p>
            <div className="pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1">
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}