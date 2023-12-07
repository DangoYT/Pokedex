import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h1>Pokemon</h1>
        <input type="search" />
      </section>
    </>
  )
}

export default App
