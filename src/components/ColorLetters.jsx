"use strict"
import { bottom } from '@popperjs/core';
import { React, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap';


function ColorLetters() {
  const [synesthesiaEnabled, setSynesthesiaEnabled] = useState(false);

  const toggleSynesthesia = () => {
    setSynesthesiaEnabled(!synesthesiaEnabled);
  };
  

  const applySynesthesia = (text) => {
    const colors = {
      A: "#FFA54F", B: "#F5F5DC", C: "#FFFDD0", D: "#D19290", E: "#C2B280",
      F: "#EEDC82", G: "#FFD700", H: "#FFB700", I: "#FFFFF0", J: "#F8DE7E",
      K: "#C3B091", L: "#E6E6FA", M: "#BDFCC9", N: "#F0DCC6", O: "#FFFFFB",
      P: "#FFE5B4", Q: "#CACCC4", R: "#B76E79", S: "#F4A460", T: "#8B8589",
      U: "#4166F5", V: "#F3E5AB", W: "#FFFFFF", X: "#738678", Y: "#FFFF00",
      Z: "#76B9D7"
    };
    
    const letters = text.split('');

    return letters.map((letter, index) => (
      <span key={index} style={{ color: synesthesiaEnabled ? colors[letter.toUpperCase()] : 'inherit' }}>
        {letter}
      </span>
    ));
  };

  return (
    <Container style={{ marginTop: '30px' }}>
      <Container style={{ display: 'flex', justifyContent: 'center'}}>
      <Row className="InfoHeader" >
        <h1>WHAT IN THE WORLD IS SYNESTHESIA???</h1>
      </Row>
      </Container>
      <Row className="InfoParagraph" style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '30px', color: 'lightgray' }}>
        <span>{applySynesthesia("Synesthesia is a condition where stimulation in one sensory or cognitive pathway triggers automatic experiences in another pathway. For instance, individuals may see music, taste colors, or hear smells. At its peak, synesthesia fully integrates senses, offering a profound perception blend. Many experience mild synesthetic phenomena naturally in daily life. For instance, an individual with synesthesia may perceive shapes when hearing music or associate colors with specific words. This condition can impact various senses, encompassing sight, smell, taste, touch, and sound.")}</span>
      </Row>
      <Row className="SmallHeader">
        <h5 className="text-center">Experience Grapheme-color Synesthesia<br />By Clicking Here</h5>
      </Row>
      <Container style={{ display: 'flex', justifyContent: 'center'}}>
      <Row className="SynesthesiaToggle" style={{ marginBottom: '30px', marginTop: '20px' }}>
        <Button 
          onClick={toggleSynesthesia} 
          style={{ 
            backgroundColor: '#FFA54F', 
            color: 'white', 
            borderRadius: '5px',
            width: 'fit-content',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#D19290'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FFA54F'}
            >
          {synesthesiaEnabled ? "Disable Synesthesia" : "Enable Synesthesia"}
        </Button>
      </Row>
      </Container>
    </Container>
  );
}

export default ColorLetters;
