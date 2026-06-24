import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import LuckySpin from "../components/LuckySpin"

const TESTIMONIALS = [
  {
    name: "राम परियार — Ram P.",
    text: "यो पसलबाट मैले धेरै पटक इलेक्ट्रोनिक्स किनेको छु। सधैं राम्रो गुणस्तर र उचित मूल्य पाएको छु। Best electronics shop in Itahari!",
    location: "इटहरी",
  },
  {
    name: "सीता कोइराला — Sita K.",
    text: "ग्राहक सेवा एकदमै राम्रो छ। उहाँहरूले मलाई मेरो नयाँ घरको लागि चाहिने सबै सामान फेला पार्न मद्दत गर्नुभयो। Highly recommend!",
    location: "सुनसरी",
  },
  {
    name: "अनिल श्रेष्ठ — Anil S.",
    text: "Reasonable rates and genuine products. म सधैं आफ्नो साथीभाइ र परिवारलाई Nikhil Traders सिफारिस गर्छु।",
    location: "धरान",
  },
  {
    name: "विनिता अधिकारी — Binita A.",
    text: "पहिलो पटक यहाँबाट सामान किनेको। प्राइस पनि राम्रो, क्वालिटी पनि राम्रो। I'm a customer for life!",
    location: "इटहरी",
  },
]

const WHY_CHOOSE_US = [
  {
    emoji: "✅",
    title: "Quality Products",
    desc: "We stock only genuine, branded electronics and electrical items you can trust.",
  },
  {
    emoji: "💰",
    title: "Best Prices",
    desc: "Fair and transparent pricing — no hidden charges, just honest deals every time.",
  },
  {
    emoji: "⚡",
    title: "Fast Service",
    desc: "Quick and helpful service. Walk in, tell us what you need, and you're sorted.",
  },
  {
    emoji: "📞",
    title: "Always Available",
    desc: "Reach us on WhatsApp anytime. We're just a message away for inquiries and orders.",
  },
]

const Home = () => {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/products/?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <img
          src="/shop.png"
          alt="Nikhil Traders shop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            Your Trusted Electronics Shop in Itahari
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            Quality electronics, home appliances, and accessories at the best prices in town.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/products"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Browse All Products
            </Link>
            <a
              href="https://wa.me/9779702668254"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-colors"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">२०७०</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Since 2070 BS</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">१००+</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Happy Customers</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">४०+</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Nikhil Traders?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-sm text-gray-500 mt-1">
              Our top picks — click any product to inquire via WhatsApp
            </p>
          </div>
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-100 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-gray-100 rounded w-full animate-pulse" />
                  <div className="h-5 bg-gray-100 rounded w-1/3 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* LUCKY SPIN WHEEL */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🎡 Try Your Luck!
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Spin the wheel to win exciting prizes and discounts!
          </p>
          <LuckySpin />
        </div>
      </section>

      {/* RETRO GAME */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🦖 Take a Break!
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Bored? Play the classic Dino Runner while you browse!
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 max-w-[600px] mx-auto">
            <iframe
              src="https://chromedino.com/"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Chrome Dino Runner Game"
              className="block"
            />
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Press Space to jump — avoid the cacti! 🎮
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            What Our Customers Say
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            हाम्रा ग्राहकहरू के भन्छन्
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  "{t.text}"
                </p>
                <p className="font-semibold text-gray-900 text-xs">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Find What You Need?
          </h2>
          <p className="text-gray-400 mb-6">
            Browse our full catalog or reach out to us directly on WhatsApp.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/products"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Browse All Products
            </Link>
            <a
              href="https://wa.me/9779702668254"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
