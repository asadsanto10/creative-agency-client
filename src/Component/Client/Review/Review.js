import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from "lodash/fp";
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import { Col, Form, Row } from 'react-bootstrap';
const Review = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const { name, email, photo } = loggedinUser;
    const { register, handleSubmit, errors } = useForm();
    
    const validCheck = data => {
        const userinfo = { ...data, email, photo};
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userinfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    };
    return (
        <div className="container-fluid">
            <Row>
                <Col md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} className="bg-light pt-4" style={{ height: '100vh' }}>
                    <div className="header d-flex justify-content-between">
                        <h3>Review</h3>
                        <h3>{name && name}</h3>
                    </div>
                    <div className="reg pt-5 mt-3 w-25">
                        <Form onSubmit={handleSubmit(validCheck)}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Name" name="name" value={name} ref={register({
                                    required: true,
                                })} />
                                {_.get("name.type", errors) === "required" && (
                                    <p className="text-danger">Name field is required</p>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Company Name" name="company" ref={register({
                                    required: true,
                                })} />
                                {_.get("company.type", errors) === "required" && (
                                    <p className="text-danger">Company Name field is required</p>
                                )}
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" placeholder="Description" name="description" ref={register({
                                    required: true,
                                })} />
                                {_.get("description.type", errors) === "required" && (
                                    <p className="text-danger">Description field is required</p>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <input type="submit" className="btn custom-button w-25" value="Submit" />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Review;