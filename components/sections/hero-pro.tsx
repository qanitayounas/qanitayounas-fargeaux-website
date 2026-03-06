'use client'

import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const DownloadButtons = () => (
  <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 pt-6 w-full md:w-auto">
    {/* App Store */}
    <div className="group relative flex-1 max-w-[160px] sm:max-w-[180px] cursor-default">
      <div className="relative flex items-center gap-2 bg-black text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-md transition-all duration-300 w-full justify-center lg:justify-start overflow-hidden">
        <FaApple className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <div className="text-left">
          <p className="text-[9px] sm:text-[10px] opacity-70 leading-none">Download on the</p>
          <p className="text-xs sm:text-sm font-semibold whitespace-nowrap leading-tight">App Store</p>
        </div>
        {/* Coming Soon overlay */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/85 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Coming Soon
        </span>
      </div>
    </div>

    {/* Google Play */}
    <div className="group relative flex-1 max-w-[160px] sm:max-w-[180px] cursor-default">
      <div className="relative flex items-center gap-2 bg-black text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-md transition-all duration-300 w-full justify-center lg:justify-start overflow-hidden">
        <FaGooglePlay className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <div className="text-left">
          <p className="text-[9px] sm:text-[10px] opacity-70 leading-none">Get it on</p>
          <p className="text-xs sm:text-sm font-semibold whitespace-nowrap leading-tight">Google Play</p>
        </div>
        {/* Coming Soon overlay */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/85 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    <section className="relative bg-white pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            <div className="h-[1px] w-20 mx-auto lg:mx-0 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40" />

            <p className="text-primary text-xs tracking-widest uppercase font-medium">
              Road Rules Learning App
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
              Learn Like a Local,
              <br className="hidden md:block" />
              <span className="text-primary"> Drive Safer</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              Flashcards, training maps, and contextual feedback designed to help
              you understand road rules abroad — calmly, clearly, and confidently.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 pt-2">
              {[
                { value: '424', label: 'Cards' },
                { value: '26', label: 'Modules' },
                { value: '40%', label: 'Safer' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold text-primary">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Button className="bg-orange-500 text-white px-5 py-3 md:px-6 md:py-5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all duration-300">
                Explore the experience
              </Button>
            </div>

            <DownloadButtons />

            <p className="text-[11px] text-gray-400">
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
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px]
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
          size={32}
          className="text-primary animate-bounce group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Soft gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* Background blur */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-3xl rounded-full -z-10" />

    </section>
  )
}