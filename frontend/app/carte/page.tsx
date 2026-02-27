'use client'

/**
 * Page /carte — Le menu du restaurant
 * URL : localhost:3000/carte
 *
 * 'use client' car on utilise useState pour suivre
 * quelle catégorie est sélectionnée dans la navigation.
 */

import { useState } from 'react'
import { menuCategories } from './menuData'

export default function CartePage() {
    // La catégorie sélectionnée (par défaut : la première, "Entrées")
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

    return (
        <div style={{ backgroundColor: '#eed6c2', minHeight: '100vh' }} className="pt-20">

            {/* ── Barre de navigation par catégorie ── */}
            {/* Elle reste collée en haut quand on scrolle (sticky) */}
            <nav
                className="sticky top-20 z-30 border-b"
                style={{ backgroundColor: '#eed6c2', borderColor: '#d4b8a0' }}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-center gap-3 flex-wrap">
                        {/* On boucle sur les catégories pour créer un onglet chacune */}
                        {menuCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id)
                                    const section = document.getElementById(`category-${cat.id}`)
                                    if (section) {
                                        const offset = 160
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset
                                        window.scrollTo({ top, behavior: 'smooth' })
                                    }
                                }}
                                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeCategory === cat.id
                                    ? 'text-white shadow-md'
                                    : 'text-white/70 hover:text-white'
                                    }`}
                                style={{
                                    backgroundColor:
                                        activeCategory === cat.id ? '#63483d' : 'transparent',
                                    border: activeCategory === cat.id ? 'none' : '2px solid #63483d',
                                    color: activeCategory === cat.id ? 'white' : '#63483d',
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ── Contenu : les catégories et leurs plats ── */}
            <div className="container mx-auto px-6 py-10">

                {menuCategories.map((cat) => (
                    <section key={cat.id} id={`category-${cat.id}`} className="mb-16">

                        {/* ── Bannière de catégorie ── */}
                        <div
                            className="rounded-2xl p-8 mb-8"
                            style={{
                                background: 'linear-gradient(135deg, #63483d 0%, #8b6f63 100%)',
                            }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                                {cat.title}
                            </h2>
                            <p className="text-white/70 mt-2">
                                {cat.dishes.length} {cat.dishes.length > 1 ? 'plats' : 'plat'}
                            </p>
                        </div>

                        {/* ── Grille des plats ── */}
                        {/* 1 colonne mobile, 2 tablette, 3 desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {cat.dishes.map((dish) => (
                                <div
                                    key={dish.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* ── Zone colorée (remplacée par photo plus tard) ── */}
                                    <div
                                        className="h-40 flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, #f5deb3 0%, #deb887 100%)',
                                        }}
                                    >
                                        <span className="text-5xl">🍜</span>
                                    </div>

                                    {/* ── Infos du plat ── */}
                                    <div className="p-5">
                                        {/* Nom + Prix sur la même ligne */}
                                        <div className="flex justify-between items-start mb-2">
                                            <h3
                                                className="font-bold text-lg"
                                                style={{ color: '#63483d' }}
                                            >
                                                {dish.name}
                                            </h3>
                                            <span
                                                className="font-bold text-lg whitespace-nowrap ml-3"
                                                style={{ color: '#63483d' }}
                                            >
                                                {dish.price}
                                            </span>
                                        </div>
                                        <p className="text-sm" style={{ color: '#8b6f63' }}>
                                            {dish.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
