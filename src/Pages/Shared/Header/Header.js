import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../../../logo.png';

const Header = () => {
    const homeMenu = true;
    const servicesMenu = true;
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="logo" className="w-25" /> Gym Trainer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home" style={({ isActive }) => { return { backgroundColor: isActive ? '#ff3333' : '' }; }}>Home</Nav.Link>

                        <Nav.Link as={NavLink} to="/blogs" style={({ isActive }) => { return { backgroundColor: isActive ? '#ff3333' : '' }; }}>Blogs</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" style={({ isActive }) => { return { backgroundColor: isActive ? '#ff3333' : '' }; }}>About</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/checkout" style={({ isActive }) => { return { backgroundColor: isActive ? '#ff3333' : '' }; }}>Checkout</Nav.Link>
                        <Nav.Link as={NavLink} to="/register" style={({ isActive }) => { return { backgroundColor: isActive ? '#ff3333' : '' }; }}>Register</Nav.Link>
                        <Nav.Link as={NavLink} to="/login" style={({ isActive }) => { return { backgroundColor: isActive ? '#ff3333' : '' }; }}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;