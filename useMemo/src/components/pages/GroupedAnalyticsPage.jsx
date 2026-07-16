import { useMemo, useState } from 'react'

const ORDERS = [
  { id: 1, month: 'Jan', team: 'North', amount: 8400 },
  { id: 2, month: 'Jan', team: 'South', amount: 6200 },
  { id: 3, month: 'Feb', team: 'North', amount: 9100 },
  { id: 4, month: 'Feb', team: 'South', amount: 7600 },
  { id: 5, month: 'Mar', team: 'North', amount: 10400 },
  { id: 6, month: 'Mar', team: 'South', amount: 8800 },
  { id: 7, month: 'Apr', team: 'North', amount: 9700 },
  { id: 8, month: 'Apr', team: 'South', amount: 8100 },
]

function GroupedAnalyticsPage() {
  const [selectedTeam, setSelectedTeam] = useState('All')

  const rows = useMemo(() => {
    const scoped =
      selectedTeam === 'All' ? ORDERS : ORDERS.filter((entry) => entry.team === selectedTeam)

    const byMonth = scoped.reduce((accumulator, entry) => {
      accumulator[entry.month] = (accumulator[entry.month] ?? 0) + entry.amount
      return accumulator
    }, {})

    return Object.entries(byMonth).map(([month, amount]) => ({ month, amount }))
  }, [selectedTeam])

  return (
    <section className="panel">
      <h2>Example 4: Grouped Analytics</h2>
      <p>
        Dashboard-like transformations often combine filtering and grouping. useMemo keeps this derived data
        cached unless team selection changes.
      </p>

      <div className="controls">
        <label className="control">
          <span>Team</span>
          <select value={selectedTeam} onChange={(event) => setSelectedTeam(event.target.value)}>
            <option value="All">All teams</option>
            <option value="North">North</option>
            <option value="South">South</option>
          </select>
        </label>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td>${row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default GroupedAnalyticsPage
