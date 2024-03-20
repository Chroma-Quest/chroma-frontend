import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import newLogo from '../assets/chroma-logo.png'; // Rename your logo file accordingly
import '../styles/Header.css';

function Header() {
    const brandStyle = {
        fontSize: '70px', // Adjust the font size as needed for the brand
        fontFamily: 'Arial, sans-serif',
        color: 'black', // Font color for the brand
        fontWeight: 'bold', // Bold font for the brand
        display: 'flex',
        justifyContent: 'flex-start' // Align the brand to the lef
    };

    const colorMap = {
        'A': '#FFA54F', // Apricot
        'B': '#F5F5DC', // Beige
        'C': '#FFFDD0', // Cream
        'D': '#D19290', // Dusty Rose
        'E': '#C2B280', // Ecru
        'F': '#EEDC82', // Flaxen
        'G': '#FFD700', // Gold
        'H': '#FFB700', // Honey
        'I': '#FFFFF0', // Ivory
        'J': '#F8DE7E', // Jasmine
        'K': '#C3B091', // Khaki
        'L': '#E6E6FA', // Lavender
        'M': '#BDFCC9', // Mint
        'N': '#F0DCC6', // Nude
        'O': '#FFFFFB', // Off-white
        'P': '#FFE5B4', // Peach
        'Q': '#CACCC4', // Quartz
        'R': '#B76E79', // Rose Gold
        'S': '#F4A460', // Sand
        'T': '#8B8589', // Taupe
        'U': '#4166F5', // Ultramarine
        'V': '#F3E5AB', // Vanilla
        'W': '#FFFFFF', // White
        'X': '#738678', // Xanadu
        'Y': '#FFFF00', // Yellow
        'Z': '#76B9D7' // Zephyr Blue
    };

    const chromaName = 'CHROMA';
    const chromaArray = chromaName.split('');

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={brandStyle}>
                    <img
                        alt=""
                        src={newLogo}
                        width="110"
                        height="100"
                        className="d-inline-block align-top"
                    />{' '}
                    {chromaArray.map((letter, index) => (
                        <span key={index} style={{ textShadow: `0 0 15px ${colorMap[letter.toUpperCase()]}` }}>{letter}</span>
                    ))}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="custom-nav mr-auto"> {/* Adding custom class */}
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/simulator">SIMULATOR</Nav.Link>
                        <Nav.Link href="/info">INFO</Nav.Link>
                        <Nav.Link href="/feedback">FEEDBACK</Nav.Link>
                        <Nav.Link href="/about">ABOUT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
