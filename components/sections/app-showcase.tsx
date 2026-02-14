'use client'

import { useState } from 'react'
import Mobile3D from '@/components/common/mobile-3d'

type ScreenType = 'flashcard' | 'map' | 'progress' | 'alerts'

const screens: Record<ScreenType, { title: string; subtitle: string; stats: Array<{ value: string; label: string }>; features: string[] }> = {
  flashcard: {
    title: "Flashcards",
    subtitle: "424 interactive questions",
    stats: [
      { value: "424", label: "Total" },
      { value: "26", label: "Modules" },
      { value: "95%", label: "Pass Rate" }
    ],
    features: [
      "✓ Real road scenarios",
      "✓ Instant feedback",
      "✓ Progress tracking"
    ]
  },
  map: {
    title: "Training Maps",
    subtitle: "Visual rule learning",
    stats: [
      { value: "40", label: "Maps" },
      { value: "3D", label: "Interactive" },
      { value: "100%", label: "Coverage" }
    ],
    features: [
      "✓ Sign recognition",
      "✓ Road layouts",
      "✓ Hazard zones"
    ]
  },
  progress: {
    title: "Progress",
    subtitle: "Track your learning",
    stats: [
      { value: "100%", label: "Completion" },
      { value: "24h", label: "Learning Time" },
      { value: "🏆", label: "Certified" }
    ],
    features: [
      "✓ Daily streaks",
      "✓ Skill badges",
      "✓ Certifications"
    ]
  },
  alerts: {
    title: "Safety Alerts",
    subtitle: "Real-time crash prevention",
    stats: [
      { value: "31%", label: "Risk Down" },
      { value: "3x", label: "Less Crashes" },
      { value: "24/7", label: "Monitoring" }
    ],
    features: [
      "✓ Location alerts",
      "✓ Haptic feedback",
      "✓ Real-time updates"
    ]
  }
}

export default function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('flashcard')

  const currentScreen = screens[activeScreen]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl text-balance mb-6">
            Explore the <span className="text-primary">Fargeaux App</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to make you a safer driver in any country
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Mobile 3D */}
          <div className="flex justify-center">
            <Mobile3D 
              title={currentScreen.title}
              subtitle={currentScreen.subtitle}
              stats={currentScreen.stats}
              features={currentScreen.features}
            />
          </div>

          {/* Feature Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-bold text-3xl mb-3">{currentScreen.title}</h3>
              <p className="text-slate-600 text-lg">{currentScreen.subtitle}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {currentScreen.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-primary font-bold text-lg flex-shrink-0">✓</div>
                  <p className="text-slate-700 font-medium">{feature.replace('✓ ', '')}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {currentScreen.stats.map((stat, i) => (
                <div key={i} className="bg-primary/10 rounded-lg p-4 text-center">
                  <p className="font-poppins font-bold text-primary text-2xl">{stat.value}</p>
                  <p className="text-slate-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(screens) as ScreenType[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setActiveScreen(screen)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeScreen === screen
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white border border-slate-300 text-slate-700 hover:border-primary'
              }`}
            >
              {screens[screen].title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
