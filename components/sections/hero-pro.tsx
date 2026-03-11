'use client'

import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const DownloadButtons = () => (
  <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 pt-6 w-full md:w-auto">
    {/* App Store */}
    <div className="group relative flex-1 max-w-[160px] sm:max-w-[180px] cursor-default">
      <div className="relative flex items-center gap-2 bg-black text-white px-4 py-3 sm:px-5 sm:py-3 rounded-lg shadow-md transition-all duration-300 w-full justify-center lg:justify-start overflow-hidden">
        <FaApple className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <div className="text-left">
          <p className="text-[10px] sm:text-[11px] opacity-70 leading-none">Download on the</p>
          <p className="text-sm sm:text-base font-semibold whitespace-nowrap leading-tight">App Store</p>
        </div>
        {/* Coming Soon overlay */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/85 text-white text-[10px] sm:text-sm font-bold tracking-widest uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Coming Soon
        </span>
      </div>
    </div>

    {/* Google Play */}
    <div className="group relative flex-1 max-w-[160px] sm:max-w-[180px] cursor-default">
      <div className="relative flex items-center gap-2 bg-black text-white px-4 py-3 sm:px-5 sm:py-3 rounded-lg shadow-md transition-all duration-300 w-full justify-center lg:justify-start overflow-hidden">
        <FaGooglePlay className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <div className="text-left">
          <p className="text-[10px] sm:text-[11px] opacity-70 leading-none">Get it on</p>
          <p className="text-sm sm:text-base font-semibold whitespace-nowrap leading-tight">Google Play</p>
        </div>
        {/* Coming Soon overlay */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/85 text-white text-[10px] sm:text-sm font-bold tracking-widest uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Coming Soon
        </span>
      </div>
    </div>
  </div>
);

export default function HeroProSection() {

  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white pt-16 md:pt-24 pb-24 md:pb-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            <div className="h-[1px] w-20 mx-auto lg:mx-0 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

            <p className="text-primary text-sm sm:text-base tracking-widest uppercase font-medium">
              Road Rules Learning App
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
              Learn Like a Local,
              <br className="hidden md:block" />
              <span className="text-primary"> Drive Safer</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Flashcards, training maps, and contextual feedback designed to help
              you understand road rules abroad - calmly, clearly, and confidently.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-6 sm:gap-10 pt-3">
              {[{ value: '424', label: 'Cards' }, { value: '26', label: 'Modules' }].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm sm:text-base text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <Button className="bg-orange-500 text-white px-6 py-4 md:px-7 md:py-5 rounded-lg text-base md:text-lg font-medium hover:bg-orange-600 transition-all duration-300">
                Explore the experience
              </Button>
            </div>

            <DownloadButtons />

            <p className="text-[12px] sm:text-sm text-gray-400 mt-2">
              Available on iOS & Android
            </p>
          </div>

          {/* RIGHT IMAGE WITH PARALLAX */}
          <div
            className="flex justify-center lg:justify-end transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          >
            <img
              src="/logo1.png"
              alt="Fargeaux"
              className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px]
              rounded-2xl object-contain transition-all duration-500
              hover:scale-105"
            />
          </div>

        </div>
      </div>

      {/* 👇 CLICKABLE SCROLL ARROW */}
      <div
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center group"
      >
        <span className="text-xs text-gray-400 mb-2 opacity-0 group-hover:opacity-100 transition">
          Scroll Down
        </span>

        <ChevronDown
          size={36}
          className="text-primary animate-bounce group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Soft gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* Background blur */}
      <div className="absolute top-0 right-0 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-primary/5 blur-3xl rounded-full -z-10" />

    </section>
  )
}