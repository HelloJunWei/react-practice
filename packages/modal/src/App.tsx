import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useModal from './hooks/modals'
import { sleep } from './utils/utils'

const submitFn = async(value: string) => {
  await sleep(1000)
  console.log(value)
}

function App() {
  const [count, setCount] = useState(0)
  const { openModal } = useModal()

  const openInputModal = useCallback(() => {
    openModal('InputModal', {
      value: 'dynamic',
      submit: submitFn
    })
  }, [])

  const openAlertModal = useCallback(() => {
    openModal('AlertModal', {
      text: 'I am alert',
    })
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
      <button onClick={()=> openInputModal()}>
        openInputModal
      </button>
      <p>
        <button onClick={()=> openAlertModal()}>
          openAlertModal
        </button>
      </p>
    </div>
  )
}

export default App
