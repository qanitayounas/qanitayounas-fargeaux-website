'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-700/20 bg-white backdrop-blur supports-[backdrop-filter]:bg-[#0d9488]/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d-kgNxZBOrvMI4HZzXn5iUr2IUNDMVDf.jpeg"
              alt="Fargeaux"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white font-poppins">
              Fargeaux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors font-inter"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Download Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:bg-white/10 hover:text-white font-inter"
            >
              <a href="/downloads/android.apk" download>
                Download for Android
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#f97316] hover:bg-[#f97316]/90 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all font-inter"
            >
              <a href="/downloads/ios.ipa" download>
                Download for iOS
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-teal-700/20">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/10 transition-all font-inter"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-teal-700/20">
              <Button
                variant="ghost"
                asChild
                className="w-full justify-center text-white hover:bg-white/10 hover:text-white rounded-xl font-inter"
              >
                <a href="/downloads/android.apk" download>
                  Download for Android
                </a>
              </Button>
              <Button
                asChild
                className="w-full justify-center bg-[#f97316] hover:bg-[#f97316]/90 text-white font-medium rounded-xl shadow-md font-inter"
              >
                <a href="/downloads/ios.ipa" download>
                  Download for iOS
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
