import LandingHeader from '@/app/components/LandingHeader'
import ImageCarousel from '@/app/components/ImageCarousel'
import HeroSection from '@/app/components/HeroSection'

export default function Page() {
  return (
    <>
      {/* Header */}
      <LandingHeader />

      {/* Spacer pour le header fixe */}
      <div className="h-20" />

      {/* Hero Section */}
      <HeroSection />

      {/* Carousel Section */}
      <ImageCarousel />
    </>
  )
}
