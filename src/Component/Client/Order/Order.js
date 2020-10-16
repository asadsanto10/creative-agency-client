import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import './Order.scss'
import _ from "lodash/fp";
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
const Order = () => {
    const { id } = useParams();
    
    const [mathcData, setMathcData] = useState([]);
    useEffect(() => {
        if(id){
            fetch('http://localhost:5000/service')
            .then(response => response.json())
            .then(data => {
                const singleData = data.map(singleData => singleData);
                const matchInfo = singleData.find(info => info._id === id);
                setMathcData(matchInfo);
            })
        }
    }, [])
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const { name, email } = loggedinUser;
    const { register, handleSubmit, errors } = useForm();
    const [file, setFile] = useState(null);

    const handelFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    
    const validCheck = data => {
        const imageName = mathcData.image;
        const userinfo = {...data, imageName };
        fetch('http://localhost:5000/addOrders', {
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
                <Col md={9} className="bg-light pt-4" style={{height: '100vh'}}>
                    <div className="header d-flex justify-content-between">
                    <h3>Order</h3>
                        <h3>{loggedinUser.name && loggedinUser.name}</h3>
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
                                <Form.Control type="email" placeholder="Email" value={email} name="email" ref={register({
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
                                <Form.Control type="text" placeholder="Service type" name="service" value={mathcData.serviceName ? mathcData.serviceName : ''} ref={register({
                                    required: true,
                                })} />
                                {_.get("service.type", errors) === "required" && (
                                    <p className="text-danger">Service type field is required</p>
                                )}
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" placeholder="Project Details" name="projectDescription" ref={register({
                                    required: false,
                                })} />
                                {_.get("description.type", errors) === "required" && (
                                    <p className="text-danger">Project Details field is required</p>
                                )}
                            </Form.Group>

                            <Form.Group className="d-flex">
                                <Form.Control type="text" placeholder="price" name="Price" ref={register({
                                    required: true,
                                })} />
                                {_.get("Price.type", errors) === "required" && (
                                    <p className="text-danger">Price field is required</p>
                                )}
                                {/* <Form>
                                    <Form.File onChange={handelFileChange} name="file" ref={register({
                                        required: false,
                                    })}
                                        id="custom-file"
                                        label="Upload Project File"
                                        custom
                                    />
                                    {_.get("file.type", errors)}
                                </Form> */}
                            </Form.Group>
                            <Form.Control type="hidden" name="status" value="0" ref={register({
                                required: false,
                            })} />
                            <Form.Group>
                                <input type="submit" className="btn custom-button w-25" value="Send" />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Order;