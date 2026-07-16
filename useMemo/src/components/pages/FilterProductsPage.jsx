import { useMemo, useState } from 'react'

const PRODUCT_DATA = [
  { id: 1, name: 'Noise-Canceling Headphones', category: 'Audio', price: 199 },
  { id: 2, name: 'Mechanical Keyboard', category: 'Office', price: 129 },
  { id: 3, name: 'Portable SSD 1TB', category: 'Storage', price: 149 },
  { id: 4, name: 'USB-C Dock', category: 'Office', price: 109 },
  { id: 5, name: 'Studio Monitor Pair', category: 'Audio', price: 369 },
  { id: 6, name: 'Smart LED Strip', category: 'Home', price: 59 },
  { id: 7, name: 'Mesh Wi-Fi Router', category: 'Home', price: 219 },
  { id: 8, name: 'Webcam 4K', category: 'Office', price: 159 },
  { id: 9, name: 'Bluetooth Speaker', category: 'Audio', price: 89 },
  { id: 10, name: 'Network Attached Storage', category: 'Storage', price: 499 },
]

function FilterProductsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [ascending, setAscending] = useState(true)

  const categories = useMemo(
    () => ['All', ...new Set(PRODUCT_DATA.map((item) => item.category))],
    [],
  )

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    const filtered = PRODUCT_DATA.filter((item) => {
      const matchesQuery = item.name.toLowerCase().includes(normalized)
      const matchesCategory = category === 'All' || item.category === category
      return matchesQuery && matchesCategory
    })

    filtered.sort((a, b) => (ascending ? a.price - b.price : b.price - a.price))
    return filtered
  }, [query, category, ascending])

  return (
    <section className="panel">
      <h2>Example 2: Filter and Sort List</h2>
      <p>
        Filtering and sorting are good useMemo targets. The derived list is recomputed only when search,
        category, or sort order changes.
      </p>

      <div className="controls controls-grid">
        <label className="control">
          <span>Search product</span>
          <input
            type="text"
            placeholder="type a keyword"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <label className="control">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button type="button" className="action" onClick={() => setAscending((value) => !value)}>
          Sort by price: {ascending ? 'Low to High' : 'High to Low'}
        </button>
      </div>

      <ul className="result-list">
        {visibleProducts.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <strong>${item.price}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FilterProductsPage
