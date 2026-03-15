/**
 * Engagements - Section "Nos Engagements"
 * 4 piliers avec icône, titre et description courte.
 * id="engagements" → permet le lien #engagements depuis le footer.
 *
 * 📝 Pour modifier : change le tableau `engagements` ci-dessous.
 */

import { ChefHat, Leaf, Truck, Soup } from 'lucide-react'

const engagements = [
    {
        id: 1,
        icon: ChefHat,
        label: 'Fait Maison',
        description: 'Chaque plat est préparé sur place, avec soin, comme à la maison.',
    },
    {
        id: 2,
        icon: Leaf,
        label: 'Produits Frais',
        description: 'Des ingrédients sélectionnés chaque jour pour vous servir ce qu\'il y a de mieux.',
    },
    {
        id: 3,
        icon: Soup,
        label: 'Recettes Authentiques',
        description: 'Des saveurs fidèles à la tradition, héritées de 30 ans de cuisine asiatique.',
    },
    {
        id: 4,
        icon: Truck,
        label: 'Livraison Rapide',
        description: 'Chaud, frais, livré directement chez vous. Commandez en quelques clics.',
    },
]

export default function Engagements() {
    return (
        // id="engagements" → ancre pour le lien footer "Nos engagements"
        <section id="engagements" className="py-20" style={{ backgroundColor: '#eed6c2' }}>
            <div className="container mx-auto px-6">

                {/* ── En-tête ── */}
                <div className="text-center mb-14">
                    <p
                        className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
                        style={{ color: '#63483d99' }}
                    >
                        Ce qui nous définit
                    </p>
                    <h2
                        className="text-2xl md:text-3xl font-bold uppercase tracking-wider"
                        style={{ color: '#63483d' }}
                    >
                        Nos Engagements
                    </h2>
                    {/* Ligne dorée décorative */}
                    <div
                        className="w-12 h-0.5 mx-auto mt-5"
                        style={{ backgroundColor: '#F7C815' }}
                    />
                </div>

                {/* ── Grille 4 engagements ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                    {engagements.map((item) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Cercle derrière l'icône */}
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: '#63483d15' }}
                                >
                                    <Icon
                                        size={36}
                                        strokeWidth={1.5}
                                        style={{ color: '#63483d' }}
                                    />
                                </div>

                                {/* Titre */}
                                <p
                                    className="text-sm font-bold uppercase tracking-wide mb-2"
                                    style={{ color: '#63483d' }}
                                >
                                    {item.label}
                                </p>

                                {/* Description */}
                                <p
                                    className="text-xs leading-relaxed"
                                    style={{ color: '#63483d99' }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
