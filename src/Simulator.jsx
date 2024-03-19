

import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FireworksCanvas from './components/FireworksCanvas.jsx';
import PianoKeyboard from './components/PianoKeyboard.jsx';
import './styles/App.css';



function Simulator() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <FireworksCanvas />
      <PianoKeyboard />
      <Footer />
      
    </>
  )
}

export default Simulator
