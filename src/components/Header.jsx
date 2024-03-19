
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import chromaLogo from '../assets/chroma-logo.png'


function Header() {
  
    return (
  
      <Navbar style={{width: '100vw', fontSize: '25px'}} >
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/simulator">Simulator</Nav.Link>
            <Nav.Link href="/info">Info</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
  
export default Header
  