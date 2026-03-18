import { client } from '@/sanity/lib/client'
import ImageCarousel from '@/app/components/ImageCarousel'
import HeroSection from '@/app/components/HeroSection'
import Engagements from '@/app/components/Engagements'
import CTABanner from '@/app/components/CTABanner'
import MarqueeBanner from '@/app/components/MarqueeBanner'
import AboutSection from '@/app/components/AboutSection'
import LocationSection from '@/app/components/LocationSection'
import SocialSection from '@/app/components/SocialSection'

const SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  restaurantName,
  heroSubtitle,
  heroVideoUrl,
  "heroImageUrl": heroImage.asset->url,
  aboutText,
  instagramUrl,
  "socialImagesUrls": socialImages[].asset->url,
  "featuredDishesData": featuredDishes[]->{
    _id,
    name,
    description,
    "imageUrl": image.asset->url
  }
}`

export default async function Page() {
  // Téléchargement des paramètres de la page d'accueil depuis Sanity
  const settings = await client.fetch(SETTINGS_QUERY)

  return (
    <>
      {/* Hero Section connectée aux données Sanity */}
      <HeroSection settings={settings} />

      {/* Bandeau défilant */}
      <MarqueeBanner />

      {/* Nos Engagements */}
      <Engagements />

      {/* Carousel Section connecté */}
      <ImageCarousel settings={settings} />

      {/* Notre Histoire */}
      <AboutSection />

      {/* Réseaux sociaux connectés */}
      <SocialSection settings={settings} />

      {/* Nous Trouver */}
      <LocationSection />

      {/* Bandeau CTA */}
      <CTABanner />
    </>
  )
}
