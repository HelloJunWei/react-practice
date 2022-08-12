import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Store from './views/Store'
import PageNotFound from './views/PageNotFound'
import Shop from './views/Shop'
import ErrorBoundary from './components/ErrorBoundart'


export default function App() {
  const location = useLocation()
  console.log(location)
  return (
    <ErrorBoundary>
      <div>
        <Routes >
          <Route path="/example" element={<Home />} />
          <Route path="/" element={<Shop />}>
            <Route index element={<Store /> } />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<PageNotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  )
}
