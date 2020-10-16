import React from 'react';
import { Button, Col } from 'react-bootstrap';

const ShowServiceList = (props) => {
    const { service, projectDescription, imageName, status } = props.listInfo;
    return (
        <Col md={3}>
            <div className="single-serviceList">
                <img className="w-25" src={require(`../../../images/icons/${imageName}`)} alt="" />
                {status == 0 && <Button className="btn btn-danger float-right">Pending</Button>}
                {status == 1 && <Button className="btn btn-info float-right">Ongoing</Button>}
                {status == 2 && <Button className="btn btn-sucess float-right">Done</Button>}
                <h3 className="pt-3">{service}</h3>
                <p>{projectDescription}</p>
            </div>
        </Col>
    );
};

export default ShowServiceList;