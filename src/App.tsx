import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Counter from './views/Counter'
import { useSelector } from 'react-redux'
import {userSelector} from './store/user'


// 驗證 user router guard
function GuardedRoute ({ children }: { children: JSX.Element }) {
  const { isSuccess } = useSelector(userSelector)
  return (
    isSuccess === true ? children : <Navigate to='/login' />
  )
} 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {
          /*
           <nav>
           <Link to="/home">home</Link> {'/'}
           <Link to="/">main</Link> {'/'}
           <Link to="/login">login</Link>
           </nav>
          */
        }
        { /* router view */ }
        <div className="mt-3">
          <Routes>
            <Route path="home" element={
              <GuardedRoute>
                <Home />
              </GuardedRoute>
            } />
            <Route path="/" element={
              <GuardedRoute>
                <Counter />
              </GuardedRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </header>
    </div>
  )
}

export default App
