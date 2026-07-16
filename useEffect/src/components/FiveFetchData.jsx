import { useEffect, useState } from 'react'

function ExampleFiveFetchData() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const loadUsers = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users?_limit=4',
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()
        setUsers(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadUsers()

    return () => controller.abort()
  }, [])

  return (
    <article className="card">
      <h3>5. Fetch Data After Render</h3>
      <p>
        Use this when data should be loaded when a component appears.
        cancellation keeps fast navigation safe.
      </p>
      {loading && <p className="result">Loading users...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ExampleFiveFetchData
