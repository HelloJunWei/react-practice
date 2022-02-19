import '../App.css'
import { InitState, increment, incrementAsync, incrementAsync2 } from '../store/counter'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
  const count = useSelector((state: { counter: InitState }) => {
    return state.counter.count
  })

  const dispatch = useDispatch()

  const addAsync = async() => {
    await dispatch(incrementAsync2(3)).unwrap()
    console.log('add finish')
  }

  return (
    <div className="App">
      <p>
        <button type="button" className="bg-slate-400" onClick={ () => dispatch(increment())}>
          count is: {count}
        </button>
      </p>
      <p>
        <button type="button" onClick={ () => addAsync() }>
          add async
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </div>
  )
}

export default Counter
