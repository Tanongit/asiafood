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
    ],
    preview: {
        prepare() {
            return {
                title: 'Modifier la Page d\'Accueil',
            }
        },
    },
})
