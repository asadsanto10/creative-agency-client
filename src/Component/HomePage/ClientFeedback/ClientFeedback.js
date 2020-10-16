import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import './ClientFeedback.scss';
import ShowClientFeedback from './ShowClientFeedback';
const ClientFeedback = () => {
    const [clientFeedback, setclientFeedback] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviewList')
            .then(response => response.json())
            .then(data => setclientFeedback(data))
    }, []);
    return (
        <section id="client-feedback">
            <Container>
                <h2 className="title">Client <span>feedback</span></h2>
                <Row>
                    {
                        clientFeedback.map(data => <ShowClientFeedback clientFeedback={data} key={data._id}></ShowClientFeedback>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default ClientFeedback;