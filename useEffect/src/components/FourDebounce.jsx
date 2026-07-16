import { useEffect, useState } from 'react'

function ExampleFourDebounce() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => clearTimeout(timeout)
  }, [query])

  return (
    <article className="card">
      <h3>4. Debounce User Input</h3>
      <p>
        Great for search boxes where you want to wait before firing API calls on
        every key press.
      </p>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type to debounce..."
      />
      <p className="result">Debounced value: {debouncedQuery || '...'}</p>
    </article>
  )
}

export default ExampleFourDebounce
