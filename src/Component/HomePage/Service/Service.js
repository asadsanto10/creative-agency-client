import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShowService from './ShowService';
import './Service.scss';
const Service = () => {
    const [serviceInfo, setServiceInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(response => response.json())
            .then(data => setServiceInfo(data))
    }, []);
    return (
        <section id="service">
            <Container>
                <h2 className="title">Provide awesome <span>services</span></h2>
                <Row>
                    {
                        serviceInfo.map(data => <ShowService info={data} key={data._id}></ShowService>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;