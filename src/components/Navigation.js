import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <>
            <div>HELLO WORD</div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/features" className="nav-link" >Features</NavLink>
                        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
