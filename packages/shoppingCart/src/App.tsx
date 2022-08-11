import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Store from './views/Store'
import NavBar from './components/NavBar'
import ErrorBoundary from './components/ErrorBoundart'
import { ShoppingCartProvider } from './context/ShoppingCartContext'


export default function App() {
  const location = useLocation()
  console.log(location)
  return (
    <ErrorBoundary>
      <div>
        <ShoppingCartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store"  element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ShoppingCartProvider>
      </div>
    </ErrorBoundary>
  )
}
