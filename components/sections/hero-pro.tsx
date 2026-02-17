'use client'

import { Button } from '@/components/ui/button'
import IPhoneShowcase from '@/components/common/iphone-showcase'

const appScreens = [
  {
    id: 'home',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-T7GxGYN8Sy14RtGAJV76xr2MAvgBvb.jpeg',
    alt: 'Fargeaux Home Screen'
  },
  {
    id: 'flashcards',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b-vOx4dixMhLpC2ddMLj2FbLGbru04V2.jpeg',
    alt: 'Fargeaux Flashcards Screen'
  },
  {
    id: 'tests',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-cfxt8Qzx6QNaPHsEpOWMy5AZ9UiZhP.jpeg',
    alt: 'Fargeaux Theory Tests Screen'
  }
]

const DownloadButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 pt-6">
    {/* App Store */}
    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.365 1.43c-.61.715-1.3 1.72-1.077 2.736.745.045 1.657-.378 2.215-1.095.48-.603.844-1.472.716-2.345-.667.03-1.418.434-1.854.704zM12.96 4.07c-1.28 0-2.182.93-2.742.93-.562 0-1.435-.897-2.362-.874-1.21.024-2.33.708-2.948 1.793-1.263 2.23-.322 5.537.895 7.357.593.9 1.295 1.91 2.217 1.874.883-.037 1.22-.571 2.283-.571 1.058 0 1.374.571 2.314.555.954-.016 1.56-.92 2.15-1.82.677-1.004.96-1.975.972-2.03-.024-.01-1.858-.715-1.88-2.825-.017-1.737 1.503-2.573 1.57-2.61-.87-1.27-2.22-1.442-2.686-1.464-.97-.043-1.876.562-2.36.562z"/>
        </svg>
        <div className="leading-tight">
          <p className="text-[10px] opacity-70">Download on the</p>
          <p className="text-sm font-medium">App Store</p>
        </div>
      </div>
    </a>

    {/* Google Play */}
    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all">
        <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M325.3 234.3L104.1 12.1C97.1 5.1 87.6 1.8 78 1.8c-9.7 0-19.2 3.3-26.2 10.3-12.5 12.5-12.5 32.7 0 45.2l221.2 222.2L52 466.9c-12.5 12.5-12.5 32.7 0 45.2 7 7 16.5 10.3 26.2 10.3 9.6 0 19.1-3.3 26.1-10.3l221.2-222.2c12.5-12.5 12.5-32.7 0-45.1z"/>
        </svg>
        <div className="leading-tight">
          <p className="text-[10px] opacity-70">Get it on</p>
          <p className="text-sm font-medium">Google Play</p>
        </div>
      </div>
    </a>
  </div>
)

export default function HeroProSection() {
  return (
    <section className="relative bg-white pt-14 md:pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7 max-w-xl">

            {/* Thin Orange Gradient Line */}
            <div className="h-[1px] w-24 bg-gradient-to-r from-orange-300/40 via-orange-500/70 to-orange-300/40 mb-4" />

            <p className="text-primary text-xs tracking-widest uppercase font-medium">
              Road Rules Learning App
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-semibold text-gray-900 leading-tight">
  Learn Like a Local, <br className="hidden sm:block" />
  <span className="text-primary">Drive Safer</span>
</h1>


            <p className="text-gray-600 text-[15px] leading-relaxed">
              Flashcards, training maps, and contextual feedback designed to help
              you understand road rules abroad — calmly, clearly, and confidently.
            </p>

            {/* Stats (subtle, editorial) */}
            <div className="flex gap-10 pt-3">
              <div>
                <p className="text-lg font-semibold text-primary">424</p>
                <p className="text-xs text-gray-500">Cards</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary">26</p>
                <p className="text-xs text-gray-500">Modules</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary">40%</p>
                <p className="text-xs text-gray-500">Safer</p>
              </div>
            </div>

            {/* Primary Action */}
            <div className="pt-5">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 px-6 py-5 rounded-lg text-sm font-medium hover:bg-gray-50 hover:scale-105 transition-transform duration-300"
              >
                Explore the experience
              </Button>
            </div>

            <DownloadButtons />

            <p className="text-[11px] text-gray-400 pt-1">
              Available on iOS & Android
            </p>
          </div>

          {/* RIGHT – Phone (3D) */}
          <div className="flex justify-center items-center">
            <div
              className="
                relative
                scale-[0.88]
                md:scale-[0.82]
                transform-gpu
                [transform:perspective(1200px)_rotateY(-12deg)_rotateX(6deg)_translateY(-6px)]
                transition-transform
                duration-700
                ease-out
              "
            >
              {/* Ambient depth shadow */}
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] blur-2xl bg-black/10 translate-y-10 scale-95" />

              <IPhoneShowcase
                screens={appScreens}
                autoPlay
                interval={5000}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
    </section>
  )
}
