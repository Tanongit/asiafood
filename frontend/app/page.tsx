import ImageCarousel from '@/app/components/ImageCarousel'
import HeroSection from '@/app/components/HeroSection'
import Engagements from '@/app/components/Engagements'
import CTABanner from '@/app/components/CTABanner'
import MarqueeBanner from '@/app/components/MarqueeBanner'
import AboutSection from '@/app/components/AboutSection'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Bandeau défilant */}
      <MarqueeBanner />

      {/* Nos Engagements */}
      <Engagements />

      {/* Carousel Section */}
      <ImageCarousel />

      {/* Notre Histoire */}
      <AboutSection />

      {/* Bandeau CTA */}
      <CTABanner />
    </>
  )
}
