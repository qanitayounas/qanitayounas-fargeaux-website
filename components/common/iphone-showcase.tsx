'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

interface IPhoneShowcaseProps {
  screens: Array<{
    id: string
    src: string
    alt: string
  }>
  autoPlay?: boolean
  interval?: number
}

export default function IPhoneShowcase({ 
  screens, 
  autoPlay = true, 
  interval = 5000 
}: IPhoneShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate screens
  useEffect(() => {
    if (!autoPlay || isHovered) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, screens.length, interval, isHovered])

  // Subtle 3D rotation on mouse move
  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rotateY = (x - 0.5) * 4
      const rotateX = -(y - 0.5) * 4

      containerRef.current!.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
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
    <div 
      className="flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={containerRef}
        className="relative w-72 h-full transition-transform duration-300 ease-out"
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
            <div className="relative w-full h-full bg-white overflow-hidden">
              {screens.map((screen, idx) => (
                <div
                  key={screen.id}
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: idx === currentIndex ? 1 : 0 }}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover"
                    priority={idx === currentIndex}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Speaker */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gray-900 rounded-full z-30" />
          </div>

          {/* Side Glossy Effect */}
          <div className="absolute top-24 -right-0.5 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent rounded-full z-20" />
        </div>

        {/* Drop Shadow */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-10 bg-black/15 rounded-full blur-2xl" />

        {/* Screen Indicators - Mobile only */}
        {screens.length > 1 && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {screens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Screen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
