import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const PianoKeyboard = () => {
  const keys = ["C", "D", "E", "F", "G", "A", "B", "C"];

  const handleKeyDown = (key) => {
    console.log(`Pressed key: ${key}`);
    // You can add your logic here for what happens when a key is pressed
  };

  return (
    <Container>
      <Row>
        {keys.map((key, index) => (
          <Col key={index} xs={1}>
            <Button
              variant="dark"
              onClick={() => handleKeyDown(key)}
              style={{ width: "100%", marginBottom: "10px" }}
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