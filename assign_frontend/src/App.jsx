import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import WinIphone from './pages/WinIphone'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<WinIphone />} />


      </Routes>

    </>
  )
}

export default App
