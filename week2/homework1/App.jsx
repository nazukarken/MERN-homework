import { useState } from 'react'
import Homework from './Homework'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Homework/>
    </>
  )
}

export default App
