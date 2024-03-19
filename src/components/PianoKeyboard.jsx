import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const PianoKeyboard = () => {
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C"];
  const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];
  const keyBind = ["A", "W", "S", "E", "D", "F", "T", "G", "Y", "H", "U", "J"];

  const handleKeyDown = (key) => {
    console.log(`Pressed key: ${key}`);
    // Logic for when a key is pressed can be added here
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        {whiteKeys.map((key, index) => (
          <Col key={index} xs="auto" style={{ position: 'relative', height: '100px', width: '60px', marginBottom: '10px' }}>
            {blackKeys[index] && (
              <Button
                variant="dark"
                onClick={() => handleKeyDown(blackKeys[index])}
                style={{
                  position: 'absolute',
                  width: "70%",
                  top: '0',
                  left: '70%',
                  zIndex: 1,
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
