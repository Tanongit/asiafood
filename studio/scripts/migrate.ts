import { getCliClient } from 'sanity/cli'
import { menuCategories } from '../../frontend/app/carte/menuData'

// On récupère le client Sanity avec tes accès admin (via --with-user-token)
const client = getCliClient()

async function migrateMenu() {
    console.log('🚀 Début de la migration vers Sanity...')

    for (const category of menuCategories) {
        console.log(`\n📁 Création de la catégorie : ${category.name}`)

        // 1. Créer la catégorie dans Sanity
        const catDoc = {
            _type: 'category',
            _id: `category-${category.id}`, // On force l'ID pour pouvoir faire le lien facilement
            id: category.id,
            title: category.title,
            name: category.name,
        }

        // `createOrReplace` écrase s'il existe déjà, sinon le crée
        const createdCat = await client.createOrReplace(catDoc)
        console.log(`✅ Catégorie créée: ${createdCat.title}`)

        // 2. Créer tous les plats de cette catégorie
        for (const dish of category.dishes) {
            const dishDoc = {
                _type: 'dish',
                name: dish.name,
                price: dish.price,
                description: dish.description || '',
                category: {
                    _type: 'reference',
                    _ref: createdCat._id, // Relier le plat à la catégorie qu'on vient de créer
                },
            }

            await client.create(dishDoc)
            console.log(`  🍜 Plat ajouté : ${dish.name}`)
        }
    }

    console.log('\n🎉 Migration terminée avec succès ! Va vérifier ton Sanity Studio.')
}

migrateMenu().catch((err) => {
    console.error('❌ Erreur pendant la migration :', err)
    process.exit(1)
})
