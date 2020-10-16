import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png'
import './Header.scss'
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="main_navbar">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/" className="nav-link">Our Protfolio</Link>
                        <Link to="/" className="nav-link">Our Team</Link>
                        <Link to="/" className="nav-link">Contact Us</Link>
                        <Link to={sessionStorage.getItem('token') ? '/order' : '/login'} className="nav-link">Login</Link>
                        <Link to="/adminServiceList" className="nav-link">Admin</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;