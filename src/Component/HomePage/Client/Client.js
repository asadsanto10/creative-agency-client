import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Client.scss'
import Slack from '../../../images/logos/slack.png';
import Goole from '../../../images/logos/google.png';
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';
const Client = () => {
    return (
        <section id="client">
            <Container>
                <Row className="align-items-center">
                    <Col md={2} className="offset-md-1">
                        <div className="single-logo">
                            <img src={Slack} alt=""/>
                        </div>
                    </Col>
                    <Col md={2}>
                       <div className="single-logo">
                        <img src={Goole} alt="" />
                    </div>
                    </Col>
                    <Col md={2}>
                        <div className="single-logo">
                        <img src={Uber} alt="" />
                    </div>
                    </Col>
                    <Col md={2}>
                        <div className="single-logo">
                        <img src={Netflix} alt="" />
                    </div>
                    </Col>
                    <Col md={2}>
                        <div className="single-logo">
                        <img src={Airbnb} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Client;