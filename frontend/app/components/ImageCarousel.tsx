import Link from 'next/link'

// ───────────────────────────────────────
// LES DONNÉES DE NOS 4 PLATS STARS
// ───────────────────────────────────────
// Chaque plat a : un id, un titre, un badge, une couleur de badge,
// un chemin vers la photo, et une description.
// Plus tard, ces données viendront de Sanity (le CMS de papa).
const plats = [
    {
        id: 1,
        title: 'Bo Bun',
        badge: 'STAR N°1',
        badgeColor: 'bg-red-500',
        image: '/images/plats/bobun.png',
        description:
            'Notre signature ! Vermicelles de riz garnis de bœuf mariné sauté au wok, nems croustillants dorés, crudités fraîches et cacahuètes concassées.',
    },
    {
        id: 2,
        title: 'Pad Thai',
        badge: 'TENDANCE',
        badgeColor: 'bg-yellow-500',
        image: '/images/plats/padthai.png',
        description:
            'Le plat thaï incontournable. Nouilles de riz sautées au wok à feu vif avec crevettes, œuf, légumes croquants, cacahuètes torréfiées et un filet de citron vert.',
    },
    {
        id: 3,
        title: 'Canard Laqué',
        badge: 'CLASSIQUE',
        badgeColor: 'bg-green-500',
        image: '/images/plats/canard.png',
        description:
            'Canard rôti lentement pour une peau croustillante et une chair fondante. Servi sur un lit de riz parfumé au jasmin, nappé de notre sauce laquée maison.',
    },
    {
        id: 4,
        title: 'Phở',
        badge: 'FAIT MAISON',
        badgeColor: 'bg-orange-500',
        image: '/images/plats/pho.png',
        description:
            'La soupe vietnamienne authentique. Un bouillon de bœuf mijoté pendant 12 heures avec badiane et cannelle, garni de nouilles de riz et herbes fraîches du marché.',
    },
]

// ───────────────────────────────────────
// LE COMPOSANT (ce qui s'affiche à l'écran)
// ───────────────────────────────────────
export default function ImageCarousel() {
    return (
        // <section> = un bloc thématique de la page
        // py-20 = padding vertical (espace en haut et en bas)
        <section className="py-20" style={{ backgroundColor: '#eed6c2' }}>

            {/* "container mx-auto px-6" = centre le contenu avec des marges */}
            <div className="container mx-auto px-6">

                {/* ── LIGNE 1 : Titre + Lien ── */}
                {/* "flex justify-between" = met le titre à gauche et le lien à droite */}
                <div className="flex items-center justify-between mb-12">

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

                    {/* .map() = "pour chaque plat dans la liste, crée une carte" */}
                    {plats.map((plat) => (

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
                                <img
                                    src={plat.image}
                                    alt={plat.title}
                                    className="w-full h-full object-cover"
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
