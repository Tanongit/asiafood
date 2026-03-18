import { client } from '@/sanity/lib/client'
import CarteClient from './CarteClient'

/**
 * Page /carte — Le menu du restaurant (Connecté à Sanity !)
 * URL : localhost:3000/carte
 */

// 1. La requête GROQ : On demande à Sanity de nous donner 
// toutes les catégories, et pour chacune d'elles, leurs plats rattachés.
const MENU_QUERY = `*[_type == "category"] | order(id asc) {
    _id,
    id,
    title,
    name,
    "dishes": *[_type == "dish" && references(^._id)] {
        _id,
        name,
        description,
        price,
        "imageUrl": image.asset->url
    }
}`

export default async function CartePage() {
    // 2. On exécute la requête sur le Cloud Vercel/Sanity (côté serveur très rapide)
    const categoriesFromSanity = await client.fetch(MENU_QUERY)

    // 3. On envoie les vraies données toutes propres au composant visuel
    return <CarteClient initialCategories={categoriesFromSanity} />
}

