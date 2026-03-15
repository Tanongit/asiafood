/**
 * SocialSection - Section "Suivez-nous"
 * Grille 4 photos style Instagram sur fond beige.
 * 
 * 📸 Pour remplacer les photos : mets tes vraies photos dans /public/images/social-1.png à social-4.png
 * 🔗 Pour mettre le vrai lien Instagram : change INSTAGRAM_URL ci-dessous
 */

// ⚠️ Remplace par le vrai lien Instagram quand le compte est créé
const INSTAGRAM_URL = 'https://www.instagram.com/asiafoodnice'
const INSTAGRAM_HANDLE = '@asiafoodnice'

const photos = [
    { src: '/images/social-1.png', alt: 'Bò Bún Asia Food Nice' },
    { src: '/images/social-2.png', alt: 'Pad Thai Asia Food Nice' },
    { src: '/images/social-3.png', alt: 'Nems Asia Food Nice' },
    { src: '/images/social-4.png', alt: 'Ambiance Asia Food Nice' },
]

export default function SocialSection() {
    return (
        <section
            className="w-full py-16 px-6"
            style={{ backgroundColor: '#eed6c2' }}
        >
            {/* Titre centré */}
            <div className="text-center mb-10">
                <p
                    className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
                    style={{ color: '#63483d99' }}
                >
                    Rejoignez la communauté
                </p>
                <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: '#63483d' }}
                >
                    Suivez-nous
                </h2>
                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-base font-bold hover:opacity-70 transition-opacity"
                    style={{ color: '#F7C815' }}
                >
                    {INSTAGRAM_HANDLE}
                </a>
            </div>

            {/* Grille 2x2 de photos carrées */}
            {/* gap-2 = petit écart entre les photos, comme Instagram */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
                {photos.map((photo, index) => (
                    // Chaque photo est un lien vers Instagram
                    <a
                        key={index}
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-square overflow-hidden group"
                        style={{ borderRadius: '8px' }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            // object-cover = remplit le carré sans se déformer
                            // group-hover:scale-105 = zoom léger au survol
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </a>
                ))}
            </div>

            {/* Bouton Instagram en bas */}
            <div className="text-center mt-10">
                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-80"
                    style={{
                        backgroundColor: '#63483d',
                        color: '#eed6c2',
                    }}
                >
                    Voir notre Instagram →
                </a>
            </div>

        </section>
    )
}
