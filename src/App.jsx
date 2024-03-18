import { useState } from 'react'
import Header from './components/Header.jsx'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1> Testing 123 </h1>
    </>
  )
}

export default App
