import { useEffect, useState } from 'react'

function ExampleTwoDependencies() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicks: ${count}`
  }, [count])

  return (
    <article className="card">
      <h3>2. Run When Dependency Changes</h3>
      <p>
        Add state or props in dependencies when your side effect must stay in
        sync with changing data.
      </p>
      <pre>{`useEffect(() => {
  document.title = "Clicks: ${count}"
}, [count])`}</pre>
      <button onClick={() => setCount((previous) => previous + 1)}>
        Clicked {count} times
      </button>
    </article>
  )
}

export default ExampleTwoDependencies
