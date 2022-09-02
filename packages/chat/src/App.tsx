import ChatClass from './chatClass'

let init = false
let chat: ChatClass | null = null
if (!init) {
  console.log('asd')
  chat = new ChatClass({
    css: ''
  })
  init = true
}
const open = () => {
  chat?.triggerOpen(true)
}

function App() {

  return (
    <div className="m-5">
      hello world <br />
      <button className="bg-blue-600 text-white" onClick={() => open()}>
        open
      </button>
    </div>
  )
}

export default App