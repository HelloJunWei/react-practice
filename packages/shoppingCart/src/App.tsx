import { Routes, Route } from "react-router-dom";
import Home from './views/Home'

export default function App() {
  return (
    <div>
      <h1>nav side</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
