import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './AdminAddService.scss';
import _ from "lodash/fp";
import { useForm } from 'react-hook-form';
const AdminAddService = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    
    const validCheck = data => {

        const serviceAdd = { ...data };
        fetch('http://localhost:5000/adminAddService', {
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
                                <Form.Label>Service Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" name="name" ref={register({
                                    required: true,
                                })} />
                                {_.get("name.type", errors) === "required" && (
                                    <p className="text-danger">Title field is required</p>
                                )}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter Description" name="Description" ref={register({
                                    required: true,
                                })} />
                                {_.get("Description.type", errors) === "required" && (
                                    <p className="text-danger">Descriptionfield is required</p>
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

export default AdminAddService;