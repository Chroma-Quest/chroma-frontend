import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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


const PianoKeyboard = () => {
  
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C"];
  const whiteSounds = [
     "Piano.ff.C5.aiff", 
     "Piano.ff.D5.aiff", 
     "Piano.ff.E5.aiff", 
     "Piano.ff.F5.aiff", 
     "Piano.ff.G5.aiff", 
     "Piano.ff.A5.aiff", 
     "Piano.ff.B5.aiff", 
     "Piano.ff.C6.aiff" 
   ];

  const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];
  const blackSounds = [
    "Piano.ff.C#5.aiff",
    "Piano.ff.D#5.aiff",
    "",
    "Piano.ff.F#5.aiff",
    "Piano.ff.G#5.aiff",
    "Piano.ff.A#5.aiff",
    ""
  ];

  const keyBind = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];
  const topKeyBind = ["w", "e", "", "t", "y", "u",]
  const bottomKeyBind = ["a", "s", "d", "f", "g", "h", "j", "k"]
  const keyColors = ["#FFFF00", "#00FFFF", "#228B22", "#DC143C", "#87CEEB", "#9370DB", "#DAA520", "#008000", "#FF6F61", "#FF8C00", "#4B0082", "#FF007F", "#FFFF00"]

  const handleKeydown = (event) => {
    console.log(`Pressed keyboard key: ${event.key}`);
    //click corresponding piano key with js.click()

  };

  const handleClick = (key) => {
    console.log(`Pressed piano key: ${key}`);
  }

  window.addEventListener("keydown", handleKeydown);

  return (
    <Container style={{height: '200px', width: '700px'}}>
      <Row className="justify-content-md-center">
        {whiteKeys.map((key, index) => (
          <Col key={index} xs="auto" style={{ position: 'relative', height: '100px', width: '60px', margin: '10px 1px' }}>
            {blackKeys[index] && (
              <>
              <p style={{position: 'absolute',
                  width: "75%",
                  height: "60%",
                  top: '0',
                  left: '80%',
                  color: 'darkslategrey',
                  textAlign: 'center'}}> {topKeyBind[index]} </p>
              <Button
                variant="dark"
                onClick={() => handleClick(blackKeys[index])}
                style={{
                  position: 'absolute',
                  width: "75%",
                  height: "60%",
                  top: '30px',
                  left: '80%',
                  zIndex: 1,
                  textAlign: 'center'
                }}
              >
                {blackKeys[index]}
              </Button>
              </>
            )}
            <Button
              variant="light"
              onClick={() => handleKeyDown(key)}
              style={{ 
                width: "100%", 
                height: "100%", 
                position: 'absolute',
                top: '30px',
                border: "2px solid black",
                lineHeight: '150px',
              }}
            >
              {key}
            </Button>
            <p style={{ 
                position: 'absolute',
                top: '135px',
                textAlign: 'center',
                width: '100%',
                color: 'darkslategrey'
              }}> {bottomKeyBind[index]} </p>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
};

export default PianoKeyboard;
