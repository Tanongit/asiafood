'use client'

import { useState } from 'react'

// Données des slides du carousel
const slides = [
    { id: 1, title: 'Nems traditionnels', badge: 'NOUVEAUTÉ', color: 'bg-green-500' },
    { id: 2, title: 'Bo Bun signature', badge: '-10%', color: 'bg-red-500' },
    { id: 3, title: 'Poulet croustillant', badge: 'OFFERT', color: 'bg-orange-500' },
    { id: 4, title: 'Pad Thai', badge: 'TENDANCE', color: 'bg-yellow-500' },
    { id: 5, title: 'Raviolis vapeur', badge: 'CADEAU', color: 'bg-purple-500' },
]

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((i) => (i === 0 ? slides.length - 4 : i - 1))
    const next = () => setCurrent((i) => (i >= slides.length - 4 ? 0 : i + 1))

    return (
        <section className="py-20" style={{ backgroundColor: '#eed6c2' }}>
            <div className="container mx-auto px-6">
                {/* Titre */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    LES NEMS DU MOMENT
                </h2>

                {/* Carousel */}
                <div className="relative">
                    {/* Boutons navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
                    >
                        ◀
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
                    >
                        ▶
                    </button>

                    {/* Track des images */}
                    <div className="overflow-hidden mx-8">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${current * 25}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className="w-1/4 flex-shrink-0 px-3">
                                    <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl aspect-[3/4] overflow-hidden shadow-xl hover:scale-105 transition-transform cursor-pointer">
                                        {/* Badge */}
                                        <span className={`absolute top-4 left-4 ${slide.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                            {slide.badge}
                                        </span>

                                        {/* Titre */}
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white font-bold text-lg">{slide.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[0, 1].map((i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-orange-500 w-8' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
