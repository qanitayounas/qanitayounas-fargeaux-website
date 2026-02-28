'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function IPhoneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Subtle 3D rotation on mouse move
  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rotateY = (x - 0.5) * 4
      const rotateX = -(y - 0.5) * 4

      containerRef.current!.style.transform =
        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform =
          `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`
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
    <div className="flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-72 transition-transform duration-300 ease-out"
        style={{ aspectRatio: '9 / 19.5', maxHeight: '600px' }}
      >
        {/* iPhone Frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[3rem] shadow-2xl overflow-hidden">
          
          {/* Chrome Bezel */}
          <div className="absolute inset-0 rounded-[3rem] border-[7px] border-gray-800 pointer-events-none z-30" />

          {/* Screen */}
          <div className="absolute inset-2.5 bg-white rounded-[2.5rem] overflow-hidden shadow-inner z-20">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-40 shadow-sm" />

            {/* Screen Content */}
            <div className="relative w-full h-full bg-white flex items-center justify-center">
              <Image
                src="/logo.jpeg"   // 👈 Make sure logo.png is inside /public
                alt="App Logo"
                fill
                className="object-contain p-10"
                priority
              />
            </div>

            {/* Bottom Speaker */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gray-900 rounded-full z-30" />
          </div>

          {/* Side Glossy Effect */}
          <div className="absolute top-24 -right-0.5 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent rounded-full z-20" />
        </div>

        {/* Drop Shadow */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-10 bg-black/15 rounded-full blur-2xl" />
      </div>
    </div>
  )
}
