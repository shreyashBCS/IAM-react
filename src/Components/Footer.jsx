import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-warning text-white text-center py-4">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; 2024 Innovative Advertising and Marketing. All rights reserved.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Social Media Icons */}
                        <a href="#" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="fa-lg" />
                        </a>
                        <a href="#" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="fa-lg" />
                        </a>
                        <a href="#" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="fa-lg" />
                        </a>
                        <a href="#" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="fa-lg" />
                        </a>
                        <a href="#" className="text-white" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="fa-lg" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;