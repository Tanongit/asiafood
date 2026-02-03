export default function Footer() {
    return (
        <footer className="text-white" style={{ backgroundColor: '#63483d' }}>
            <div className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-6">Explorer</h3>
                        <ul className="space-y-3">
                            <li>À la carte</li>
                            <li>À propos</li>
                            <li>Nos engagements</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-6">Contact</h3>
                        <ul className="space-y-3">
                            <li>📞 07 68 88 13 33</li>
                            <li>📍 2 Bd Lech Walesa, Nice</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-6">Horaires</h3>
                        <p>Ouvert tous les jours</p>
                        <p className="text-xl font-bold">11h - 21h</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-6">Suivez-nous</h3>
                        <ul className="space-y-3">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>TikTok</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bas du footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                        <p>© 2026 AsiaFood</p>
                        <div className="flex items-center gap-6">
                            <span>Mentions légales</span>
                            <span>CGV</span>
                            <span>Cookies</span>
                        </div>
                    </div>
                    <div className="text-center mt-4 text-sm text-gray-500">
                        Site réalisé par <span className="text-gray-300">DINH Tan</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}