import { useState } from 'react'

function ToggleUiState() {
  const [isOnline, setIsOnline] = useState(false)

  return (
    <article className="card">
      <h2>2) Toggle UI State</h2>
      <p>
        Perfect for show/hide, open/close, enabled/disabled, and status flags.
      </p>
      <button
        type="button"
        className={isOnline ? 'online' : 'offline'}
        onClick={() => setIsOnline((prev) => !prev)}
      >
        {isOnline ? 'Online' : 'Offline'}
      </button>
    </article>
  )
}

export default ToggleUiState
