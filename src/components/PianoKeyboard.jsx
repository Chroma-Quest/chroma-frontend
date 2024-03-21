import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
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
import '../styles/PianoKeyboard.css';

const labels_colors_notes = {
  'C': {
    color: "#FFFF00",
    sound: C5,
    key_bind: "a"
  },
  'C#': {
    color: "#00FFFF",
    sound: Csharp5,
    key_bind: "w"
  },
  'D': {
    color: "#228B22",
    sound: D5,
    key_bind: "s"
  },
  'D#': {
    color: "#DC143C",
    sound: Dsharp5,
    key_bind: "e"
  },
  'E': {
    color: "#87CEEB",
    sound: E5,
    key_bind: "d"
  },
  'F': {
    color: "#9370DB",
    sound: F5,
    key_bind: "f"
  },
  'F#': {
    color: "#DAA520",
    sound: Fsharp5,
    key_bind: "t"
  },
  'G': {
    color: "#008000",
    sound: G5,
    key_bind: "g"
  },
  'G#': {
    color: "#FF6F61",
    sound: Gsharp5,
    key_bind: "y"
  },
  'A': {
    color: "#FF8C00",
    sound: A5,
    key_bind: "h"
  },
  'A#': {
    color: "#4B0082",
    sound: Asharp5,
    key_binds: "u"
  },
  'B': {
    color: "#FF007F",
    sound: B5,
    key_binds: "j"
  },
  'C6': {
    color: "#FFFF00",
    sound: C6,
    key_bind: "k"
  },

}

const PianoKeyboard = (props) => {
  const handleKeyDown = async (event) => {
    if (keyBinds.includes(event.key)) {
      for (const note in labels_colors_notes) {
        const { key_bind, color, sound } = labels_colors_notes[note];
        if (event.key == key_bind) {
          new Audio(sound).play();
          props.setColorsQueue([...props.colorsQueue, color]);
          //document.getElementById(`key-${note}`).click()
        }

        
      }
    }
  }

  const handleClick = async (key) => {
    console.log(labels_colors_notes[key]['color'])
    new Audio(labels_colors_notes[key]['sound']).play();
    props.setColorsQueue([...props.colorsQueue, labels_colors_notes[key]['color']]);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);


  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C6"];
  const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];

  const keyBinds = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k"];
  const topKeyBind = ["w", "e", "", "t", "y", "u",]
  const bottomKeyBind = ["a", "s", "d", "f", "g", "h", "j", "k"]

  return (
    <Container className="Container">
      <Row className="justify-content-md-center">
        {whiteKeys.map((key, index) => (
          <Col key={index} xs="auto" className="white-key-col">
            {blackKeys[index] && (
              <>
              <p className="black-bind-label"> {topKeyBind[index]} </p>
              <Button bsPrefix="black-key-btn"
                onClick={() => handleClick(blackKeys[index])}
                id={`key-${blackKeys[index]}`}
              >
                {blackKeys[index]}
              </Button>
              </>
            )}
            <Button bsPrefix="white-key-btn"
              onClick={() => handleClick(key)}
              id={`key-${key}`}
            >
              {key}
            </Button>
            <p className="white-bind-label"> {bottomKeyBind[index]} </p>
          </Col>
        ))}
        <Col xs={2}></Col> {/* Empty column to center the keys */}
      </Row>
    </Container>
  );
};

export default PianoKeyboard;