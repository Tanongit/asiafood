import Image, { ImageProps } from 'next/image'
import { urlForImage } from '@/sanity/lib/utils'

interface SanityImageProps extends Omit<ImageProps, 'src'> {
    source: any; // L'objet image brut retourné par Sanity (contenant hotspot et crop)
}

/**
 * SanityImage - Composant CTO Ultime
 * Permet à une image Next.js (ultra rapide) de lire secrètement les réglages de 
 * "Hotspot" (ciblage du visage) et "Crop" (recadrage) faits par le client dans Sanity.
 */
export default function SanityImage({ source, alt, ...props }: SanityImageProps) {
    if (!source) return null

    // Utilise l'outil officiel Sanity pour générer l'URL exacte avec le Hotspot actif !
    const imageUrl = urlForImage(source)?.url()
    if (!imageUrl) return null
    // Calcul du "Focal Point" (Où placer le centre CSS de l'image) grâce au Hotspot Sanity
    const objectPosition = source?.hotspot
        ? `${(source.hotspot.x * 100).toFixed(2)}% ${(source.hotspot.y * 100).toFixed(2)}%`
        : 'center';

    return (
        <Image
            src={imageUrl}
            alt={alt || "Image Sanity"}
            {...props}
            style={{ objectPosition, ...props.style }} // La vraie magie WaaS !
        />
    )
}
