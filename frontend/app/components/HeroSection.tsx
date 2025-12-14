/**
 * HeroSection - Section 1 : Vidéo de présentation plein écran
 * Structure : Vidéo → Overlay sombre → Texte centré
 */
export default function HeroSection() {
    return (
        // Container principal : position relative pour les couches
        <section className="relative h-screen overflow-hidden">

            {/* COUCHE 1 : Vidéo de fond */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="/videos/hero.mp4"
                    type="video/mp4"
                />
            </video>

            {/* COUCHE 2 : Overlay sombre (50% opacité) */}
            <div className="absolute inset-0 bg-black/50 z-[1]"></div>

            {/* COUCHE 3 : Contenu texte centré */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
                    Bienvenue chez Asia Food
                </h1>
                <h2 className="text-sm md:text-xl font-medium tracking-widest max-w-xl">
                    LE MEILLEUR DE LA STREET FOOD ASIATIQUE LIVRÉ CHEZ VOUS
                </h2>
            </div>

        </section>
    )
}