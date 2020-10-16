import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.scss'
import bgFrame from '../../../images/logos/Frame.png';
import Client from '../Client/Client';
import Work from '../Work/Work';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <div id="home">
                <Container>
                    <Header></Header>
                    <Row className="pt-5">
                        <Col md={6}>
                            <div className="home-showcase">
                                <h1>Lets's grow your <br/>brand to the <br/>next level</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem ex omnis facere sit. Beatae aut nulla asperiores enim illo accusamus placeat eius assumenda nostrum.</p>
                                <Button className="btn">Hire us</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={bgFrame} className="img-fluid" alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Client></Client>
            <Service></Service>
            <Work></Work>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </>
    );
};

export default Home;