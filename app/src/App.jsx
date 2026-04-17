import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import Hello from './components/Hello'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div>
    <h1> React counter application</h1>
    {count}
    <br />
    
    <button  onClick={() => setCount(count + 1)}>
      increment (+)
    </button>
    <button onClick={() => setCount(count -1)}>
      decrement (-)
    </button>
    <button onClick={() => setCount(0)}>
      Reset
    </button>
    </div>
    </>
  )
}

export default App
