import { useMemo, useState } from 'react'

function countPrimes(limit) {
  let total = 0

  for (let value = 2; value <= limit; value += 1) {
    let isPrime = true

    for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
      if (value % divisor === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      total += 1
    }
  }

  return total
}

function ExpensiveCalculationPage() {
  const [limit, setLimit] = useState(20000)
  const [theme, setTheme] = useState('sunrise')

  const primeCount = useMemo(() => countPrimes(limit), [limit])

  return (
    <section className="panel">
      <h2>Example 1: Expensive Calculation</h2>
      <p>
        Counting prime numbers can be expensive. useMemo recalculates only when the number limit changes,
        not when theme changes.
      </p>

      <div className="controls">
        <label className="control">
          <span>Upper limit: {limit}</span>
          <input
            type="range"
            min="5000"
            max="50000"
            step="500"
            value={limit}
            onChange={(event) => setLimit(Number(event.target.value))}
          />
        </label>

        <button
          type="button"
          className="action"
          onClick={() => setTheme((current) => (current === 'sunrise' ? 'ocean' : 'sunrise'))}
        >
          Toggle theme marker
        </button>
      </div>

      <p className="metric">Prime count from 1 to {limit}: {primeCount}</p>
      <p className="note">Current visual marker: {theme}</p>
    </section>
  )
}

export default ExpensiveCalculationPage
