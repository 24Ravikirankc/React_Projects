import ArrayStateforTask from './components/ArrayStateforTask'
import CounterState from './components/CounterState'
import FormObjectState from './components/FormObjectState'
import ToggleUiState from './components/ToggleUiState'
import './App.css'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">React Hook Deep Dive</p>
        <h1>Real useState Use Cases You Will Actually Build</h1>
        <p className="intro">
          This mini app shows where useState shines: counters, UI toggles,
          form control, and list updates.
        </p>
      </header>

      <section className="grid">
        <CounterState />
        <ToggleUiState />
        <FormObjectState />
        <ArrayStateforTask />
      </section>

      <section className="tips card">
        <h2>When to use useState</h2>
        <ul>
          <li>Use it for component-level, interactive, changing data.</li>
          <li>Use functional updates when the next value depends on previous.</li>
          <li>Use object/array patterns for grouped and list-based data.</li>
          <li>Avoid it for values that never change.</li>
          <li>
            For complex transitions across many actions, consider useReducer.
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
