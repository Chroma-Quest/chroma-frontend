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
              style={{
                width: "calc(90% - 10px)", // Adjusted width to fit closer
                margin: "10px", // Added margin to create space between buttons
                borderRadius: index === 0 || index === keys.length - 1 ? "0 0 5px 5px" : "0",
                borderTop: index === 0 || index === keys.length - 1 ? "1px solid #333" : "none",
                borderBottom: "none",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.1s ease-in-out",
                transformOrigin: "center",
              }}
              className="piano-key"
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
