import HeroProSection from '@/components/sections/hero-pro'
import ProblemProSection from '@/components/sections/problem-pro'
import FeaturesProSection from '@/components/sections/features-pro'
import HowItWorks from '@/components/sections/how-it-works'
import BenefitsSection from '@/components/sections/benefits-section'
import CTASection from '@/components/sections/cta-section'

export default function Home() {
  return (
    <>
      <HeroProSection />
      <ProblemProSection />
      <HowItWorks />
      <FeaturesProSection />
     
      <BenefitsSection />
      <CTASection />
    </>
  )
}
