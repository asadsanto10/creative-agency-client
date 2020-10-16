import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
const Sidebar = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [isadmin, setisadmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin?email=' + loggedinUser.email)
        .then(response => response.json())
        .then(data => setisadmin(data));
    },[loggedinUser.email])
    return (
        <section id="sidebar">
            <div className="container-fluid">
                <div className="sidebar-menu">
                    <div className="sidelogo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="menu">
                    {   
                            isadmin ?
                        <>
                            
                            <Link to="/adminServiceList">
                                <FontAwesomeIcon icon={faList} /> Service list
                            </Link>
                            <Link to="/adminaAddService">
                                <FontAwesomeIcon icon={faPlus} /> Add service
                            </Link>
                                    <Link to="/makeAdmin">
                                <FontAwesomeIcon icon={faUser} /> Make admin
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/order">
                                <FontAwesomeIcon icon={faShoppingCart} /> Order
                            </Link>
                                <Link to="/serviceList">
                                    <FontAwesomeIcon icon={faList} /> Service list
                            </Link>
                                <Link to="/review">
                                    <FontAwesomeIcon icon={faCommentAlt} /> Review
                            </Link>
                        </>
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;