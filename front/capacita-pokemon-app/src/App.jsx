import { useState } from 'react'
import Pokemon from './components/pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon/>
    </>
  )
}

export default App