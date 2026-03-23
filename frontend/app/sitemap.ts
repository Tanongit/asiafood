import { MetadataRoute } from 'next'

/**
 * Sitemap Officiel - Asia Food
 * Génère le plan du site pour informer le robot Google de l'existence des pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asiafood79.com'

  return [
    {
      // La Mère des pages (Page d'accueil)
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, 
    },
    {
      // La Fille des commandes (Page Menu)
      url: `${baseUrl}/carte`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Google viendra vérifier chaque jour si on a ajouté un plat
      priority: 0.9,
    },
  ]
}
