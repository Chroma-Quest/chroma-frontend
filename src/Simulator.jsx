import { useState } from 'react';
import FireworksCanvas from './components/FireworksCanvas.jsx';
import PianoKeyboard from './components/PianoKeyboard.jsx';
import './styles/App.css';

function Simulator() {
  const [colorsQueue, setColorsQueue] = useState([])
  return (
    <>
      <FireworksCanvas colorsQueue={colorsQueue} />
      <PianoKeyboard setColorsQueue={setColorsQueue} colorsQueue={colorsQueue} />
    </>
  )
}

export default Simulator;
