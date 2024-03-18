
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import chromaLogo from '../assets/chroma-logo.png'

function Header() {
  
    return (
  
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
                alt=""
                src={chromaLogo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            Chroma
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Testing</Nav.Link>
            <Nav.Link href="#link">Feedback</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
  
export default Header
  