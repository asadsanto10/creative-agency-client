import React from 'react';
import { Col } from 'react-bootstrap';

const ShowClientFeedback = (props) => {
    const { name, company, description, photo } = props.clientFeedback;
    return (
        <Col md={4}>
            <div className="single-feedback">
                <div className="title d-flex align-items-center">
                    <img className="w-25" src={photo} alt="" />
                    <div className="text-left">
                        <h3>{name}</h3>
                        <h5>{company}</h5>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default ShowClientFeedback;