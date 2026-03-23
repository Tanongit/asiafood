import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eed6c2] text-center px-4">
            {/* ── IMAGE OU LOGO MARRANT ── */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
                <Image
                    src="/images/logo.png"
                    alt="Plat introuvable"
                    fill
                    className="object-contain"
                />
            </div>

            {/* ── TEXTE D'ERREUR ── */}
            <h1 className="text-6xl md:text-8xl font-black text-[#63483d] mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#63483d] mb-4">
                Oops ! La commande a été perdue en cuisine...
            </h2>
            <p className="text-[#63483d]/80 text-lg md:text-xl max-w-lg mb-8">
                La page ou le plat que vous cherchez n&apos;existe plus ou a été mangé par le Chef.
            </p>

            {/* ── BOUTON RETOUR ── */}
            <Link
                href="/carte"
                className="bg-[#D34122] hover:bg-[#b0351c] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-[#D34122]/30"
            >
                Retourner au Menu
            </Link>
        </div>
    )
}
