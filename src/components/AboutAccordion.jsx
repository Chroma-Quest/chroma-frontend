
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/AboutAccordion.css'; // Import custom CSS file for styling

function AboutAccordion() {
    return (
        <Accordion defaultActiveKey="0">
             <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-accordion-header">Developer: Brock</Accordion.Header>
                <Accordion.Body className="custom-accordion-body">
                    <Card className="custom-card">
                        <Card.Body>
                            <Card.Title>Brock's Details</Card.Title>
                            <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Text>
                            <Button variant="primary">Contact Brock</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            {/* Add other developers */}
            <Accordion.Item eventKey="1">
                <Accordion.Header className="custom-accordion-header">Developer: Ahmed</Accordion.Header>
                <Accordion.Body className="custom-accordion-body">
                    <Card className="custom-card">
                        <Card.Body>
                            <Card.Title>Ahmed's Details</Card.Title>
                            <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Text>
                            <Button variant="primary">Contact Ahmed</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className="custom-accordion-header">Developer: Kawika</Accordion.Header>
                <Accordion.Body className="custom-accordion-body">
                    <Card className="custom-card">
                        <Card.Body>
                            <Card.Title>Kawika's Details</Card.Title>
                            <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Text>
                            <Button variant="primary">Contact Kawika</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header className="custom-accordion-header">Developer: John</Accordion.Header>
                <Accordion.Body className="custom-accordion-body">
                    <Card className="custom-card">
                        <Card.Body>
                            <Card.Title>John's Details</Card.Title>
                            <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Text>
                            <Button variant="primary">Contact John</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header className="custom-accordion-header">Developer: Justin</Accordion.Header>
                <Accordion.Body className="custom-accordion-body">
                    <Card className="custom-card">
                        <Card.Body>
                            <Card.Title>Justin's Details</Card.Title>
                            <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Text>
                            <Button variant="primary">Contact Justin</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header className="custom-accordion-header">Developer: Mak</Accordion.Header>
                <Accordion.Body className="custom-accordion-body">
                    <Card className="custom-card">
                        <Card.Body>
                            <Card.Title>Mak's Details</Card.Title>
                            <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Text>
                            <Button variant="primary">Contact Mak</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            {/* Add more developers as needed */}
        </Accordion>
    );
}

export default AboutAccordion;
