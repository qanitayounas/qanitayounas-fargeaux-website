'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#334155]/95 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/assets/logo.png"
              alt="Fargeaux"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold text-white">
              Fargeaux
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group text-sm font-medium transition-all
                    ${isActive ? 'text-teal-400' : 'text-white/90 hover:text-white'}
                  `}
                >
                  {link.label}

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-teal-400 transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <a href="/downloads/android.apk" download>
                Android
              </a>
            </Button>

            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <a href="/downloads/ios.ipa" download>
                Download App
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-5 border-t border-white/10 mt-3 space-y-2 bg-[#334155]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition
                    ${isActive
                      ? 'bg-teal-500/20 text-teal-400'
                      : 'text-white/90 hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-4">
              <Button asChild variant="outline" className="w-full rounded-xl text-white border-white/20">
                <a href="/downloads/android.apk" download>Android</a>
              </Button>

              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                <a href="/downloads/ios.ipa" download>Download App</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}