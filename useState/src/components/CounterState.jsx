import { useState } from 'react'

function CounterState() {
  const [count, setCount] = useState(0)

  return (
    <article className="card">
      <h2>1) Counter State</h2>
      <p>
        Great for values that change from user actions. Use functional updates
        when the next value depends on the previous one.
      </p>
      <div className="counterRow">
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          -1
        </button>
        <strong>{count}</strong>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +1
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </article>
  )
}

export default CounterState
