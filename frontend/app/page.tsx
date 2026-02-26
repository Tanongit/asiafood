import ImageCarousel from '@/app/components/ImageCarousel'
import HeroSection from '@/app/components/HeroSection'
import Engagements from '@/app/components/Engagements'
import CTABanner from '@/app/components/CTABanner'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Nos Engagements */}
      <Engagements />

      {/* Carousel Section */}
      <ImageCarousel />

      {/* Bandeau CTA */}
      <CTABanner />
    </>
  )
}
