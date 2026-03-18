import { defineField, defineType } from 'sanity'

export const dish = defineType({
    name: 'dish',
    title: 'Plat',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom du plat (ex: Pad Thaï)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Prix (ex: 12.50€)',
            type: 'string', // Type string car on a besoin du symbole €
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Les ingrédients ou détails du plat',
        }),
        defineField({
            name: 'image',
            title: 'Photo du plat',
            type: 'image',
            options: {
                hotspot: true, // Permet de recadrer l'image dans Sanity
            },
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'reference',
            to: [{ type: 'category' }], // Le plat doit être rattaché à une catégorie existante !
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'price',
            media: 'image',
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle,
                media,
            }
        },
    },
})
