
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, React } from "react";
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
  
  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'a':
        console.log('a')
        new Audio(C5).play();
        break;
      case 'w':
        new Audio(Csharp5).play();
        break;
      case 's':
        console.log('s')
        new Audio(D5).play();
        break;
      case 'e':
        new Audio(Dsharp5).play();
        break;
      case 'd':
        new Audio(E5).play();
        break;
      case 'f':
        new Audio(F5).play();
        break;
      case 't':
        new Audio(Fsharp5).play();
        break;
      case 'g':
        new Audio(G5).play();
        break;
      case 'y':
        new Audio(Gsharp5).play();
        break;
      case 'h':
        new Audio(A5).play();
        break;
      case 'u':
        new Audio(Asharp5).play();
        break;
      case 'j':
        new Audio(B5).play();
        break;
      case 'k':
        new Audio(C6).play();
        break;
      case ' ':
        console.log("firework")
        break
      default:
        console.log("NOT DEFINED");
        console.log(event.key)
        break;
    }
  }

  const handleClick = (key) => {
    console.log(key)
  }

  useEffect(() => {
    console.log("hello")
    
  }, []);

  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C6"];
  const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];

  const keyBind = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];
  const topKeyBind = ["w", "e", "", "t", "y", "u",]
  const bottomKeyBind = ["a", "s", "d", "f", "g", "h", "j", "k"]
  const keyColors = ["#FFFF00", "#00FFFF", "#228B22", "#DC143C", "#87CEEB", "#9370DB", "#DAA520", "#008000", "#FF6F61", "#FF8C00", "#4B0082", "#FF007F", "#FFFF00"]

  
  window.addEventListener("keydown", handleKeyDown);

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
              onClick={() => handleClick(key)}
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
        <Col xs={2}></Col> {/* Empty column to center the keys */}
      </Row>
    </Container>
  );
};

export default PianoKeyboard;