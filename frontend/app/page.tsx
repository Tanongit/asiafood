import LandingHeader from '@/app/components/LandingHeader'
import ImageCarousel from '@/app/components/ImageCarousel'

export default function Page() {
  return (
    <>
      {/* Header */}
      <LandingHeader />

      {/* Spacer pour le header fixe */}
      <div className="h-20" />

      {/* Hero Section (placeholder pour l'instant) */}
      <section className="bg-gray-100 min-h-[60vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-400">
          Hero Section (à venir)
        </h1>
      </section>

      {/* Carousel Section */}
      <ImageCarousel />
    </>
  )
}
