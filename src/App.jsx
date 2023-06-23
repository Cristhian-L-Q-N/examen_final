import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UfaContainer from './components/ufa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UfaContainer/>
  )
}

export default App
