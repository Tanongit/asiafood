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
            name: 'marqueeText',
            title: '2. Texte Bandelette Défilante',
            type: 'string',
            description: 'Texte du bandeau rouge (ex: L\'ASIE A DES TRÉSORS, ON LES MET DANS VOS BOLS ✦).',
        }),
        defineField({
            name: 'featuredDishes',
            title: '3. Plats Stars (Carousel)',
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
        defineField({
            name: 'aboutQuote',
            title: '4a. Citation / Sous-titre Notre Histoire',
            type: 'string',
            description: 'Ex: Trente ans de passion cuisinée avec amour.',
        }),
        defineField({
            name: 'aboutText',
            title: '4b. Texte Notre Histoire',
            type: 'text',
        }),
        defineField({
            name: 'aboutImage',
            title: '4c. Photo Notre Histoire',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'instagramUrl',
            title: '5. Lien du compte Instagram',
            type: 'url',
            description: 'Ex: https://www.instagram.com/asiafoodnice',
        }),
        defineField({
            name: 'socialPosts',
            title: '6. Photos pour la section Instagram',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
                    { name: 'caption', title: 'Texte sous la photo (optionnel)', type: 'string' },
                ]
            }],
            validation: (rule) => rule.max(4),
            description: 'Ajoute jusqu\'à 4 photos avec leur texte.',
        }),
        defineField({
            name: 'locationAddress',
            title: '7a. Adresse du restaurant',
            type: 'string',
        }),
        defineField({
            name: 'locationPhone',
            title: '7b. Numéro de téléphone',
            type: 'string',
        }),
        defineField({
            name: 'locationHours',
            title: '7c. Horaires d\'ouverture',
            type: 'string',
            description: 'Ex: Ouvert 7j/7  ·  11h – 21h',
        }),
        defineField({
            name: 'locationGoogleUrl',
            title: '7d. Lien direct vers la fiche Google Maps',
            type: 'url',
            description: 'Le lien du bouton "Ouvrir dans Google Maps',
        }),
        defineField({
            name: 'locationMapEmbed',
            title: '7e. Lien direct d\'intégration Google Map (Embed)',
            type: 'string',
            description: 'Le lien caché qui affiche la carte. (Voir tuto Google Maps Embed)',
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
