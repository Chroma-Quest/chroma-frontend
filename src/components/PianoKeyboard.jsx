import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Ab5 from '../assets/piano-sounds/Piano.ff.Ab5.mp3';

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

  const keyBind = ["A", "W", "S", "E", "D", "F", "T", "G", "Y", "H", "U", "J"];

  const handleKeyDown = (key) => {
    console.log(`Pressed key: ${key}`);
    // Logic for when a key is pressed can be added here
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        {whiteKeys.map((key, index) => (
          <Col key={index} xs="auto" style={{ position: 'relative', height: '100px', width: '60px', margin: '10px 1px' }}>
            {blackKeys[index] && (
              <Button
                variant="dark"
                onClick={() => handleKeyDown(blackKeys[index])}
                style={{
                  position: 'absolute',
                  width: "75%",
                  top: '0',
                  left: '70%',
                  zIndex: 1,
                  textAlign: 'center'
                }}
              >
                {blackKeys[index]}
              </Button>
            )}
            <Button
              variant="light"
              onClick={() => handleKeyDown(key)}
              style={{ 
                width: "100%", 
                height: "100%", 
                position: 'absolute',
                bottom: 0,
                border: "2px solid black"
              }}
            >
              {key}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PianoKeyboard;
