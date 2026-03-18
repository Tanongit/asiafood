'use client'

import { useState } from 'react'

export type Dish = {
    _id: string
    name: string
    description: string
    price: string
    imageUrl?: string
}

export type Category = {
    _id: string
    id: number
    name: string
    title: string
    dishes: Dish[]
}

export default function CarteClient({ initialCategories }: { initialCategories: Category[] }) {
    // La catégorie sélectionnée (par défaut : la première s'il y en a)
    const [activeCategory, setActiveCategory] = useState(initialCategories.length > 0 ? initialCategories[0].id : 1)

    // Emoji et couleur de fond pour les bannières et cartes de plats
    const categoryStyle: Record<number, { emoji: string; gradient: string }> = {
        1: { emoji: '🥟', gradient: 'linear-gradient(135deg, #f5deb3 0%, #deb887 100%)' },
        2: { emoji: '🍲', gradient: 'linear-gradient(135deg, #e8c9a0 0%, #d4a574 100%)' },
        3: { emoji: '🍜', gradient: 'linear-gradient(135deg, #f0d5b8 0%, #c9956b 100%)' },
        4: { emoji: '🥘', gradient: 'linear-gradient(135deg, #edd4b2 0%, #d4a76a 100%)' },
        5: { emoji: '🍚', gradient: 'linear-gradient(135deg, #f5e6d0 0%, #dcc8a8 100%)' },
        6: { emoji: '🍡', gradient: 'linear-gradient(135deg, #f7dfd0 0%, #e8b898 100%)' },
        7: { emoji: '🥤', gradient: 'linear-gradient(135deg, #e6ddd4 0%, #c4b09c 100%)' },
    }

    return (
        <div style={{ backgroundColor: '#eed6c2', minHeight: '100vh' }} className="pt-20">

            {/* ── Barre de navigation par catégorie ── */}
            <nav
                className="sticky top-20 z-30 border-b"
                style={{ backgroundColor: '#eed6c2', borderColor: '#d4b8a0' }}
            >
                <div className="container mx-auto px-3 md:px-6 py-3 md:py-4">
                    <div className="flex justify-center gap-2 flex-wrap">
                        {initialCategories.map((cat) => (
                            <button
                                key={cat._id}
                                onClick={() => {
                                    setActiveCategory(cat.id)
                                    const section = document.getElementById(`category-${cat.id}`)
                                    if (section) {
                                        const offset = 160
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset
                                        window.scrollTo({ top, behavior: 'smooth' })
                                    }
                                }}
                                className="px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300"
                                style={{
                                    backgroundColor: activeCategory === cat.id ? '#63483d' : 'transparent',
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
            <div className="container mx-auto px-4 md:px-6 py-6 md:py-10">
                {initialCategories.length === 0 && (
                    <div className="text-center py-20 text-[#63483d] text-xl">
                        Chargement du menu... (Vérifiez le Sanity Studio)
                    </div>
                )}

                {initialCategories.map((cat) => (
                    <section key={cat._id} id={`category-${cat.id}`} className="mb-16">

                        {/* ── Bannière de catégorie ── */}
                        <div
                            className="rounded-2xl p-5 md:p-8 mb-6 md:mb-8 flex items-center justify-between overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #63483d 0%, #8b6f63 100%)',
                            }}
                        >
                            <div>
                                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wider">
                                    {cat.title}
                                </h2>
                                <p className="text-white/70 mt-2">
                                    {cat.dishes.length} {cat.dishes.length > 1 ? 'plats' : 'plat'}
                                </p>
                            </div>
                            <span className="text-5xl md:text-8xl opacity-30">
                                {categoryStyle[cat.id]?.emoji || '🍜'}
                            </span>
                        </div>

                        {/* ── Grille des plats ── */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {cat.dishes.map((dish) => (
                                <div
                                    key={dish._id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* ── Zone colorée / Image ── */}
                                    {dish.imageUrl ? (
                                        <img src={dish.imageUrl} alt={dish.name} className="h-32 md:h-40 w-full object-cover" />
                                    ) : (
                                        <div
                                            className="h-32 md:h-40 flex items-center justify-center"
                                            style={{
                                                background: categoryStyle[cat.id]?.gradient || 'linear-gradient(135deg, #f5deb3 0%, #deb887 100%)',
                                            }}
                                        >
                                            <span className="text-5xl">{categoryStyle[cat.id]?.emoji || '🍜'}</span>
                                        </div>
                                    )}

                                    {/* ── Infos du plat ── */}
                                    <div className="p-5">
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
