
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
import '../styles/PianoKeyboard.css';

const labels_colors_notes = {
  'a': {
    color: "#FFFF00",
    sound: C5,
  },
  'w': {
    color: "#00FFFF",
    sound: Csharp5,
  },
  's': {
    color: "#228B22",
    sound: D5,
  },
  'e': {
    color: "#DC143C",
    sound: Csharp5,
  },
  'd': {
    color: "#87CEEB",
    sound: E5,
  },
  'f': {
    color: "#9370DB",
    sound: F5,
  },
  't': {
    color: "#DAA520",
    sound: Fsharp5,
  },
  'g': {
    color: "#008000",
    sound: G5,
  },
  'y': {
    color: "#FF6F61",
    sound: Gsharp5,
  },
  'h': {
    color: "#FF8C00",
    sound: A5,
  },
  'u': {
    color: "#4B0082",
    sound: Asharp5,
  },
  'j': {
    color: "#FF007F",
    sound: B5,
  },
  'k': {
    color: "#FFFF00",
    sound: C6,
  },

}

const PianoKeyboard = (props) => {
  const handleKeyDown = async (event) => {
    if (keyBinds.includes(event.key)) {
      new Audio(labels_colors_notes[event.key]['sound']).play();
      
      props.setColorsQueue([...props.colorsQueue, labels_colors_notes[event.key]['color']]);
      
    }
  }

  const handleClick = (key) => {
    console.log(key)
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);


  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C6"];
  const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];

  const keyBinds = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k"];
  const topKeyBind = ["w", "e", "", "t", "y", "u",]
  const bottomKeyBind = ["a", "s", "d", "f", "g", "h", "j", "k"]
  const keyColors = ["#FFFF00", "#00FFFF", "#228B22", "#DC143C", "#87CEEB", "#9370DB", "#DAA520", "#008000", "#FF6F61", "#FF8C00", "#4B0082", "#FF007F", "#FFFF00"]

  return (
    <Container className="Container">
      <Row className="justify-content-md-center">
        {whiteKeys.map((key, index) => (
          <Col key={index} xs="auto" className="white-key-col">
            {blackKeys[index] && (
              <>
              <p className="black-key-desc"> {topKeyBind[index]} </p>
              <Button
                variant="dark"
                onClick={() => handleClick(blackKeys[index])}
                className = "black-key-btn"
              >
                {blackKeys[index]}
              </Button>
              </>
            )}
            <Button
              variant="light"
              onClick={() => handleClick(key)}
              className="white-key-btn"
            >
              {key}
            </Button>
            <p className="key-bind-desc"> {bottomKeyBind[index]} </p>
          </Col>
        ))}
        <Col xs={2}></Col> {/* Empty column to center the keys */}
      </Row>
    </Container>
  );
};

export default PianoKeyboard;