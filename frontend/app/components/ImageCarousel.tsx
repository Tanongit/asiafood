import Link from 'next/link'
import Image from 'next/image'
// ───────────────────────────────────────
// LES DONNÉES DE NOS 4 PLATS STARS (PAR DÉFAUT)
// ───────────────────────────────────────
const defaultPlats = [
    {
        id: '1',
        title: 'Bo Bun',
        badge: 'STAR N°1',
        badgeColor: 'bg-red-500',
        image: '/images/plats/bobun.png',
        description: 'Notre signature ! Vermicelles de riz garnis de bœuf... etc.',
    },
    {
        id: '2',
        title: 'Pad Thai',
        badge: 'TENDANCE',
        badgeColor: 'bg-yellow-500',
        image: '/images/plats/padthai.png',
        description: 'Le plat thaï incontournable avec crevettes et citron vert.',
    },
    {
        id: '3',
        title: 'Canard Laqué',
        badge: 'CLASSIQUE',
        badgeColor: 'bg-green-500',
        image: '/images/plats/canard.png',
        description: 'Canard rôti lentement pour une peau croustillante.',
    },
    {
        id: '4',
        title: 'Phở',
        badge: 'FAIT MAISON',
        badgeColor: 'bg-orange-500',
        image: '/images/plats/pho.png',
        description: 'La soupe vietnamienne authentique, bouillon de bœuf.',
    },
]

type DishData = {
    _id: string;
    name: string;
    description: string;
    imageUrl?: string;
}

type SiteSettings = {
    featuredDishesData?: DishData[];
}

export default function ImageCarousel({ settings }: { settings?: SiteSettings }) {
    // On construit les 4 plats à afficher.
    // Si Sanity nous renvoie un plat (ex: 1er plat de l'array), on l'utilise. Sinon, on utilise le plat [0] par défaut.
    const badges = [
        { badge: 'STAR N°1', color: 'bg-red-500' },
        { badge: 'TENDANCE', color: 'bg-yellow-500' },
        { badge: 'CLASSIQUE', color: 'bg-green-500' },
        { badge: 'FAIT MAISON', color: 'bg-orange-500' },
    ]

    const displayPlats = defaultPlats.map((defaultPlat, index) => {
        const sanityDish = settings?.featuredDishesData?.[index]
        if (sanityDish) {
            return {
                id: sanityDish._id,
                title: sanityDish.name,
                badge: badges[index].badge,
                badgeColor: badges[index].color,
                image: sanityDish.imageUrl || defaultPlat.image,
                description: sanityDish.description || '',
            }
        }
        return defaultPlat
    })

    return (
        <section className="py-20" style={{ backgroundColor: '#eed6c2' }}>

            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">

                    {/* <h2> = titre de section (pas h1, car h1 c'est le hero) */}
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ color: '#63483d' }}
                    >
                        NOS PLATS STARS
                    </h2>

                    {/* <Link> = lien Next.js vers la future page /carte */}
                    <Link
                        href="/carte"
                        className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                        style={{ color: '#63483d' }}
                    >
                        Voir notre carte →
                    </Link>
                </div>

                {/* ── LIGNE 2 : La grille de 4 cartes ── */}
                {/* grid = affichage en grille */}
                {/* grid-cols-1 = 1 colonne sur mobile (les cartes s'empilent) */}
                {/* sm:grid-cols-2 = 2 colonnes sur tablette */}
                {/* lg:grid-cols-4 = 4 colonnes sur ordinateur */}
                {/* gap-6 = espace entre les cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {displayPlats.map((plat) => (

                        // Chaque carte : fond blanc, coins arrondis, ombre
                        // hover: = "quand la souris passe dessus"
                        // hover:-translate-y-1 = la carte monte de 1 unité au survol
                        <div
                            key={plat.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* ── LA PHOTO ── */}
                            {/* "relative" = permet de positionner le badge PAR DESSUS la photo */}
                            {/* "aspect-square" = force un format carré */}
                            <div className="relative aspect-square overflow-hidden">

                                {/* <img> = la photo du plat */}
                                {/* src={plat.image} = le chemin vers la photo (ex: /images/plats/bobun.png) */}
                                {/* alt={plat.title} = texte alternatif pour l'accessibilité et le SEO */}
                                {/* object-cover = la photo remplit tout le carré sans se déformer */}
                                <Image
                                    src={plat.image}
                                    alt={plat.title || 'Plat'}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* ── LE BADGE ── */}
                                {/* <span> = petit bout de texte */}
                                {/* "absolute top-4 left-4" = positionné en haut à gauche de la photo */}
                                {/* ${plat.badgeColor} = la couleur change selon le plat (rouge, jaune, vert, orange) */}
                                <span
                                    className={`absolute top-4 left-4 ${plat.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}
                                >
                                    {plat.badge}
                                </span>
                            </div>

                            {/* ── LE TEXTE SOUS LA PHOTO ── */}
                            {/* p-5 = padding de 5 unités tout autour */}
                            <div className="p-5">

                                {/* <h3> = sous-titre (nom du plat) */}
                                <h3
                                    className="text-lg font-bold uppercase mb-2"
                                    style={{ color: '#63483d' }}
                                >
                                    {plat.title}
                                </h3>

                                {/* <p> = paragraphe (la description) */}
                                {/* leading-relaxed = interligne aéré pour la lisibilité */}
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#8b6f63' }}
                                >
                                    {plat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
