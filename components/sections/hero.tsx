'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import Mobile3D from '@/components/common/mobile-3d'

// Download Buttons Component
const DownloadButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      {/* Apple App Store */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <div className="text-xs">Download on the</div>
            <div className="text-lg font-semibold -mt-1">App Store</div>
          </div>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          <div className="text-left">
            <div className="text-xs">GET IT ON</div>
            <div className="text-lg font-semibold -mt-1">Google Play</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-medium text-sm">
                <Zap size={16} />
                New: 24-hour free trial available
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="text-primary">Master Foreign</span>{' '}
                <span className="text-foreground">Road Rules</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Learn the road rules you need before traveling. Avoid costly mistakes and stay safe with Fargeaux interactive flashcards and instinct training.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-4">
              <div>
                <p className="font-bold text-2xl text-primary">424</p>
                <p className="text-sm text-slate-600">Flashcards</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-primary">26</p>
                <p className="text-sm text-slate-600">Modules</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-primary">40%</p>
                <p className="text-sm text-slate-600">Safer Driving</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 gap-2 text-base w-full sm:w-fit"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              ✓ No credit card required · ✓ 24-hour free access · ✓ 2 complete modules
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center justify-center">
            <Mobile3D
              title="Master Road Rules"
              subtitle="Learn before you drive"
              stats={[
                { value: "424", label: "Cards" },
                { value: "26", label: "Modules" },
                { value: "40%", label: "Safer" }
              ]}
              features={[
                "✓ Interactive flashcards",
                "✓ Training maps",
                "✓ Real-time alerts"
              ]}
            />

            {/* 👇 DOWNLOAD BUTTONS BELOW IPHONE */}
            <DownloadButtons />
          </div>

        </div>
      </div>
    </section>
  )
}
