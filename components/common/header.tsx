'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMissionOpen, setIsMissionOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/paceometer', label: 'Paceometer' },
    { href: '/driving-tips', label: 'Driving Tips' },
    { href: '/giving-back', label: 'Giving Back' },
    { href: '/pioneers', label: 'Safety Pioneers' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  const missionLinks = [
    { href: '/about', label: 'About' },
    { href: '/giving-back', label: 'Giving Back' },
    { href: '/pioneers', label: 'Safety Pioneers' },
  ]

  const featuresLinks = [
    { href: '/paceometer', label: 'Paceometer' },
    { href: '/driving-tips', label: 'Driving Tips' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#334155]/95 backdrop-blur-lg font-poppins text-white">
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
            <span className="text-lg font-bold text-white tracking-wide">
              Fargeaux
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4 font-poppins">
            
            {/* Mission Dropdown */}
            <div 
              onMouseEnter={() => setIsMissionOpen(true)}
              onMouseLeave={() => setIsMissionOpen(false)}
            >
              <DropdownMenu open={isMissionOpen} onOpenChange={setIsMissionOpen}>
                <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors outline-none cursor-default">
                  Mission <ChevronDown size={14} className={`opacity-50 transition-transform duration-200 ${isMissionOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-[#334155] border-white/10 text-white min-w-[180px] backdrop-blur-lg"
                  onMouseEnter={() => setIsMissionOpen(true)}
                >
                  {missionLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={`w-full cursor-pointer transition-colors ${pathname === link.href ? 'text-[#0d9488] bg-white/5' : 'hover:bg-white/5'}`}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Features Dropdown */}
            <div 
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              <DropdownMenu open={isFeaturesOpen} onOpenChange={setIsFeaturesOpen}>
                <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors outline-none cursor-default">
                  Features <ChevronDown size={14} className={`opacity-50 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-[#334155] border-white/10 text-white min-w-[180px] backdrop-blur-lg"
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                >
                  {featuresLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={`w-full cursor-pointer transition-colors ${pathname === link.href ? 'text-[#0d9488] bg-white/5' : 'hover:bg-white/5'}`}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Link
              href="/pricing"
              className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === '/pricing' ? 'text-[#0d9488]' : 'text-white/90 hover:text-white'}`}
            >
              Pricing
            </Link>
            
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === '/contact' ? 'text-[#0d9488]' : 'text-white/90 hover:text-white'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Android */}
            <Button
              variant="ghost"
              className="group relative font-normal text-white hover:bg-white/10 hover:text-white rounded-xl h-9"
            >
              <span className="invisible px-4">Android</span>
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                Android
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                Coming Soon
              </span>
            </Button>

            {/* Download */}
            <Button
              className="group relative font-normal bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all h-9"
            >
              <span className="invisible px-4">Download App</span>
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 whitespace-nowrap">
                Download App
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                Coming Soon
              </span>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-5 border-t border-white/10 mt-3 space-y-2 bg-[#334155] font-poppins text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-normal tracking-wide transition
                  ${isActive
                      ? 'bg-[#0d9488]/20 text-[#0d9488]'
                      : 'text-white/90 hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-4 px-3">

              {/* Android Mobile Button */}
              <Button
                variant="outline"
                className="w-full font-normal bg-orange-500 hover:bg-orange-600 text-white border-transparent rounded-xl"
              >
                Android (Coming Soon)
              </Button>

              {/* Download Mobile Button */}
              <Button
                className="w-full font-normal bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
              >
                Download App (Coming Soon)
              </Button>

            </div>
          </div>
        )}
      </div>
    </header>
  )
}