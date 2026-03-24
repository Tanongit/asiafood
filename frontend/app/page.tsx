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
  seoCuisine,
  seoPrice,
  aboutQuote,
  aboutText,
  aboutImage,
  marqueeText,
  instagramUrl,
  locationAddress,
  locationPhone,
  locationHours,
  locationGoogleUrl,
  locationMapEmbed,
  "socialPostsData": socialPosts[] {
    "imageUrl": image.asset->url,
    caption
  },
  "featuredDishesData": featuredDishes[]->{
    _id,
    name,
    description,
    "imageUrl": image.asset->url
  }
}`

// ⚠️ Permet à Vercel de mettre à jour le site public automatiquement toutes les 60 secondes si Sanity change
export const revalidate = 60;

export default async function Page() {
  // Téléchargement des paramètres de la page d'accueil depuis Sanity
  const settings = await client.fetch(SETTINGS_QUERY)

  // 🤖 SEO MOTEUR CACHÉ : Injection des "Données Structurées" pour l'Algorithme Google Maps !
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: settings?.restaurantName || 'Restaurant Asiatique',
    image: settings?.heroImageUrl || '',
    telephone: settings?.locationPhone || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings?.locationAddress || '',
      addressLocality: 'Nice',
      addressCountry: 'FR',
    },
    servesCuisine: settings?.seoCuisine || 'Restaurant Asiatique',
    priceRange: settings?.seoPrice || '€€',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section connectée aux données Sanity */}
      <HeroSection settings={settings} />

      {/* Bandeau défilant connecté */}
      <MarqueeBanner settings={settings} />

      {/* Nos Engagements */}
      <Engagements />

      {/* Carousel Section connecté */}
      <ImageCarousel settings={settings} />

      {/* Notre Histoire connectée */}
      <AboutSection settings={settings} />

      {/* Réseaux sociaux connectés */}
      <SocialSection settings={settings} />

      {/* Nous Trouver */}
      <LocationSection settings={settings} />

      {/* Bandeau CTA */}
      <CTABanner />
    </>
  )
}
