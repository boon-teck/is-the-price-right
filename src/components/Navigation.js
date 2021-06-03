import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import brand from '../images/logo.png'

function Navigation(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={brand}/></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link" >About</NavLink>
                        <NavLink to="/comparison" className="nav-link" >Comparison</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;

