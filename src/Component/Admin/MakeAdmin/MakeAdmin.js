import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './MakeAdmin.scss';
import _ from "lodash/fp";
import { useForm } from 'react-hook-form';
const MakeAdmin = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const validCheck = data => {

        const serviceAdd = { ...data };
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(serviceAdd)
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
                        <h3>Add Service</h3>
                        <h3>{loggedinUser.name && loggedinUser.name}</h3>
                    </div>
                    <div className="addservice pt-5 w-50">
                        <Form onSubmit={handleSubmit(validCheck)}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="john@gmail.com" name="email" ref={register({
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })} />
                                {_.get("email.type", errors) === "required" && (
                                    <p className="text-danger">Email field is required</p>
                                )}
                                {_.get("email.type", errors) === "pattern" && (
                                    <p className="text-danger">Please write a valid email</p>
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

export default MakeAdmin;