import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Facebook, Instagram } from "lucide-react"

export default function FooterPro() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="Fargeaux"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-poppins font-bold text-lg text-white group-hover:text-[#0d9488] transition-colors">
                Fargeaux
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Master foreign road rules before you drive. Learn safer with interactive flashcards and real time brain training.
            </p>

            {/* Social Section */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                Follow Us
              </p>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/fargeaux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0d9488] transition-colors"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://facebook.com/fargeauxapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0d9488] transition-colors"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://instagram.com/fargeaux.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0d9488] transition-colors"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="mailto:contact@fargeaux.com"
                  className="text-gray-400 hover:text-[#0d9488] transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-start md:justify-end">
            <div>
              <h3 className="font-poppins font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Important Links
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-[#0d9488] transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-[#0d9488] transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pioneers"
                    className="text-gray-400 hover:text-[#0d9488] transition-colors text-sm"
                  >
                    Safety Pioneers
                  </Link>
                </li>

                <li>
                  <Link
                    href="/refund"
                    className="text-gray-400 hover:text-[#0d9488] transition-colors text-sm"
                  >
                    Refund Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-[#0d9488] transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Fargeaux. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Made with care for safe drivers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}