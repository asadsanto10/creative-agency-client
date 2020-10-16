import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
const ShowService = (props) => {
    const { serviceName, _id, image, description } = props.info;
    const animation = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -500 }, delay: 1000  });
    return (
        <Col md={4}>
            <animated.div style={animation}>
                <Link to={"/order/" + _id}>
                    <div className="single-service">
                    <img src={require(`../../../images/icons/${image}`)} alt="" />
                        <h3>{serviceName}</h3>
                        <p>{description}</p>
                    </div>
                </Link>
            </animated.div>
    </Col>
    );
};

export default ShowService;