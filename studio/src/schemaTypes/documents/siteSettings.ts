import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Paramètres du Site (Accueil)',
    type: 'document',
    fields: [
        defineField({
            name: 'restaurantName',
            title: 'Nom du Restaurant (Gros Titre Accueil)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Sous-titre (Sous le gros titre)',
            type: 'string',
        }),
        defineField({
            name: 'heroVideoUrl',
            title: 'Lien de la Vidéo de fond (Optionnel, ex: /videos/hero.mp4)',
            type: 'string',
            description: 'Laisse vide si tu préfères utiliser une image fixe.',
        }),
        defineField({
            name: 'heroImage',
            title: 'Image de fond (Si pas de vidéo)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'aboutText',
            title: 'Texte Notre Histoire',
            type: 'text',
        }),
        defineField({
            name: 'instagramUrl',
            title: 'Lien du compte Instagram',
            type: 'url',
            description: 'Ex: https://www.instagram.com/asiafoodnice',
        }),
        defineField({
            name: 'socialImages',
            title: 'Photos pour la section Instagram',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (rule) => rule.max(4),
            description: 'Ajoute jusqu\'à 4 photos pour la grille "Suivez-nous".',
        }),
        defineField({
            name: 'featuredDishes',
            title: 'Plats Stars (Carousel)',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'dish' }],
                },
            ],
            validation: (rule) => rule.max(4),
            description: 'Sélectionne 4 plats qui apparaitront dans le carousel "NOS PLATS STARS".',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Modifier la Page d\'Accueil',
            }
        },
    },
})
