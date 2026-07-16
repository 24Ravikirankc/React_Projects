import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import HomePage from './components/pages/HomePage.jsx'
import ExpensiveCalculationPage from './components/pages/ExpensiveCalculationPage.jsx'
import FilterProductsPage from './components/pages/FilterProductsPage.jsx'
import StablePropsPage from './components/pages/StablePropsPage.jsx'
import GroupedAnalyticsPage from './components/pages/GroupedAnalyticsPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="expensive-calculation" element={<ExpensiveCalculationPage />} />
        <Route path="filter-and-sort" element={<FilterProductsPage />} />
        <Route path="stable-props" element={<StablePropsPage />} />
        <Route path="grouped-analytics" element={<GroupedAnalyticsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
