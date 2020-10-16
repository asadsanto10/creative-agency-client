import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './AdminServiceList.scss'
import AdminShowServiceList from './AdminShowServiceList';
const AdminServiceList = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/showAdminService')
            .then(response => response.json())
            .then(data => setServiceList(data))
    }, []);
    const handelChnage = (data) => {
        const id = data.id;
        const value = data.value;
        fetch('http://localhost:5000/statusUpdate/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({value}) 
        })
        .then(response => response.json())
        .then(data => {
            
        });
    }
    
    return (
        <div className="container-fluid">
            <Row>
                <Col md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} className="bg-light pt-4" style={{ height: '100vh' }}>
                    <div className="header d-flex justify-content-between">
                        <h3>Service list</h3>
                        <h3>{loggedinUser.name && loggedinUser.name}</h3>
                    </div>
                    <div className="table pt-5">
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Projec Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    serviceList.map(service => <AdminShowServiceList chnageClik={handelChnage} list={service} key={service._id}></AdminShowServiceList>) 
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>    
            </Row>  
        </div>
    );
};

export default AdminServiceList;