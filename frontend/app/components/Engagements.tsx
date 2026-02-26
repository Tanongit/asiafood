/**
 * Section "Nos Engagements"
 * 4 icônes Lucide avec texte pour rassurer le client.
 * Icônes gratuites (licence MIT) de la librairie lucide-react.
 * Catalogue complet : https://lucide.dev/icons
 */

import { ChefHat, Leaf, Truck, Soup } from 'lucide-react'

// ───────────────────────────────────────
// LES DONNÉES DES 4 ENGAGEMENTS
// ───────────────────────────────────────
// Chaque engagement a un id, un label (le texte), et une icône Lucide.
const engagements = [
    { id: 1, label: 'Fait Maison', icon: ChefHat },
    { id: 2, label: 'Produits Frais', icon: Leaf },
    { id: 3, label: 'Livraison Rapide', icon: Truck },
    { id: 4, label: 'Recettes Authentiques', icon: Soup },
]

// ───────────────────────────────────────
// LE COMPOSANT
// ───────────────────────────────────────
export default function Engagements() {
    return (
        <section className="py-16" style={{ backgroundColor: '#eed6c2' }}>
            <div className="container mx-auto px-6">

                {/* ── Titre ── */}
                <h2
                    className="text-2xl md:text-3xl font-bold text-center uppercase tracking-wider mb-12"
                    style={{ color: '#63483d' }}
                >
                    Nos Engagements
                </h2>

                {/* ── Grille des 4 engagements ── */}
                {/* grid-cols-2 = 2 colonnes sur mobile */}
                {/* md:grid-cols-4 = 4 colonnes sur desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {engagements.map((item) => {
                        // On récupère l'icône dans une variable "Icon"
                        // La majuscule est obligatoire pour que React
                        // comprenne que c'est un composant à afficher
                        const Icon = item.icon

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center"
                            >
                                {/* ── L'icône Lucide ── */}
                                {/* size=48 = taille en pixels */}
                                {/* strokeWidth=1.5 = épaisseur du trait (fin = élégant) */}
                                <Icon
                                    size={48}
                                    strokeWidth={1.5}
                                    className="mb-4"
                                    style={{ color: '#63483d' }}
                                />

                                {/* ── Le texte sous l'icône ── */}
                                <p
                                    className="text-sm font-semibold uppercase tracking-wide"
                                    style={{ color: '#63483d' }}
                                >
                                    {item.label}
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}
