import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './ServiceList.scss';
import ShowServiceList from './ShowServiceList';
const ServiceList = () => {
   
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceList?email=' + loggedinUser.email)
            .then(response => response.json())
            .then(data => setServiceList(data))
    }, []);
    return (
        <div className="container-fluid">
            <Row>
                <Col md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} className="bg-light pt-4 mt-4" style={{ height: '100vh' }}>
                    <div className="header d-flex justify-content-between">
                        <h3>Service List</h3>
                        <h3>{loggedinUser.name && loggedinUser.name}</h3>
                    </div>
                    <div className="service-list">
                        <Row>
                            {
                                serviceList.map(list => <ShowServiceList key={list._id} listInfo={list}></ShowServiceList>)
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>   
    );
};

export default ServiceList;