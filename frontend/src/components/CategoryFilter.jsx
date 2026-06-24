const CategoryFilter = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
          activeCategory === null
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
        }`}
      >
        All Items
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onSelect(cat.slug)}
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
  )
}

export default CategoryFilter
