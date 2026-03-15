/**
 * Page /mentions-legales
 * Obligatoire en France pour tout site web.
 * Lien dans le footer → Footer.tsx
 */

export const metadata = {
    title: 'Mentions légales — Asia Food Nice',
    description: 'Mentions légales du site Asia Food, restaurant asiatique à Nice.',
}

export default function MentionsLegalesPage() {
    return (
        <div style={{ backgroundColor: '#eed6c2', minHeight: '100vh' }} className="pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-2xl">

                {/* Titre */}
                <h1
                    className="text-3xl md:text-4xl font-bold mb-3"
                    style={{ color: '#63483d' }}
                >
                    Mentions légales
                </h1>
                <div className="w-12 h-0.5 mb-10" style={{ backgroundColor: '#F7C815' }} />

                {/* Sections */}
                <div className="space-y-10 text-sm leading-relaxed" style={{ color: '#63483d' }}>

                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wide mb-3">
                            Éditeur du site
                        </h2>
                        <p>Asia Food</p>
                        <p>2 Bd Lech Walesa, 06300 Nice</p>
                        <p>Téléphone : 07 68 88 13 33</p>
                    </section>

                    <div className="border-t" style={{ borderColor: '#63483d30' }} />

                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wide mb-3">
                            Hébergement
                        </h2>
                        <p>Ce site est hébergé par :</p>
                        <p className="mt-2">
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723, États-Unis<br />
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:opacity-70"
                            >
                                vercel.com
                            </a>
                        </p>
                    </section>

                    <div className="border-t" style={{ borderColor: '#63483d30' }} />

                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wide mb-3">
                            Propriété intellectuelle
                        </h2>
                        <p>
                            L&apos;ensemble du contenu de ce site (textes, images, logo) est la propriété
                            exclusive d&apos;Asia Food. Toute reproduction, même partielle,
                            est interdite sans autorisation préalable.
                        </p>
                    </section>

                    <div className="border-t" style={{ borderColor: '#63483d30' }} />

                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wide mb-3">
                            Données personnelles
                        </h2>
                        <p>
                            Ce site ne collecte aucune donnée personnelle.
                            Les commandes sont traitées directement par Uber Eats et Deliveroo,
                            soumis à leurs propres politiques de confidentialité.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}
