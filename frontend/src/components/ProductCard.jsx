const WHATSAPP_NUMBER = "9779702668254"

const ProductCard = ({ product }) => {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in "${product.name}" (NPR ${product.price}). Is it available?`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-6">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-2">No image</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <span className="text-lg font-bold text-gray-900">
            NPR {parseFloat(product.price).toLocaleString()}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            product.in_stock
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-600"
          }`}>
            {product.in_stock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </a>
  )
}

export default ProductCard
