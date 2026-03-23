/**
 * HeroSection - Section 1 : Vidéo de présentation plein écran
 * Connectée à Sanity !
 */
import Image from 'next/image'

type HeroSettings = {
    restaurantName?: string;
    heroSubtitle?: string;
    heroVideoUrl?: string;
    heroImageUrl?: string;
}

export default function HeroSection({ settings }: { settings?: HeroSettings }) {
    // Si Sanity n'est pas rempli par le père (valeurs vides), on garde nos bons vieux textes par défaut.
    const title = settings?.restaurantName || "Bienvenue chez Asia Food"
    const subtitle = settings?.heroSubtitle || "LE MEILLEUR DE LA STREET FOOD ASIATIQUE LIVRÉ CHEZ VOUS"
    const videoUrl = settings?.heroVideoUrl || "/videos/hero.mp4"
    const imageUrl = settings?.heroImageUrl

    return (
        <section className="relative h-screen overflow-hidden">
            {/* COUCHE 1 : Vidéo ou Image de fond */}
            {imageUrl && !settings?.heroVideoUrl ? (
                // S'il a uploadé une IMAGE dans Sanity et laissé la vidéo vide, on affiche l'image
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            ) : (
                // Sinon on garde notre super vidéo Wok.mp4 (ou une autre vidéo Sanity)
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}

            {/* COUCHE 2 : Overlay sombre (50% opacité) */}
            <div className="absolute inset-0 bg-black/50 z-[1]"></div>

            {/* COUCHE 3 : Contenu texte centré (Sanity) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
                    {title}
                </h1>
                <h2 className="text-sm md:text-xl font-medium tracking-widest max-w-xl">
                    {subtitle}
                </h2>
            </div>
        </section>
    )
}