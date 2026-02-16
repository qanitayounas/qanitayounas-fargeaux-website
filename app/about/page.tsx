import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Fargeaux",
  description:
    "Learn about Fargeaux – the modern UK driving guide app with 424 flashcards across 26 modules designed for confident international drivers.",
}

export default function AboutPage() {
  return (
    <main className="pt-20 bg-[#f8fafa] text-[#334155]">
      
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-[#0d9488] mb-6">
            Drive Confidently in the UK
          </h1>
          <p className="font-inter text-lg md:text-xl text-[#64748b] leading-relaxed">
            Learn everything you need to know about driving in the United Kingdom.
            From roundabouts to road signs, we’ve got you covered with 
            <span className="text-[#0d9488] font-semibold"> 424 flashcards </span>
            across
            <span className="text-[#0d9488] font-semibold"> 26 structured modules</span>.
          </p>
        </div>
      </section>

      {/* App Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="font-poppins font-bold text-4xl text-[#0d9488] mb-6">
              🇬🇧 UK Driving Guide (MVP)
            </h2>

            <div className="space-y-6 font-inter text-[#334155]">
              <div className="bg-[#f0fdfa] p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2">🚗 Roundabouts</h3>
                <p className="text-[#64748b]">12 of 20 cards completed</p>
              </div>

              <div className="bg-[#f0fdfa] p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2">🚦 Traffic Signs</h3>
                <p className="text-[#64748b]">0 of 35 cards completed</p>
              </div>

              <div className="bg-[#f0fdfa] p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2">🛣️ Motorways</h3>
                <p className="text-[#64748b]">8 of 18 cards completed</p>
              </div>
            </div>
          </div>

          {/* Right Visual Flashcard Preview */}
          <div className="flex justify-center">
            <div className="w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative">

              {/* Flag */}
              <div className="absolute top-4 right-4 text-2xl">
                🇬🇧
              </div>

              <p className="font-inter text-lg text-[#334155] mb-8">
                What side of the road do you drive on in the UK?
              </p>

              <div className="bg-gradient-to-r from-[#0d9488] to-[#14b8a6] text-white p-4 rounded-xl text-center">
                Tap to flip
              </div>

              <p className="text-sm text-[#64748b] mt-6 text-center">
                12 of 20
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi Country Support */}
      <section className="py-20 bg-[#f8fafa] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-[#0d9488] mb-8">
            Multi-Country Expansion
          </h2>

          <div className="flex justify-center gap-8 text-4xl mb-6">
            <span>🇬🇧</span>
            <span className="opacity-40">🇫🇷</span>
            <span className="opacity-40">🇪🇸</span>
            <span className="opacity-40">🇮🇹</span>
            <span className="opacity-40">🇩🇪</span>
            <span className="opacity-40">🇨🇭</span>
          </div>

          <p className="font-inter text-[#64748b]">
            Greyed flags indicate future releases. The UK is our MVP,
            with European expansion coming soon.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d9488] text-white text-center rounded-t-3xl">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="font-poppins font-bold text-3xl mb-4">
            Experience Fargeaux Free for 24 Hours
          </h3>

          <p className="font-inter mb-8 text-white/90">
            Full access to all flashcards, modules and learning features.
            No credit card required.
          </p>

          <Button
            size="lg"
            className="bg-[#f97316] hover:bg-orange-600 text-white rounded-xl px-8 py-6 text-lg"
          >
            Start Free Trial
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

    </main>
  )
}
