'use client'

/**
 * LandingHeader - Header fixe du site Asia Food
 * 'use client' obligatoire pour useState (gestion du modal).
 * Le bouton COMMANDER ouvre directement le modal Uber Eats / Deliveroo.
 */

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const UBER_EATS_URL = 'https://www.ubereats.com/fr/store/asia-food/BAqvtqmpTLu6PfoT928sAQ'
const DELIVEROO_URL = 'https://deliveroo.fr/fr/menu/nice/port-de-nice/asia-food-nice'

const navLinks = [
    { href: '/carte', label: 'À la carte' },
]

export default function LandingHeader() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* ── HEADER ── */}
            <header className="fixed z-50 h-20 inset-x-0 top-0" style={{ backgroundColor: '#63483d' }}>
                <div className="container h-full flex items-center justify-between px-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="Asia Food"
                            width={40}
                            height={40}
                            className="h-10 w-auto"
                        />
                        <span className="text-xl font-bold text-white">ASIAFOOD</span>
                    </Link>

                    {/* Navigation — cachée sur mobile */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-base font-semibold hover:opacity-80 transition-opacity uppercase tracking-wide"
                                style={{ color: '#F7C815' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Bouton COMMANDER */}
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-full text-sm shadow-lg transition-all hover:scale-105"
                    >
                        COMMANDER
                    </button>

                </div>
            </header>

            {/* ── MODAL CTA ── */}
            {open && (
                <>
                    {/* Fond sombre avec blur — cliquer dessus ferme le modal */}
                    <div
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Fenêtre centrée */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
                        <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">

                            {/* Header du modal — fond marron */}
                            <div
                                className="relative px-8 pt-8 pb-6 text-center"
                                style={{ backgroundColor: '#63483d' }}
                            >
                                {/* Bouton fermer — en haut à droite sur le fond marron */}
                                <button
                                    onClick={() => setOpen(false)}
                                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                                    aria-label="Fermer"
                                >
                                    <X size={20} />
                                </button>

                                <div className="text-4xl mb-3">🍜</div>
                                <h3 className="text-xl font-bold text-white">
                                    Envie de se régaler ?
                                </h3>
                                <p className="text-sm mt-1" style={{ color: '#eed6c2bb' }}>
                                    Choisissez votre plateforme de livraison
                                </p>
                            </div>

                            {/* Boutons de commande */}
                            <div className="flex flex-col gap-3 p-6">
                                <a
                                    href={UBER_EATS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white text-base hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md"
                                    style={{ backgroundColor: '#06C167' }}
                                >
                                    🛵&nbsp;&nbsp;Commander sur Uber Eats
                                </a>
                                <a
                                    href={DELIVEROO_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white text-base hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md"
                                    style={{ backgroundColor: '#00CCBC' }}
                                >
                                    🚴&nbsp;&nbsp;Commander sur Deliveroo
                                </a>

                                <p className="text-center text-xs text-gray-400 mt-1">
                                    Livraison disponible sur Nice et alentours
                                </p>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    )
}
