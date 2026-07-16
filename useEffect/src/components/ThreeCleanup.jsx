import { useEffect, useState } from 'react'

function ExampleThreeCleanup() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((previous) => previous + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <article className="card">
      <h3>3. Cleanup Side Effects</h3>
      <p>
        Effects that subscribe, listen, or schedule work should clean up to
        avoid memory leaks.
      </p>
      <pre>{`useEffect(() => {
  const id = setInterval(tick, 1000)
  return () => clearInterval(id)
}, [])`}</pre>
      <p className="result">Timer: {seconds}s</p>
    </article>
  )
}

export default ExampleThreeCleanup
