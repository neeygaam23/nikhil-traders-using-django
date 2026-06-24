import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Nikhil Traders</h3>
            <p className="text-sm leading-relaxed">
              Your trusted electronics shop in Itahari, Nepal. We provide quality
              electronics and home appliances at the best prices.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/9779702668254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Itahari, Sunsari, Nepal</li>
              <li>
                <a
                  href="https://wa.me/9779702668254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +977-9702668254
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl overflow-hidden border border-gray-800">
          <iframe
            src="https://www.google.com/maps?q=Nikhil+Traders+Itahari&output=embed"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nikhil Traders location"
          />
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Nikhil Traders. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
