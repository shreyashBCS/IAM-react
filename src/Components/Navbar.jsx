import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/IAM.png'; // Adjust the path to your logo image

const NavigationBar = () => {
    return (
        <Navbar bg="warning" expand="lg" className="py-3 fixed-top">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    alt="InnovationAdvertiseLogo"
                    width="150" // Adjust width as needed
                    height="auto"
                    style={{ marginLeft: "9px" }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/about" className="text-dark">About</Nav.Link>
                    <Nav.Link href="/clients" className="text-dark">Clients</Nav.Link>
                    <Nav.Link href="/services" className="text-dark">Services</Nav.Link>
                    <Nav.Link style={{ marginRight: "2px" }} href="/contact" className="text-dark">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;