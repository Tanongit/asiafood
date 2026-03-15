import Link from 'next/link'

/**
 * Footer - Pied de page simplifié
 * - Contact et Horaires supprimés → déjà dans LocationSection
 * - 2 colonnes (Explorer + Suivez-nous) → propre sur mobile ET desktop
 * - Liens sociaux en placeholder (#) → à remplacer quand les comptes sont créés
 */

export default function Footer() {
    return (
        <footer className="text-white" style={{ backgroundColor: '#63483d' }}>

            {/* ── Partie principale : 2 colonnes ── */}
            <div className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-2 gap-8">

                    {/* Explorer */}
                    <div>
                        <h3
                            className="text-sm font-bold uppercase tracking-widest mb-6"
                            style={{ color: '#F7C815' }}
                        >
                            Explorer
                        </h3>
                        <ul className="space-y-3 text-sm" style={{ color: '#eed6c2bb' }}>
                            <li>
                                <Link href="/carte" className="hover:opacity-80 transition-opacity">
                                    À la carte
                                </Link>
                            </li>
                            <li>
                                <Link href="/#a-propos" className="hover:opacity-80 transition-opacity">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/#engagements" className="hover:opacity-80 transition-opacity">
                                    Nos engagements
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Suivez-nous */}
                    <div>
                        <h3
                            className="text-sm font-bold uppercase tracking-widest mb-6"
                            style={{ color: '#F7C815' }}
                        >
                            Suivez-nous
                        </h3>
                        <ul className="space-y-3 text-sm" style={{ color: '#eed6c2bb' }}>
                            <li>
                                {/* Remplace # par le vrai lien Instagram quand disponible */}
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* ── Bas du footer : copyright ── */}
            <div className="border-t" style={{ borderColor: '#ffffff20' }}>
                <div
                    className="container mx-auto px-6 py-6 text-center text-sm"
                    style={{ color: '#eed6c266' }}
                >
                    <p>© 2026 AsiaFood · <Link href="/mentions-legales" className="cursor-pointer hover:opacity-80">Mentions légales</Link></p>
                    <p className="mt-2">
                        Site réalisé par{' '}
                        <span style={{ color: '#eed6c2' }}>DINH Tan</span>
                    </p>
                </div>
            </div>

        </footer>
    )
}