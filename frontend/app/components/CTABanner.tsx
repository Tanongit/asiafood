'use client'

/**
 * Bandeau CTA "Envie de goûter ?"
 * Un gros bouton COMMANDER qui ouvre une fenêtre de choix
 * entre Uber Eats et Deliveroo.
 *
 * 'use client' est nécessaire car on utilise useState
 * pour ouvrir/fermer la fenêtre de choix.
 */

import { useState } from 'react'
import { X } from 'lucide-react'

// ───────────────────────────────────────
// LIENS DE COMMANDE
// ───────────────────────────────────────
const UBER_EATS_URL = 'https://www.ubereats.com/fr/store/asia-food/BAqvtqmpTLu6PfoT928sAQ'
const DELIVEROO_URL = 'https://deliveroo.fr/fr/menu/nice/port-de-nice/asia-food-nice'

// ───────────────────────────────────────
// LE COMPOSANT
// ───────────────────────────────────────
export default function CTABanner() {
    // useState = on crée une variable "open" qui vaut true ou false
    // false = la fenêtre est fermée au départ
    // setOpen = la fonction pour changer la valeur
    const [open, setOpen] = useState(false)

    return (
        <section
            className="relative py-20"
            style={{
                background: 'linear-gradient(to bottom, #eed6c2, #63483d)',
            }}
        >
            <div className="container mx-auto px-6 text-center">

                {/* ── Titre ── */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Envie de goûter ?
                </h2>

                {/* ── Sous-titre ── */}
                <p className="text-white/80 text-lg mb-10">
                    Commandez et faites-vous livrer directement chez vous 🍜
                </p>

                {/* ── Bouton COMMANDER ── */}
                {/* onClick = quand on clique, on met "open" à true */}
                <button
                    onClick={() => setOpen(true)}
                    className="px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300"
                    style={{
                        background: 'linear-gradient(to right, #F7C815, #f59e0b)',
                        color: '#63483d',
                    }}
                >
                    COMMANDER
                </button>
            </div>

            {/* ── Fenêtre de choix (apparaît uniquement si open === true) ── */}
            {/* Le "&&" veut dire : si open est true, alors affiche ce qui suit */}
            {open && (
                <>
                    {/* Fond sombre semi-transparent derrière la fenêtre */}
                    {/* onClick = cliquer en dehors de la fenêtre la ferme */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setOpen(false)}
                    />

                    {/* La fenêtre blanche centrée */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">

                            {/* Bouton X pour fermer */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                <X size={24} />
                            </button>

                            {/* Titre de la fenêtre */}
                            <h3
                                className="text-xl font-bold text-center mb-6"
                                style={{ color: '#63483d' }}
                            >
                                Choisissez votre plateforme
                            </h3>

                            {/* Les 2 boutons de commande */}
                            <div className="flex flex-col gap-3">

                                {/* Bouton Uber Eats */}
                                {/* target="_blank" = ouvre dans un nouvel onglet */}
                                {/* rel="noopener noreferrer" = sécurité (empêche le site externe d'accéder à ton site) */}
                                <a
                                    href={UBER_EATS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-white text-lg hover:scale-105 transition-transform"
                                    style={{ backgroundColor: '#06C167' }}
                                >
                                    🛵 Commander sur Uber Eats
                                </a>

                                {/* Bouton Deliveroo */}
                                <a
                                    href={DELIVEROO_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-white text-lg hover:scale-105 transition-transform"
                                    style={{ backgroundColor: '#00CCBC' }}
                                >
                                    🚴 Commander sur Deliveroo
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}
