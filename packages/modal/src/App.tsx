import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useModal from './hooks/modals'

function App() {
  const [count, setCount] = useState(0)
  const { openModal } = useModal()

  const testOpenAndCloseModal = useCallback(() => {
    const{ closeModal } = openModal('test', 'test')
    setTimeout(() => {
      if(closeModal) closeModal()
    }, 5000)

  }, [])

  useEffect(() => {
    let check = false
    if (check) return
    console.log('fire')
    return () => {
      check = true
      console.log('un fire')
    }
  }, [count])
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=> setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=> testOpenAndCloseModal()}>
        openModal
      </button>
    </div>
  )
}

export default App
