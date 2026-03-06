'use client'

import { motion } from "framer-motion"
import { Gauge, Info, Timer, AlertTriangle } from "lucide-react"

export default function PaceometerPage() {
    return (
        <main className="relative bg-white text-slate-800 overflow-hidden font-poppins min-h-screen">

            {/* HERO SECTION - REWROTTEN FOR SPLIT LAYOUT */}
            <section className="pt-24 md:pt-32 pb-16 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold tracking-wide uppercase">
                                Why Speeding Barely Saves Any Time
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                Understand the <span className="text-teal-600">Paceometer</span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                This is a paceometer — and once you understand it, you'll never feel the urge to speed again.
                            </p>

                            <div className="space-y-4 text-slate-600 text-lg">
                                <p>
                                    Our brains simply aren't wired to intuitively grasp the inverse relationship between speed and time. The paceometer makes that relationship visible at a glance.
                                </p>
                                <p>
                                    For anyone driving in an unfamiliar country — navigating new road signs, different speed limits, or switching to the opposite side of the road - this matters even more.
                                </p>
                            </div>

                            <div className="pt-4 flex flex-wrap gap-4">
                                <div className="relative inline-block group cursor-default">
                                    <button className="relative bg-teal-50 border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 group-hover:border-teal-400 group-hover:bg-teal-100 overflow-hidden">
                                        Download Fargeaux
                                        {/* Coming Soon overlay */}
                                        <span className="absolute inset-0 flex items-center justify-center bg-teal-600/90 text-white text-sm font-bold tracking-widest uppercase rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Coming Soon
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <img
                                    src="/fargeaux_paceometer.svg"
                                    alt="The Fargeaux Paceometer"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Decorative accent behind the SVG */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-50 blur-[100px] rounded-full -z-0" />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* DETAILED BREAKDOWN SECTION */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 space-y-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 leading-tight">The Three Layers of Intelligence</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The dial has three layers of numbers. The <strong>large dark numbers</strong> on the inner dial show your speed in miles per hour. Just outside the dial, the <strong>smaller teal numbers</strong> show the same speed converted to kilometres per hour — handy if you're used to metric.
                            </p>
                            <div className="p-6 bg-white rounded-2xl border border-teal-100 shadow-sm">
                                <p className="text-teal-700 font-medium italic">
                                    The white numbers on the outer teal ring are the key: they show how many minutes it would take to travel 10 miles (16 km) at that speed.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <Gauge className="text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Meaningful Gains</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        At lower speeds, small increases make a huge difference. Going from 20 mph to 30 mph saves you a full 10 minutes over that distance.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <AlertTriangle className="text-orange-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Diminishing Returns</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Pushing from 70 mph to 90 mph saves less than 2 minutes. The risk of a serious accident dramatically increases for a negligible time reward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUOTE / SCIENCE */}
                    <div className="pt-8 border-t border-slate-200">
                        <blockquote className="space-y-4">
                            <p className="text-2xl font-semibold text-slate-900 italic leading-snug">
                                "People consistently overestimate how much time they'll save by speeding, particularly at higher speeds."
                            </p>
                            <footer className="text-slate-500 font-medium">
                                — Eyal Peer and Eyal Gamliel, Behavioural Scientists
                            </footer>
                        </blockquote>
                    </div>

                </div>
            </section>

            {/* FINAL CTA - LIGHT MODE */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                            Ease off. Enjoy the scenery.
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Know that a comfortable, safe speed is almost always fast enough. Fargeaux helps you master local rules so you can relax and holiday better.
                        </p>
                        <div className="pt-4 flex justify-center gap-6">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-orange-500/20 transition-all hover:scale-105">
                                Start Your Journey
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}
