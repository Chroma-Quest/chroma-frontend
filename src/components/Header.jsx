
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import chromaLogo from '../assets/chroma-logo.png'


function Header() {
  
    return (
  
      <Navbar style={{width: '100vw', fontSize: '25px'}} expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{fontSize: '45px'}} >
            <img
                alt=""
                src={chromaLogo}
                width="165"
                height="150"
              />{' '}
            Chroma
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Simulator</Nav.Link>
            <Nav.Link href="#link">Info</Nav.Link>
            <Nav.Link href="#link">Feedback</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
  
export default Header
  