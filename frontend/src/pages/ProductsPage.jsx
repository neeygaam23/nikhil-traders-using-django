import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"

const ProductsPage = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    fetch("/api/categories/")
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error)
  }, [])

  const fetchProducts = () => {
    setLoading(true)
    setHasSearched(true)
    const params = new URLSearchParams()
    if (activeCategory) params.set("category", activeCategory)
    if (search.trim()) params.set("search", search.trim())
    fetch(`/api/products/?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchProducts()
  }

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug)
    setHasSearched(true)
    setLoading(true)
    const params = new URLSearchParams()
    if (slug) params.set("category", slug)
    if (search.trim()) params.set("search", search.trim())
    fetch(`/api/products/?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What kind of products are you searching for?
          </h1>
          <p className="text-gray-500 mb-6">
            Browse by category or search for something specific
          </p>

          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full px-5 py-3.5 pr-14 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === null && !hasSearched
                ? "bg-gray-200 text-gray-900"
                : activeCategory === null && hasSearched
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === cat.slug
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
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
        ) : !hasSearched ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-500 font-medium text-lg">Search for products above</p>
            <p className="text-gray-400 text-sm mt-1">
              Type a product name or select a category to get started
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium text-lg">No products found</p>
            <p className="text-gray-400 text-sm mt-1">
              Try a different search term or category
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">
              {products.length} product{products.length !== 1 ? "s" : ""} found
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default ProductsPage
