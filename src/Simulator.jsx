

import { useState } from 'react';
import FireworksCanvas from './components/FireworksCanvas.jsx';
import PianoKeyboard from './components/PianoKeyboard.jsx';
import './styles/App.css';



function Simulator() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FireworksCanvas />
      <PianoKeyboard />
    </>
  )
}

export default Simulator;
