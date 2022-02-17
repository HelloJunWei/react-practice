import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Counter from './views/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <nav>
          <Link to="/home">home</Link> {'/'}
          <Link to="/">main</Link>
        </nav>
        { /* router view */ }
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Counter />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
