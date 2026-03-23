import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/studio/', // Empêche Google de crawler l'administration
        },
        sitemap: 'https://asiafood79.com/sitemap.xml',
    }
}
