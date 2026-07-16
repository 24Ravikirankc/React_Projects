import { useEffect, useMemo, useState } from 'react'

function ExampleSixLocalStorage() {
  const [name, setName] = useState(() => {
    return localStorage.getItem('preferred_name') || ''
  })

  useEffect(() => {
    localStorage.setItem('preferred_name', name)
  }, [name])

  const preview = useMemo(() => name.trim() || 'Anonymous learner', [name])

  return (
    <article className="card">
      <h3>6. Sync State To Browser Storage</h3>
      <p>
        Helpful for persisting forms, filters, and user preferences between page
        refreshes.
      </p>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <p className="result">Preview: {preview}</p>
    </article>
  )
}

export default ExampleSixLocalStorage
