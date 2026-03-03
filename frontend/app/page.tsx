import ImageCarousel from '@/app/components/ImageCarousel'
import HeroSection from '@/app/components/HeroSection'
import Engagements from '@/app/components/Engagements'
import CTABanner from '@/app/components/CTABanner'
import MarqueeBanner from '@/app/components/MarqueeBanner'

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

      {/* Bandeau CTA */}
      <CTABanner />
    </>
  )
}
