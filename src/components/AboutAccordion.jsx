
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
                            <Card.Title>Brock Britton</Card.Title>
                            <Card.Text>
                                Brock is a developer born and living in the Seattle area. 
                                He specializes in Python and Javascript. He loves to build and solve puzzles. 
                                For this project he worked primarily on the simulator page, building the fireworks, the piano, and connecting the two together.
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
                            Introducing Ahmed, a multifaceted individual with a passion for both coding and classic literature.
            When not immersed in the world of Python code, Ahmed can be found delving into the pages of
            timeless literary works, savoring the richness of classic literature. Within the next two years,
            Ahmed aims to embark on the creation of a toy programming language—a testament to his nnovative spirit and dedication to the craft. With a
            love for both the intricacies of coding and the depths of literature, Ahmed is poised to weave
            together worlds both digital and literary in his pursuit of creative fulfillment
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
                            Meet Kawika, a devoted family man with a passion for football and a knack for real estate. When he's not spending quality
            time with his beloved wife and daughter, you can often find him on the field, enjoying a game of flag football. But Kawika isn't
            just a sports enthusiast; he's also a savvy entrepreneur. In impressive feat, at the age of 29, he successfully bought and
            resold multiple million-dollar homes in Hawaii, showcasing his sharp business acumen and determination. With a winning
            combination of family values, athletic spirit, and professional prowess, Kawika is ready to bring his skills to the tech world.
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
                            Introducing John, an avid outdoor enthusiast whose heart belongs to fishing. With a background in military service in
            Germany, he developed a deep admiration for the country's rich culture, notably cherishing the October
            Festival as his favorite event. With a love for the great outdoors and different cultures, John embodies a dynamic
            spirit eager to embrace life's diverse experiences.
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
                            Meet Justin, a multi-faceted individual whose journey spans from serving his country as a United States Air Force
            Veteran to delving into the realms of poetry and healthcare finance. With a heart for creativity, Justin finds s
            olace and expression through the written word, having been recognized and published multiple times for his poetic
            prowess. Beyond his literary endeavors, Justin brings his expertise in healthcare finance to the table, blending
            analytical skills with a deep understanding of the complexities within the healthcare industry. With a unique blend
            of experiences and talents, Justin brings a diverse perspective to every endeavor he undertakes.
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
                            Meet Mak, a globetrotter with a thirst for adventure and a zest for life. Having explored twenty-seven countries
            and counting, Mak's wanderlust knows no bounds, as he immerses himself in diverse cultures and experiences around
            the world. Back at home, Mak's leadership shines through his past role as a school senator during his time at the
            University of Washington, where he advocated for positive change and community engagement. When he's not jet-setting
            or championing causes, you can find Mak on the basketball court, indulging his passion for the game as both a
            devoted fan and a skilled player. With a penchant for exploration, a commitment to advocacy, and a love for the
            game, Mak brings a vibrant energy to everything he does.

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
