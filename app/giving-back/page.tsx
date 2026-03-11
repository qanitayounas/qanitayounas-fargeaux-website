'use client'

import { motion } from "framer-motion"
import { ShieldCheck, Heart, Globe, Lightbulb, Users, BarChart3, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function GivingBackPage() {
  const causes = [
    {
      title: "Road Safety - iRAP",
      description: "The International Road Assessment Programme is a UK registered charity working in over 70 countries to eliminate high-risk roads and save lives. They hold UN ECOSOC Consultative Status and are at the forefront of making roads safer for everyone - drivers, cyclists, and pedestrians alike.",
      url: "https://irap.org",
      icon: ShieldCheck,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      title: "Wildlife & Environment - WWF",
      description: "The World Wildlife Fund works in nearly 100 countries to conserve nature and reduce the most pressing threats to life on Earth. Tourism has a direct impact on environments and ecosystems - supporting WWF is our way of ensuring that the places people travel to are protected for future generations.",
      url: "https://wwf.org",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Trauma Support - Day One",
      description: "Trauma support donations go directly to registered charities in the countries where our customers drive. In the UK, we support Day One Trauma Support - the only UK charity supporting major trauma patients and their families regardless of injury type. Over 50% of major trauma cases are road traffic accidents.",
      url: "https://dayonetrauma.org",
      icon: Heart,
      color: "text-rose-500",
      bgColor: "bg-rose-50"
    }
  ]

  const credits = [
    {
      role: "App Development",
      name: "Muhammad Zulkifal khan",
      description: "Bringing the vision to life with code and passion.",
      url: "https://www.linkedin.com/in/muhammad-zulkifal-khan-2b954a232"
    },
    {
      role: "Logo & Brand Design",
      name: "Lesia@germancreative",
      description: "Crafting the visual identity of Fargeaux.",
    },
    {
      role: "Concept, Content & Direction",
      name: "Leith, Founder of Fargeaux",
      description: "Bonnum Lux Group Pty Ltd",
    }
  ]

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <main className="relative bg-white text-slate-800 overflow-hidden font-poppins">

      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold tracking-wide uppercase mb-6">
              Our Commitment
            </motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Giving <span className="text-teal-600">Back</span>
            </motion.h1>
            <motion.p variants={item} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every purchase makes a difference. Fargeaux isn't just an app — it's a contribution to road safety, trauma support, and environmental conservation around the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & PRICING IMPACT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                A real, trackable amount from every sale.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A fixed portion of every Fargeaux purchase is donated to charitable organisations aligned with our mission. Not a vague promise. Not "a percentage of profits." A real, trackable amount from every single sale.
              </p>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-teal-600 font-bold">
                    $5
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Single Country Purchase ($79 USD)</p>
                    <p className="text-sm text-slate-600">Donated directly to charity</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-teal-600 font-bold">
                    $7
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Lifetime All Countries ($119 USD)</p>
                    <p className="text-sm text-slate-600">Donated directly to charity</p>
                  </div>
                </motion.div>
              </div>
              <p className="mt-6 text-sm text-slate-500 italic">
                Every dollar is split equally between our three core causes.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-blue-500/30 mix-blend-overlay z-10 transition-transform duration-700 group-hover:scale-110" />
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
                alt="Impact"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-6 bg-teal-600/95 backdrop-blur-md rounded-2xl z-20 shadow-xl border border-teal-400/20"
              >
                <p className="text-white font-medium italic leading-relaxed">
                  "Tourism has a direct impact on environments and ecosystems - supporting WWF is our way of ensuring that the places people travel to are protected for future generations."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAUSES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Where your money goes.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our partners are chosen for their direct impact on road safety, community support, and environmental preservation.
            </p>
          </motion.div>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {causes.map((cause, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col"
              >
                <div className={`w-14 h-14 ${cause.bgColor} ${cause.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <cause.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {cause.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {cause.description}
                </p>
                <Link
                  href={cause.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all underline-offset-4 hover:underline"
                >
                  Visit Website <ExternalLink size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRANSPARENCY SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-16 rounded-[40px] bg-[#334155] text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-teal-400 font-semibold uppercase tracking-widest text-sm mb-6"
              >
                <BarChart3 size={20} /> Transparency you can trust
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                Clear records. <span className="text-teal-400">Quarterly updates.</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 text-slate-300 text-lg leading-relaxed"
                >
                  <p>
                    We calculate and disburse donations quarterly, based on net sales after refunds. We maintain full records of every donation, calculation records, bank transfers, and receipts from each charity.
                  </p>
                  <p>
                    We publish annual donation totals right here on this page.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
                >
                  <p className="text-sm text-slate-400 italic mb-4">A note on tax:</p>
                  <p className="text-slate-200">
                    Your purchase of Fargeaux is not a tax-deductible charitable donation — the donation is made by Bonnum Lux Group Pty Ltd from its revenue.
                  </p>
                  <p className="mt-4 text-slate-200">
                    But you can feel good knowing that every purchase directly supports the causes that matter most to road safety and the communities we serve.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUILT WITH PURPOSE (CREDITS) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built with purpose. Built with good people.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Fargeaux wouldn't exist without the talented people who helped bring it to life.
            </p>
          </motion.div>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {credits.map((credit, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 text-center hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
              >
                <p className="text-teal-600 font-semibold mb-2">{credit.role}</p>
                {credit.url ? (
                  <Link
                    href={credit.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors"
                  >
                    {credit.name} <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ) : (
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{credit.name}</h3>
                )}
                <p className="text-slate-500 text-sm">{credit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold tracking-wide uppercase">
              Know Before You Go
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Fargeaux
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Drive safe. Drive confident. Holiday better.
            </p>
            <div className="pt-4">
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/25 transition-all"
                >
                  Return Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
