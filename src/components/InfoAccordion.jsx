"use strict"

import { bottom } from '@popperjs/core';
import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Info.css';

function InfoAccordion() {

    return (
    <>
        <div 
            className='accordionMain'
            style={{ 
            display: 'flex',
            marginTop: '30px',
            }}>
            <div 
                className='accordionAlign'
                style={{
                width: '100%'
                }}>
                <div 
                    className='synesthesiaTypesHeader'
                    style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                    marginRight: '15px',
                    marginLeft: '30px',
                    borderRadius: '5px',
                    }}>
                    <h1>Synesthesia Types</h1>
                </div>
                <div 
                    className='synesthesiaTypes'
                    style={{ 
                    marginRight: '15px', 
                    marginLeft: '30px',
                    }}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Auditory-Tactile Synesthesia</Accordion.Header>
                            <Accordion.Body>
                            This occurs when certain sounds elicit specific bodily sensations. For instance, hearing a loud noise might cause tingling on the back of one's neck.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Chromesthesia</Accordion.Header>
                            <Accordion.Body>
                            This type of synesthesia involves associating colors with certain sounds. For example, hearing a car honking might trigger the perception of vibrant colors.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Grapheme-color Synesthesia</Accordion.Header>
                            <Accordion.Body>
                            Individuals experiencing this form perceive letters and numbers with particular colors. For instance, they might consistently see the letter "A" as red and the number "7" as yellow.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Lexical-gustatory Synesthesia</Accordion.Header>
                            <Accordion.Body>
                            In this variation, hearing certain words evokes distinct tastes. For example, hearing the word "chocolate" might bring about the sensation of sweetness on the palate.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" bsPrefix='dark-accordion-item'>
                            <Accordion.Header >Mirror-touch Synesthesia</Accordion.Header>
                            <Accordion.Body>
                            This unique form involves feeling sensations on one's own body when observing others being touched. For instance, witnessing someone receiving a hug might cause the synesthete to feel the physical sensation of being hugged themselves.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Number Form</Accordion.Header>
                            <Accordion.Body>
                            Individuals with this type have a mental map of numbers that automatically appears when they think of numbers. For example, they might visualize numbers arranged in a specific spatial pattern, such as a spiral or a line.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Ordinal Linguistic Personification</Accordion.Header>
                            <Accordion.Body>
                            This form associates ordered sequences, like days of the week, with personalities or genders. For instance, someone might perceive Monday as stern or masculine, while Friday might be seen as more jovial or feminine.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Spatial Sequence Synesthesia</Accordion.Header>
                            <Accordion.Body>
                            This variation involves perceiving numbers or numerical sequences as points in space. For example, individuals may visualize numbers arranged close together or far apart, depending on their numerical value.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
                <div 
                className='accordionAlign'
                style={{
                width: '100%'
                }}>
                <div 
                    className='mostAskedQuestionsHeader'
                    style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                    marginRight: '30px',
                    marginLeft: '15px',
                    borderRadius: '5px',
                    }}>
                    <h1>Most Asked Questions</h1>
                </div>
                <div 
                    className='mostAskedQuestions'
                    style={{ 
                    marginRight: '30px', 
                    marginLeft: '15px',
                    }}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Who is a Synesthete?</Accordion.Header>
                            <Accordion.Body>
                            A synesthete is an individual who consistently reports experiencing synesthesia throughout their life. Many view synesthesia as a distinctive gift, enabling them to perceive the world through a fusion of multiple senses.                        
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>How Prevalent is Synesthesia?</Accordion.Header>
                            <Accordion.Body>
                            Approximately 3 to 5 percent of the population is estimated to have some form of synesthesia, with women more frequently identified as synesthetes than men.                        
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Is Synesthesia Innate?</Accordion.Header>
                            <Accordion.Body>
                            Synesthesia typically emerges in early childhood and is believed to have a genetic basis. There is ongoing debate as to whether everyone is born with some level of synesthetic ability or if it's a unique perceptual trait shared by select individuals.                        
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Can Synesthesia Develop Suddenly?</Accordion.Header>
                            <Accordion.Body>
                            In rare instances, synesthesia may develop later in life, either temporarily due to factors like psychedelic drug use, meditation, or sensory deprivation, or permanently following events such as head trauma, strokes, or brain tumors.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" bsPrefix='dark-accordion-item'>
                            <Accordion.Header >What are the Advantages of Synesthesia?</Accordion.Header>
                            <Accordion.Body>
                            Research suggests that synesthetes often possess more vivid mental imagery and demonstrate enhanced creative thinking, potentially linked to increased brain connectivity and ease with metaphors.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Is Synesthesia a Mental Disorder?</Accordion.Header>
                            <Accordion.Body>
                            No, synesthesia is not classified as a mental illness; rather, it's regarded as a distinctive sensory phenomenon, offering a novel perspective on the world through the blending of senses.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Does Synesthesia have a Hereditary Component?</Accordion.Header>
                            <Accordion.Body>
                            Yes, there appears to be a genetic influence on synesthesia, as it can be passed down from one generation to another within families.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" bsPrefix='dark-accordion-item'>
                            <Accordion.Header>Who First Documented Synesthesia?</Accordion.Header>
                            <Accordion.Body>
                            The earliest mentions of synesthesia date back to the 19th century, notably recorded by scientist Francis Galton, although systematic research into the phenomenon did not begin until the late 20th century.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'gray',
                marginTop: '60px',
                width: 'fit-content',
                borderRadius: '5px',
                paddingRight: '30px',
                paddingLeft: '30px',
            }}>
            <h1>Some Famous Celebrities with Synesthesia</h1>
            </div>
        </div>
        <div style={{
            display: 'flex',
            margin: '30px',
            justifyContent: 'space-evenly'
        }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./Assets/KANYE.webp" />
                <Card.Body>
                    <Card.Title>Kanye West</Card.Title>
                    <Card.Text>
                    Kanye West, renowned rapper and music producer, is among the celebrities with synesthesia, a neurological condition blending senses. Specifically, West experiences chromesthesia, where sounds evoke colors and vice versa, influencing his creative process. Synesthesia, often found in creative individuals, aids in artistic expression, aligning with West's multidimensional approach to music. Like other synesthetes, West's synesthetic experiences likely contribute to his unique perception of the world and his innovative contributions to the music industry.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./Assets/DUKE.jpg" />
                <Card.Body>
                    <Card.Title>Duke Ellington</Card.Title>
                    <Card.Text>
                    Duke Ellington, renowned jazz icon, was not only a pianist, bandleader, and composer but also a visionary whose influence on jazz and other genres remains unparalleled. His music, characterized by sensuous melodies and daring harmonies, may have been shaped by synesthesia, particularly chromosthesia, where sounds evoke colors. Ellington's early talent as a painter hints at his synesthetic experiences, with his ability to hear sounds as colors and see colors as sound influencing his musical compositions. He regarded his band as his palette, likening stage performances to creating new paintings each night, and embraced the individual talents of his band members, resulting in a unique and narrative-driven approach to music composition and performance.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./Assets/MONROE.jpg" />
                <Card.Body>
                    <Card.Title>Marilyn Monroe</Card.Title>
                    <Card.Text>
                    According to accounts from Marylin Monroe's first husband and niece, Norma Jean Mortensen was believed to be synesthetic. Descriptions liken her sensory experiences to those induced by drugs, with instances of perceiving colors intensely, such as enjoying peas and carrots for their colors. Synesthesia, previously unrecognized by Monroe and her niece, is likened to an extraordinary sensitivity and imagination, traits acknowledged and nurtured during their acting studies with Lee Strasberg. Monroe's remarkable performance in "Bus Stop" is attributed to her synesthetic abilities, highlighting the impact of sensory perceptions on her craft and suggesting a familial connection to the trait.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./Assets/RUSH.jpg" />
                <Card.Body>
                    <Card.Title>Geoffrey Rush</Card.Title>
                    <Card.Text>
                    Geoffrey Rush, celebrated actor known for diverse roles, shares insights into his synesthesia during a phone interview from his home in Melbourne, Australia. Rush recounts early childhood experiences where sounds were associated with colors and shapes, a phenomenon he didn't recognize until his 40s. His synesthetic perceptions extend beyond sounds to include visual associations with numbers and days of the week, offering a unique perspective on memory and cognition. This revelation sheds light on Rush's exceptional sensory experiences and adds depth to his portrayal of characters on screen.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </>
    )
}

    export default InfoAccordion;