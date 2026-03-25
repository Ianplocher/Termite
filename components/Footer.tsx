import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Riverside Termite Inspection</h3>
            <p className="text-sm text-gray-400 mb-4">
              Professional termite inspections serving Riverside, CA and surrounding communities.
              100% free inspections with no hidden fees.
            </p>
            <a
              href="tel:9515550100"
              className="text-lime hover:text-lime-light font-semibold text-lg"
            >
              (951) 555-0100
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/schedule" className="hover:text-lime transition-colors">Schedule Free Inspection</Link></li>
              <li><Link href="/how-it-works" className="hover:text-lime transition-colors">How It Works</Link></li>
              <li><Link href="/why-termite-inspections" className="hover:text-lime transition-colors">Why Inspect?</Link></li>
              <li><Link href="/service-areas" className="hover:text-lime transition-colors">Service Areas</Link></li>
              <li><Link href="/faq" className="hover:text-lime transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-3">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Riverside, CA</li>
              <li>Corona, CA</li>
              <li>Moreno Valley, CA</li>
              <li>Jurupa Valley, CA</li>
              <li>Norco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Riverside Termite Inspection. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <span>Privacy Policy</span>
              <span>Terms</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Licensed by the California Structural Pest Control Board
          </p>
        </div>
      </div>
    </footer>
  );
}
