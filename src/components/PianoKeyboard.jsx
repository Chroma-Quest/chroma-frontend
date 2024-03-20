import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import C5 from '../assets/piano-sounds/mp3/Piano.ff.C5.mp3';
import Csharp5 from '../assets/piano-sounds/mp3/Piano.ff.Db5.mp3';
import D5 from '../assets/piano-sounds/mp3/Piano.ff.D5.mp3';
import Dsharp5 from '../assets/piano-sounds/mp3/Piano.ff.Eb5.mp3';
import E5 from '../assets/piano-sounds/mp3/Piano.ff.E5.mp3';
import F5 from '../assets/piano-sounds/mp3/Piano.ff.F5.mp3';
import Fsharp5 from '../assets/piano-sounds/mp3/Piano.ff.Gb5.mp3';
import G5 from '../assets/piano-sounds/mp3/Piano.ff.G5.mp3';
import Gsharp5 from '../assets/piano-sounds/mp3/Piano.ff.Ab5.mp3';
import A5 from '../assets/piano-sounds/mp3/Piano.ff.A5.mp3';
import Asharp5 from '../assets/piano-sounds/mp3/Piano.ff.Bb5.mp3';
import B5 from '../assets/piano-sounds/mp3/Piano.ff.B5.mp3';
import C6 from '../assets/piano-sounds/mp3/Piano.ff.C6.mp3';
import './PianoKeyboard.css'; // Import CSS file for styling

const PianoKeyboard = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleKeyDown = (event) => {
    const keyMap = {
      'a': C5, 'w': Csharp5, 's': D5, 'e': Dsharp5, 'd': E5, 'f': F5,
      't': Fsharp5, 'g': G5, 'y': Gsharp5, 'h': A5, 'u': Asharp5, 'j': B5,
      'k': C6
    };

    const keySound = keyMap[event.key.toLowerCase()];
    if (keySound) {
      new Audio(keySound).play();
      setActiveKey(event.key.toLowerCase());
    }
  }

  const handleClick = (key) => {
    const keyMap = {
      'a': C5, 'w': Csharp5, 's': D5, 'e': Dsharp5, 'd': E5, 'f': F5,
      't': Fsharp5, 'g': G5, 'y': Gsharp5, 'h': A5, 'u': Asharp5, 'j': B5,
      'k': C6
    };

    const keySound = keyMap[key.toLowerCase()];
    if (keySound) {
      new Audio(keySound).play();
      setActiveKey(key.toLowerCase());
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C6"];
  const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];

  const keyBind = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];
  const topKeyBind = ["w", "e", "", "t", "y", "u",];
  const bottomKeyBind = ["a", "s", "d", "f", "g", "h", "j", "k"];

  return (
    <Container style={{ height: '200px', width: '700px' }}>
      <Row className="justify-content-md-center piano-keyboard">
        {whiteKeys.map((key, index) => (
          <Col key={index} xs="auto" style={{ position: 'relative', height: '150px', width: '60px', margin: '10px 1px' }}>
            {blackKeys[index] && (
              <>
                <p className="key-bind">{topKeyBind[index]}</p>
                <Button
                  variant={activeKey === keyBind[index] ? "dark" : "outline-dark"}
                  onClick={() => handleClick(blackKeys[index])}
                  className={`black-key ${activeKey === keyBind[index] ? 'active' : ''}`}
                  style={{ backgroundColor: 'black' }}
                >
                  {blackKeys[index]}
                </Button>
              </>
            )}
            <Button
              variant={activeKey === keyBind[index] ? "light" : "outline-light"}
              onClick={() => handleClick(key)}
              className={`white-key ${activeKey === keyBind[index] ? 'active' : ''}`}
              style={{ backgroundColor: 'white' }}
            >
              {key}
            </Button>
            <p className="key-bind">{bottomKeyBind[index]}</p>
          </Col>
        ))}
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};

export default PianoKeyboard;
