import { memo, useMemo, useState } from 'react'

const TeamSummary = memo(function TeamSummary({ stats }) {
  return (
    <div className="summary-grid">
      {stats.map((item) => (
        <article key={item.label} className="summary-card">
          <p>{item.label}</p>
          <h4>{item.value}</h4>
        </article>
      ))}
    </div>
  )
})

function StablePropsPage() {
  const [wins, setWins] = useState(18)
  const [losses, setLosses] = useState(7)
  const [note, setNote] = useState('Ready')

  const stats = useMemo(() => {
    const totalGames = wins + losses
    const winRate = totalGames === 0 ? 0 : (wins / totalGames) * 100

    return [
      { label: 'Wins', value: wins },
      { label: 'Losses', value: losses },
      { label: 'Total Games', value: totalGames },
      { label: 'Win Rate', value: `${winRate.toFixed(1)}%` },
    ]
  }, [wins, losses])

  return (
    <section className="panel">
      <h2>Example 3: Stable Props for memoized Child</h2>
      <p>
        TeamSummary is wrapped with React.memo. useMemo keeps the stats array stable so the child skips
        re-render when only note changes.
      </p>

      <div className="controls controls-grid">
        <button type="button" className="action" onClick={() => setWins((value) => value + 1)}>
          Add win
        </button>
        <button type="button" className="action" onClick={() => setLosses((value) => value + 1)}>
          Add loss
        </button>
        <label className="control">
          <span>Coach note</span>
          <input type="text" value={note} onChange={(event) => setNote(event.target.value)} />
        </label>
      </div>

      <p className="note">Current note: {note}</p>
      <TeamSummary stats={stats} />
    </section>
  )
}

export default StablePropsPage
