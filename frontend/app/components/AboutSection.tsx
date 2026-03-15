/**
 * AboutSection - Section "Notre Histoire"
 * Layout 50/50 : texte à gauche (fond marron), photo à droite.
 * id="a-propos" → permet le lien #a-propos depuis le footer.
 *
 * 📝 Pour modifier le texte : change QUOTE et DESCRIPTION ci-dessous.
 * 🖼️ Pour changer la photo : remplace /public/images/about-chef.png
 */

const QUOTE = 'Trente ans de passion cuisinée avec amour.'

const DESCRIPTION =
    "Originaire du Vietnam et installée à Nice depuis bientôt 30 ans, notre famille a fait de la cuisine son âme. C'est maman qui règne en cuisine, perpétuant des recettes transmises de génération en génération et faisant voyager vos papilles à travers toute l'Asie. Et c'est papa qui veille sur tout le reste avec la rigueur de celui qui sait que les bons plats méritent une maison irréprochable."

export default function AboutSection() {
    return (
        // id="a-propos" → ancre pour le lien footer "À propos"
        <section
            id="a-propos"
            className="w-full flex flex-col md:flex-row min-h-[420px]"
        >
            {/* ── MOITIÉ GAUCHE : Texte sur fond marron ── */}
            <div
                className="flex-1 flex flex-col justify-center px-10 py-16 md:px-16"
                style={{ backgroundColor: '#63483d' }}
            >
                {/* Petit label au-dessus */}
                <p
                    className="text-xs font-bold uppercase tracking-[0.3em] mb-6"
                    style={{ color: '#F7C815' }}
                >
                    Notre Histoire
                </p>

                {/* Citation principale */}
                <blockquote
                    className="text-2xl md:text-3xl font-bold italic leading-snug mb-6"
                    style={{ color: '#eed6c2' }}
                >
                    &ldquo;{QUOTE}&rdquo;
                </blockquote>

                {/* Ligne dorée décorative */}
                <div
                    className="w-12 h-0.5 mb-6"
                    style={{ backgroundColor: '#F7C815' }}
                />

                {/* Texte descriptif */}
                <p
                    className="text-base leading-relaxed max-w-md"
                    style={{ color: '#eed6c2cc' }}
                >
                    {DESCRIPTION}
                </p>
            </div>

            {/* ── MOITIÉ DROITE : Photo ── */}
            <div className="flex-1 min-h-[300px] md:min-h-0 overflow-hidden">
                <img
                    src="/images/about-chef.png"
                    alt="Notre chef en cuisine"
                    className="w-full h-full object-cover object-center"
                />
            </div>

        </section>
    )
}
