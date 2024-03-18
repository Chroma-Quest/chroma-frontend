
import { useState } from 'react';
import Header from './components/Header.jsx';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />

    </>
  )
}

export default App
