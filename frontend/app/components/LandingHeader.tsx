import Link from 'next/link'

const navLinks = [
    { href: '/carte', label: 'À la carte' },
]

export default function LandingHeader() {
    return (
        <header className="fixed z-50 h-20 inset-x-0 top-0" style={{ backgroundColor: '#63483d' }}>
            <div className="container h-full flex items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-3xl">🍜</span>
                    <span className="text-xl font-bold text-white">ASIAFOOD</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-semibold hover:opacity-80 transition-opacity uppercase tracking-wide"
                            style={{ color: '#F7C815' }}
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
