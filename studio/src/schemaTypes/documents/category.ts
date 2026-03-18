import { defineField, defineType } from 'sanity'

export const category = defineType({
    name: 'category',
    title: 'Catégorie de plats',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'ID de la catégorie',
            type: 'number',
            description: 'Numéro unique pour ordonner les catégories (ex: 1 pour Entrées, 2 pour Sushis, etc.)',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Nom de la catégorie (ex: Entrées, Plats Chauds)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Nom court de la catégorie (ex: Entrées, Sushis)',
            type: 'string',
            description: 'Ceci apparaîtra dans les petits boutons en haut de la page.',
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'id',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: `Ordre d'affichage : ${subtitle}`,
            }
        },
    },
})
