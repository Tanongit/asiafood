import Link from 'next/link'

const navLinks = [
    { href: '/carte', label: 'CARTE' },
    { href: '/engagements', label: 'NOS ENGAGEMENTS' },
    { href: '/franchise', label: 'DEVENIR FRANCHISÉ' },
    { href: '/fidelite', label: 'FIDÉLITÉ' },
    { href: '/presse', label: 'PRESSE' },
]

export default function LandingHeader() {
    return (
        <header className="fixed z-50 h-20 inset-x-0 top-0 bg-white shadow-sm">
            <div className="container h-full flex items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-3xl">🍜</span>
                    <span className="text-xl font-bold text-gray-900">ASIAFOOD</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-medium text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <Link
                    href="/commander"
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-full text-sm shadow-lg transition-all"
                >
                    COMMANDER
                </Link>
            </div>
        </header>
    )
}
