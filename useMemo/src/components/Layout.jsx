import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/expensive-calculation', label: 'Expensive Calculation' },
  { to: '/filter-and-sort', label: 'Filter and Sort List' },
  { to: '/stable-props', label: 'Stable Props' },
  { to: '/grouped-analytics', label: 'Grouped Analytics' },
]

function Layout() {
  return (
    <div className="app-shell">
      <header className="hero-header">
        <p className="eyebrow">useMemo Performance Demo</p>
        <h1>useMemo In Real Projects</h1>
        <p className="hero-copy">
          Explore practical use cases where useMemo avoids repeated work and keeps UI updates smooth.
        </p>
      </header>

      <nav className="tab-nav" aria-label="useMemo examples">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive ? 'tab-link tab-link-active' : 'tab-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <main className="page-frame">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
