import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1 className='title greeting_title'>Welcome to the Future View</h1>
    <p className='text greeting_text'>Future you in your hands</p>
      <Login />
    </>
  )
}

export default App
