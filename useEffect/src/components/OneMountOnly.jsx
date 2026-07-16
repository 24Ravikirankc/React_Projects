import { useEffect, useState } from 'react'

function ExampleOneMountOnly() {
  const [welcomeMessage, setWelcomeMessage] = useState('Loading message...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessage('This text was set once after mount.')
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <article className="card">
      <h3>1. Run Once On Mount</h3>
      <p>
        Use an empty dependency array when you need one-time setup logic, like
        analytics, startup data loading, or welcome banners.
      </p>
      <pre>{`useEffect(() => {
  // run only after first render
}, [])`}</pre>
      <p className="result">Result: {welcomeMessage}</p>
    </article>
  )
}

export default ExampleOneMountOnly
