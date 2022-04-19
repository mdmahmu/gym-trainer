import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../logo.png';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home" style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/blogs" style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }}>Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }}>About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/checkout" style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }}>Checkout</Nav.Link>

                            {
                                user ? <Nav.Link to='/' as={NavLink} style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }} onClick={() => signOut(auth)}>Log out</Nav.Link> :
                                    <>
                                        <Nav.Link as={NavLink} to="/register" style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }}>Register</Nav.Link>
                                        <Nav.Link as={NavLink} to="/login" style={({ isActive }) => { return { borderBottom: isActive ? '3px solid #dc3545' : '' }; }} onClick={() => signOut(auth)}>Login</Nav.Link>

                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;