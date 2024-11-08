import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque harum iusto distinctio, eius error quasi animi exercitationem nihil cupiditate cumque? Optio adipisci illo quasi possimus dignissimos voluptates quibusdam nemo porro?</p>
      <Login />
    </>
  )
}

export default App
