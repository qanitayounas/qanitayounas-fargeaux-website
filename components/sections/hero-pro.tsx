'use client'

import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 pt-6 w-full sm:w-auto">

    {/* App Store */}
    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
      <div className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-5 py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-[200px]">
        <FaApple className="w-5 h-5" />
        <div className="leading-tight text-left">
          <p className="text-[11px] opacity-70">Download on the</p>
          <p className="text-sm font-semibold tracking-tight">App Store</p>
        </div>
      </div>
    </a>

    {/* Google Play */}
    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
      <div className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-5 py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-[200px]">
        <FaGooglePlay className="w-5 h-5" />
        <div className="leading-tight text-left">
          <p className="text-[11px] opacity-70">Get it on</p>
          <p className="text-sm font-semibold tracking-tight">Google Play</p>
        </div>
      </div>
    </a>

  </div>
);

export default function HeroProSection() {
  return (
    <section className="relative bg-white pt-12 md:pt-20 pb-20 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            <div className="h-[1px] w-20 mx-auto lg:mx-0 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

            <p className="text-primary text-xs tracking-widest uppercase font-medium">
              Road Rules Learning App
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold text-gray-900 leading-tight">
              Learn Like a Local,
              <br className="hidden sm:block" />
              <span className="text-primary">Drive Safer</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              Flashcards, training maps, and contextual feedback designed to help
              you understand road rules abroad — calmly, clearly, and confidently.
            </p>

{/* Stats */}
<div className="flex justify-center lg:justify-start gap-8 pt-2">
  {[
    { value: '424', label: 'Cards' },
    { value: '26', label: 'Modules' },
    { value: '40%', label: 'Safer' },
  ].map((stat, index) => (
    <div
      key={stat.label}
      className="transform transition-all duration-500 ease-out hover:scale-105 opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      <p className="text-lg font-semibold text-primary">{stat.value}</p>
      <p className="text-xs text-gray-500">{stat.label}</p>
    </div>
  ))}
</div>

            {/* Orange Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                className="bg-orange-500 text-white px-6 py-5 rounded-lg text-sm font-medium 
                           hover:bg-orange-600 
                           transform hover:scale-95 
                           transition-all duration-300 w-full sm:w-auto"
              >
                Explore the experience
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start">
              <DownloadButtons />
            </div>

            <p className="text-[11px] text-gray-400">
              Available on iOS & Android
            </p>
          </div>
{/* RIGHT IMAGE */}
<div className="flex justify-center lg:justify-end">
  <img
    src="/logo1.jfif"
    alt="App preview"
    className="
      w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px]
      rounded-2xl
      shadow-2xl
      object-contain
      
      transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2 hover:rotate-3
      
      animate-float
    "
  />
</div>

        </div>
      </div>

      {/* Background blur */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
    </section>
  )
}