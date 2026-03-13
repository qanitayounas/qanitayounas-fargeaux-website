'use client'

import { motion } from "framer-motion"
import { ShieldCheck, Gift, Award, Heart, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PioneersPage() {
  const benefits = [
    {
      title: "Lifetime access to every country",
      description: "Access every country we have now, and every country we add in the future. One payment. Yours forever.",
      icon: ShieldCheck,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      title: "$20 cashback at the 1,000-sale milestone",
      description: "Once we hit 1,000 Lifetime All Countries sales, we'll notify you by email and send your $20 via PayPal or bank transfer within 60 days.",
      icon: Gift,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Recognition as an early supporter",
      description: "You're not just buying an app. You're backing a mission to make roads safer for locals and tourists everywhere.",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "A share of something bigger",
      description: "A portion of every purchase goes directly to our charity affiliates: iRAP (road safety), WWF (wildlife and environment), and Day One Trauma Support.",
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    }
  ]

  const steps = [
    "Purchase the Lifetime All Countries edition ($119 USD)",
    "Make sure we have your email address for milestone notifications",
    "Use the app, learn the rules, travel with confidence",
    "When we reach 1,000 Lifetime sales, we'll email you",
    "Confirm your preferred payment method and receive your $20 back"
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
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold tracking-wide uppercase mb-6">
              Safety Pioneer Program
            </motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Be one of our first 1,000. <br />
              <span className="text-orange-500">Get $20 back.</span>
            </motion.h1>
            <motion.p variants={item} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're looking for 1,000 Safety Pioneers - early supporters who believe that better-prepared tourists make safer roads for everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* THE DEAL */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Here's the deal</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Purchase the Lifetime All Countries edition ($119 USD) and you'll be among the first people in the world to use Fargeaux. When we hit 1,000 Lifetime sales, every Safety Pioneer receives $20 USD back - making your net cost just $99.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-medium">
                <div className="flex items-center justify-center md:justify-start gap-2 text-teal-400">
                  <CheckCircle2 size={18} /> No catches
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-teal-400">
                  <CheckCircle2 size={18} /> No subscriptions
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-teal-400">
                  <CheckCircle2 size={18} /> No recurring fees
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What you get as a Safety Pioneer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-6"
              >
                <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} ${benefit.color} rounded-xl flex items-center justify-center`}>
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 group hover:border-orange-200 hover:bg-orange-50/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <p className="text-lg font-medium text-slate-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTER */}
      <section className="py-24 bg-[#334155] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How many spots are left?</h2>
          <div className="relative inline-block">
            <div className="text-5xl md:text-7xl font-black text-orange-500 mb-4 tracking-tighter">
              42 <span className="text-slate-400 text-3xl font-bold">/ 1,000</span>
            </div>
          </div>
          <p className="text-xl text-slate-300 mb-8 mt-4">
            Safety Pioneer spots claimed.
          </p>
          <div className="w-full max-w-md mx-auto h-3 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-orange-500"
            />
          </div>
          <p className="mt-8 text-slate-400 text-sm max-w-md mx-auto italic">
            We'll update the count here regularly. Once 1,000 spots are filled, this offer closes permanently.
          </p>
        </div>
      </section>

      {/* FINE PRINT */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">The fine print (kept simple)</h3>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              The $20 cashback is triggered only when we reach 1,000 total Lifetime All Countries sales. If the milestone hasn't been reached, no cashback is issued - but you still have full Lifetime access to everything in the app regardless.
            </p>
            <p>
              You'll need to respond to our cashback email within 90 days. The Safety Pioneer position can't be transferred or sold. If you request a refund through Apple or Google, your Pioneer eligibility is forfeited.
            </p>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:underline mt-4"
            >
              Full Terms & Conditions <ArrowRight size={16} />
            </Link>
          </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-400 text-sm font-semibold tracking-wide uppercase">
              Know Before You Go
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Fargeaux
            </h2>
            <div className="pt-4">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/25 transition-all text-center"
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
