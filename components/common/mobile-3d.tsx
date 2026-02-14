'use client'

import { useEffect, useRef } from 'react'

interface Mobile3DProps {
  title?: string
  subtitle?: string
  stats?: Array<{ value: string; label: string }>
  features?: string[]
}

export default function Mobile3D({ 
  title = "Master Road Rules", 
  subtitle = "Learn before you drive",
  stats = [
    { value: "424", label: "Flashcards" },
    { value: "26", label: "Modules" },
    { value: "40%", label: "Safer" }
  ],
  features = [
    "Interactive flashcards",
    "Training maps",
    "Crash risk alerts"
  ]
}: Mobile3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      // Reduced rotation angles - much more subtle
      const rotateY = (x - 0.5) * 6
      const rotateX = -(y - 0.5) * 6
      
      containerRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Phone Body */}
        <div className="relative w-72 h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[3rem] shadow-2xl overflow-hidden" style={{
          aspectRatio: '9 / 19.5',
          maxHeight: '600px'
        }}>
          {/* Chrome Bezel */}
          <div className="absolute inset-0 rounded-[3rem] border-[7px] border-gray-800 pointer-events-none" />
          
          {/* Screen */}
          <div className="absolute inset-2.5 bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
            {/* Notch - iPhone style */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20 shadow-sm" />

            {/* Screen Content */}
            <div className="h-full flex flex-col bg-white relative">
              {/* Status Bar */}
              <div className="bg-white px-5 py-1.5 flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-900">10:02</span>
                <div className="flex gap-1 text-gray-600">
                  <span>📶</span>
                  <span>📡</span>
                  <span className="bg-gray-900 text-white rounded-full px-1.5 text-[10px]">9</span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
                {/* Greeting */}
                <div className="space-y-1">
                  <p className="text-gray-500 text-xs">Good evening,</p>
                  <div className="flex items-center justify-between">
                    <p className="font-poppins font-bold text-gray-900 text-lg">Tester new 👋</p>
                    <div className="w-7 h-7 bg-gray-300 rounded-lg" />
                  </div>
                </div>

                {/* Course Card */}
                <div className="bg-cyan-100 rounded-2xl p-4 space-y-3 border border-cyan-200">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-2xl">🇬🇧</p>
                      <p className="font-poppins font-bold text-gray-900 text-sm">UK Driving Theory</p>
                      <p className="text-xs text-gray-600">Master the rules of the road</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  </div>
                  <div className="flex gap-8 pt-1">
                    <div className="text-center">
                      <p className="font-poppins font-bold text-primary text-lg">0</p>
                      <p className="text-[10px] text-primary">Modules</p>
                    </div>
                    <div className="text-center">
                      <p className="font-poppins font-bold text-primary text-lg">0</p>
                      <p className="text-[10px] text-primary">Cards</p>
                    </div>
                  </div>
                </div>

                {/* Your Progress */}
                <div className="space-y-3">
                  <p className="font-poppins font-bold text-gray-900 text-sm">Your Progress</p>
                  <div className="flex gap-2.5">
                    {/* Completed */}
                    <div className="flex-1 bg-primary rounded-2xl p-3 text-white text-center space-y-1.5">
                      <p className="text-lg">✓</p>
                      <p className="font-bold text-xl">0</p>
                      <p className="text-[10px]">Completed</p>
                    </div>
                    {/* In Progress */}
                    <div className="flex-1 bg-gray-100 rounded-2xl p-3 text-center space-y-1.5">
                      <div className="flex justify-center">
                        <div className="w-6 h-6 bg-cyan-300 rounded-full flex items-center justify-center text-xs text-cyan-700">+</div>
                      </div>
                      <p className="font-bold text-xl text-gray-900">0</p>
                      <p className="text-[10px] text-gray-600"></p>
                    </div>
                    {/* Stars */}
                    <div className="flex-1 bg-gray-100 rounded-2xl p-3 text-center space-y-1.5">
                      <p className="text-lg">⭐</p>
                      <p className="font-bold text-xl text-amber-500">0</p>
                      <p className="text-[10px] text-gray-600"></p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <p className="font-poppins font-bold text-gray-900 text-sm">Quick Actions</p>
                  <div className="bg-cyan-100 rounded-2xl p-4 flex items-center gap-3 border border-cyan-200">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-poppins font-semibold text-gray-900 text-xs">Continue Learning</p>
                      <p className="text-[10px] text-gray-600">Start a module</p>
                    </div>
                    <span className="text-gray-400 flex-shrink-0">›</span>
                  </div>
                </div>

                {/* Spacing for bottom nav */}
                <div className="h-12" />
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-0 py-2 flex justify-around items-center">
                <div className="text-center space-y-0.5 flex-1">
                  <p className="text-base">🏠</p>
                  <p className="text-primary font-semibold text-[10px]">Home</p>
                </div>
                <div className="text-center space-y-0.5 flex-1 text-gray-400">
                  <p className="text-base">📚</p>
                  <p className="text-[10px]">Learn</p>
                </div>
                <div className="text-center space-y-0.5 flex-1 text-gray-400">
                  <p className="text-base">🗑️</p>
                  <p className="text-[10px]">Library</p>
                </div>
                <div className="text-center space-y-0.5 flex-1 text-gray-400">
                  <p className="text-base">🎮</p>
                  <p className="text-[10px]">Practice</p>
                </div>
                <div className="text-center space-y-0.5 flex-1 text-gray-400">
                  <p className="text-base">👤</p>
                  <p className="text-[10px]">Profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Glossy Effect */}
          <div className="absolute top-24 -right-0.5 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
          
          {/* Bottom Speaker */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gray-900 rounded-full" />
        </div>

        {/* Drop Shadow */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-10 bg-black/15 rounded-full blur-2xl" />
      </div>
    </div>
  )
}
