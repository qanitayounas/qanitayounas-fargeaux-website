import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
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

export default function HeroProSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen md:min-h-auto md:py-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-3">
              <p className="text-primary font-semibold text-sm md:text-base tracking-wide uppercase">
                Master Road Rules Before You Drive
              </p>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Learn Like a Local, <span className="text-primary">Drive Safer</span>
              </h1>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              Interactive flashcards, real-world training maps, and instant feedback. Master foreign road rules with 424 cards across 26 modules before your first drive.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div>
                <p className="font-poppins font-bold text-2xl md:text-3xl text-primary">424</p>
                <p className="text-gray-600 text-xs md:text-sm">Flashcards</p>
              </div>
              <div>
                <p className="font-poppins font-bold text-2xl md:text-3xl text-primary">26</p>
                <p className="text-gray-600 text-xs md:text-sm">Modules</p>
              </div>
              <div>
                <p className="font-poppins font-bold text-2xl md:text-3xl text-primary">40%</p>
                <p className="text-gray-600 text-xs md:text-sm">Safer Driving</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-[#0d7a70] text-white font-semibold py-6 rounded-lg text-base flex items-center justify-center gap-2">
                Start Free 24-Hour Trial
                <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-6 rounded-lg text-base"
              >
                View Features
              </Button>
            </div>

         
          </div>

          {/* Right: iPhone Showcase */}
          <div className="flex justify-center items-center order-1 lg:order-2 min-h-screen md:min-h-auto">
            <IPhoneShowcase screens={appScreens} autoPlay={true} interval={5000} />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
