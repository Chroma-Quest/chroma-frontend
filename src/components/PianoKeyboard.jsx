import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/PianoKeyboard.css"; // Import CSS file for custom styles

const PianoKeyboard = () => {
  const keys = ["C", "D", "E", "F", "G", "A", "B", "C"];

  const handleKeyDown = (key) => {
    console.log(`Pressed key: ${key}`);
    // You can add your logic here for what happens when a key is pressed
  };

  return (
    <Container>
      <Row>
        <Col xs={2}></Col> {/* Empty column to center the keys */}
        {keys.map((key, index) => (
          <Col key={index} xs={1}>
            <Button
              variant="dark"
              onClick={() => handleKeyDown(key)}
              className="piano-key"
            >
              {key}
            </Button>
          </Col>
        ))}
        <Col xs={2}></Col> {/* Empty column to center the keys */}
      </Row>
    </Container>
  );
};

export default PianoKeyboard;
