import OneMountOnly from './components/OneMountOnly'
import TwoDependencies from './components/TwoDependencies'
import ThreeCleanup from './components/ThreeCleanup'
import FourDebounce from './components/FourDebounce'
import FiveFetchData from './components/FiveFetchData'
import SixLocalStorage from './components/SixLocalStorage'
import './App.css'

function App() {
  const useCases = [
    'Synchronize with browser APIs (title, storage, geolocation)',
    'Handle subscriptions and cleanups (intervals, event listeners, sockets)',
    'Fetch async data that depends on props/state',
    'Debounce/throttle expensive side effects',
  ]

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">React Hooks Use Cases Examples</p>
        <h1>When And How To Use useEffect In React</h1>
        <p>
          The examples below focus on real side effects, not derived UI state.
          This is where <code>useEffect</code> shines.
        </p>
      </header>

      <section className="guide">
        <h2>When You Should Use useEffect</h2>
        <ul>
          {useCases.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </section>

      <section className="grid">
        <OneMountOnly />
        <TwoDependencies />
        <ThreeCleanup />
        <FourDebounce />
        <FiveFetchData />
        <SixLocalStorage />
      </section>

      <section className="guide">
        <h2>When You Should Not Use useEffect</h2>
        <p>
          If you can calculate something directly during render from props/state,
          avoid <code>useEffect</code>. Keep effects for external synchronization.
        </p>
      </section>
    </main>
  )
}

export default App
