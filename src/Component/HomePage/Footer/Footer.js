import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.scss'
const Footer = () => {
    return (
        <div id="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Let us handel your<br/>project, professionally</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus quam, suscipit vitae officia deserunt!</p>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Your email adress" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="text" placeholder="Your name / company name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control style={{height: '200px'}} as="textarea" placeholder="Your message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <p className="text-center">Copyright orange lab 2020</p>
            </Container>
        </div>
    );
};

export default Footer;