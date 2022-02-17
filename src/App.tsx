import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Counter from './views/Counter'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">home</Link> {'/'}
        <Link to="/">main</Link>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App
