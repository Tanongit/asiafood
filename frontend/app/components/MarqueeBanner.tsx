/**
 * MarqueeBanner - Bandeau défilant sous le hero
 * Chaque "copie" du texte a une largeur min de 100vw (= plein écran).
 * → Le texte n'apparaît jamais 2 fois en même temps sur l'écran.
 * → L'animation déplace le container de 50% (= 1 copie) → boucle seamless.
 *
 * ⚠️ Si le texte contient une apostrophe (L'Asie), utilise les guillemets doubles "..."
 */

const MARQUEE_TEXT = "✦ L'Asie a des trésors, on les met dans vos bols ✦"

export default function MarqueeBanner() {
    return (
        <>
            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee 15s linear infinite;
                }
                .marquee-item {
                    /* min-width: 100vw = chaque copie occupe au moins 1 écran de large */
                    /* → impossible de voir les 2 copies en même temps */
                    min-width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                }
            `}</style>

            <section
                className="w-full overflow-hidden py-4"
                style={{ backgroundColor: '#63483d' }}
                aria-label="Bandeau défilant"
            >
                <div className="marquee-track">

                    {/* COPIE 1 — occupe minimum 1 écran de large */}
                    <div className="marquee-item">
                        <span
                            className="text-xl md:text-2xl font-bold italic tracking-widest"
                            style={{ color: '#F7C815' }}
                        >
                            {MARQUEE_TEXT}
                        </span>
                    </div>

                    {/* COPIE 2 — suit la copie 1, jamais visible en même temps */}
                    <div className="marquee-item" aria-hidden="true">
                        <span
                            className="text-xl md:text-2xl font-bold italic tracking-widest"
                            style={{ color: '#F7C815' }}
                        >
                            {MARQUEE_TEXT}
                        </span>
                    </div>

                </div>
            </section>
        </>
    )
}
