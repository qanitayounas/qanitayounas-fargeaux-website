'use client'

import { motion } from "framer-motion"
import { Compass, Map, AlertTriangle, Cloud, Navigation, Car, CheckCircle2, Info } from "lucide-react"

export default function DrivingTipsPage() {
    const tips = [
        {
            title: "Know the 'Side' Dynamics",
            description: "It's not just which side of the road you're on, but which side the steering wheel is. This affects your lane positioning and where you look for mirrors. Take 15 minutes in a quiet car park to adjust.",
            icon: Navigation,
            color: "text-blue-500",
            bgColor: "bg-blue-50/50",
            borderColor: "group-hover:border-blue-200"
        },
        {
            title: "Master the Priority Rules",
            description: "Does traffic from the right always have priority? Who goes first at a 4-way stop? Priority rules differ wildly (e.g., 'Priorité à droite' in France). Fargeaux brain trainers help you learn these before you land.",
            icon: AlertTriangle,
            color: "text-orange-500",
            bgColor: "bg-orange-50/50",
            borderColor: "group-hover:border-orange-200"
        },
        {
            title: "Roundabout Etiquette",
            description: "In the UK, it's clockwise. In Europe, it's anti-clockwise. Knowing which lane to enter and how to signal your exit is the biggest stressor for international drivers.",
            icon: Compass,
            color: "text-teal-600",
            bgColor: "bg-teal-50/50",
            borderColor: "group-hover:border-teal-200"
        },
        {
            title: "Speed & Signs",
            description: "Are speed limits in km/h or mph? Is a circular sign with a red border a prohibition or a warning? Familiarizing yourself with local sign shapes can save you from costly fines.",
            icon: Map,
            color: "text-rose-500",
            bgColor: "bg-rose-50/50",
            borderColor: "group-hover:border-rose-200"
        }
    ]

    return (
        <main className="relative bg-white text-slate-800 overflow-hidden font-poppins min-h-screen">

            {/* AMBIENT BACKGROUND ELEMENTS */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-orange-100/20 blur-[150px] rounded-full"
                />
            </div>

            {/* HERO SECTION - PREMIUM POLISH */}
            <section className="pt-24 md:pt-32 pb-0 relative">
                <div className="max-w-5xl mx-auto px-6 text-center border-b border-slate-100 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-orange-100/50 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            Expert Advice
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-8 tracking-[-0.03em] leading-[1.1]">
                            Tips for <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">Driving Overseas</span>
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
                            Preparation turns a stressful commute into a scenic journey. Mastering small details before you leave makes a world of difference.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CORE TIPS GRID - GLASSMORPHISM EFFECT */}
            <section className="pt-12 pb-24 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                        {tips.map((tip, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative p-10 rounded-[3rem] border border-slate-100 hover:border-slate-300 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(15,118,110,0.08)] transition-all duration-500`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${tip.bgColor} ${tip.color} rounded-[1.25rem] flex items-center justify-center mb-10 transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110 shadow-sm`}>
                                        <tip.icon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                                        {tip.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                                        {tip.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMBINED SECTION: DID YOU KNOW? + CHECKLIST */}
            <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.1fr] gap-24 lg:gap-40 items-start">

                        {/* LEFT: DID YOU KNOW? CARD - COMPACT SIZE WITH MESH */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            viewport={{ once: true }}
                            className="space-y-6 group/know"
                        >
                            <div className="bg-teal-600 hover:bg-orange-500 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-teal-500/20 hover:shadow-orange-500/30 inline-flex flex-col justify-center min-h-[300px] transition-colors duration-500 cursor-pointer">
                                {/* MESH BACKGROUND EFFECT */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/20 to-transparent group-hover/know:from-orange-400/20" />
                                <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-white/10 blur-[60px] rounded-full group-hover/know:bg-white/20 transition-all duration-700" />

                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/know:opacity-20 transition-opacity duration-500">
                                    <Info size={140} />
                                </div>

                                <div className="relative z-10 space-y-6">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover/know:scale-110 transition-transform duration-500">
                                        <Info size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-semibold mb-4 tracking-tight">Did you know?</h4>
                                        <p className="text-teal-50/90 text-sm leading-relaxed font-light group-hover/know:text-white/90">
                                            Research shows that your reaction time doubles when driving on the "wrong" side of the road for the first 3 hours.
                                        </p>
                                        <p className="text-teal-50 text-sm leading-relaxed mt-4 font-medium group-hover/know:text-white">
                                            Fargeaux builds muscle memory <strong>before</strong> you arrive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: ESSENTIAL CHECKLIST */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] relative"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-12 flex items-center gap-5">
                                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center border border-orange-100/50 shadow-sm">
                                    <CheckCircle2 size={24} />
                                </div>
                                <span className="tracking-tight">The Pre-Flight Checklist</span>
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { item: "Check if you need an International Driving Permit (IDP).", detail: "Some countries require a local translation of your license." },
                                    { item: "Download offline maps.", detail: "GPS signal can be unreliable in rural or mountainous scenic routes." },
                                    { item: "Verify insurance coverage.", detail: "Ensure your policy explicitly covers international car rentals." },
                                    { item: "Practice local signs in Fargeaux.", detail: "Signage styles vary significantly by continent." },
                                    { item: "Save local emergency numbers.", detail: "Not every country uses 911 or 999." }
                                ].map((obj, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 group"
                                    >
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center transition-transform group-hover:scale-110">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm mb-1">{obj.item}</p>
                                            <p className="text-gray-400 text-xs font-light">{obj.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FINAL CTA - HIGH-END AURORA EFFECT */}
            <section className="py-40 text-center relative overflow-hidden">
                {/* AURORA GRADIENTS */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 blur-[130px] rounded-full mix-blend-multiply animate-pulse" />
                    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 blur-[130px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                            The best driver is <br />
                            <span className="text-orange-500 italic font-serif">a prepared traveler</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
                            Don't wait until you're behind the wheel in heavy traffic to learn the rules. Arrive ready to enjoy your journey from the first mile.
                        </p>
                        <div className="pt-8">
                            <motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="bg-teal-600 hover:bg-teal-700 text-white px-14 py-6 rounded-full font-bold shadow-[0_20px_40px_rgba(13,148,136,0.25)] transition-all relative overflow-hidden group"
>
  {/* Shine Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

  {/* Text Container */}
  <span className="relative z-10 block h-6 overflow-hidden">
    
    {/* Default Text */}
    <span className="block transition-transform duration-300 group-hover:-translate-y-6">
      Download the Fargeaux App
    </span>

    {/* Hover Text */}
    <span className="block absolute left-0 top-6 w-full text-center transition-transform duration-300 group-hover:-translate-y-6">
      Coming Soon
    </span>

  </span>
</motion.button>
                        </div>
                        <div className="space-y-4">
                            <p className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                                Available on iOS & Android
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}
