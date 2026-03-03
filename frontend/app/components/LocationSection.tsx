/**
 * LocationSection - Section "Nous Trouver"
 * Layout : fond marron pleine largeur, carte avec padding + coins arrondis à gauche,
 * infos contact à droite. Correspond à la maquette validée.
 *
 * 📝 Pour modifier les infos : change les constantes ci-dessous.
 */

const PHONE = '07 68 88 13 33'
const HOURS = 'Ouvert 7j/7  ·  11h – 21h'
const ADDRESS = '2 Bd Lech Walesa, 06300 Nice'

// Lien direct vers la fiche Google d'Asia Food (Place ID inclus = fiche officielle)
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/ASIA+FOOD/@43.7002219,7.28729,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdd003661afc71:0x4c559b5c0909dfc2!8m2!3d43.7002219!4d7.28729!16s%2Fg%2F1tfh1k63'

// Embed par coordonnées exactes
const GOOGLE_MAPS_EMBED = 'https://maps.google.com/maps?q=43.7002219,7.28729&output=embed&hl=fr&z=17'

export default function LocationSection() {
    return (
        // Fond marron pleine largeur — les deux colonnes partagent ce fond
        <section
            className="w-full flex flex-col md:flex-row"
            style={{ backgroundColor: '#63483d' }}
        >
            {/* ── COLONNE GAUCHE : Carte avec padding et coins arrondis ── */}
            <div className="flex-1 p-8 md:p-12 flex items-center">
                {/* Conteneur de la carte : coins arrondis + overflow-hidden pour que la carte respecte les bords */}
                <div
                    className="w-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{ height: '380px' }}
                >
                    <iframe
                        src={GOOGLE_MAPS_EMBED}
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation Asia Food Nice"
                    />
                </div>
            </div>

            {/* ── COLONNE DROITE : Infos contact ── */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12 md:px-12">

                {/* Label doré */}
                <p
                    className="text-xs font-bold uppercase tracking-[0.3em] mb-5"
                    style={{ color: '#F7C815' }}
                >
                    Nous Trouver
                </p>

                {/* Titre */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-3"
                    style={{ color: '#eed6c2' }}
                >
                    Asia Food
                </h2>

                {/* Ligne dorée décorative */}
                <div
                    className="w-12 h-0.5 mb-8"
                    style={{ backgroundColor: '#F7C815' }}
                />

                {/* Infos */}
                <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                        <span className="text-xl mt-0.5">📍</span>
                        <span className="text-base leading-relaxed" style={{ color: '#eed6c2' }}>
                            {ADDRESS}
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="text-xl">📞</span>
                        <a
                            href={`tel:${PHONE.replace(/\s/g, '')}`}
                            className="text-base hover:underline transition-opacity hover:opacity-80"
                            style={{ color: '#eed6c2' }}
                        >
                            {PHONE}
                        </a>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="text-xl">🕐</span>
                        <span className="text-base" style={{ color: '#eed6c2' }}>
                            {HOURS}
                        </span>
                    </li>
                </ul>

                {/* Bouton → ouvre la fiche Google du resto */}
                <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-80 w-fit"
                    style={{
                        background: 'linear-gradient(to right, #F7C815, #f59e0b)',
                        color: '#63483d',
                    }}
                >
                    Ouvrir dans Google Maps →
                </a>
            </div>

        </section>
    )
}
