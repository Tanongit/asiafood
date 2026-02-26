import LandingHeader from '@/app/components/LandingHeader'
import ImageCarousel from '@/app/components/ImageCarousel'
import HeroSection from '@/app/components/HeroSection'
import Engagements from '@/app/components/Engagements'
import CTABanner from '@/app/components/CTABanner'
import Footer from '@/app/components/Footer'

export default function Page() {
  return (
    <>
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* Nos Engagements */}
      <Engagements />

      {/* Carousel Section */}
      <ImageCarousel />

      {/* Bandeau CTA */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </>
  )
}
