import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import UserCard from './user/UserCard';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  // const [showLogout, setShowLogout] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => {
    setShow(false);
    setShowSignUp(false);
  }

  const handleSignUp = () => {
    setShow(true);
    setShowSignUp(true);
  }
  const handleLogout = () => {
    setShow(true);
    setShowSignUp(false);
  }

  useEffect(() => {
    const savedEmail = localStorage.getItem('name');
    if (savedEmail) {
      setValue(savedEmail);
    }
  }, []);

  const savedEmail = localStorage.getItem('role');

  return (
    <Headroom>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              <Row>
                <Col><img src="./assets/logo.png" className='w-10 h-10' alt="" /></Col>
                <Col><div className="pt-1">Medical Center</div></Col>
              </Row>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact-us">Contact</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about-us">About</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/appointment">Appointment</Link></Nav.Link>
            </Nav>
            <Nav>
              {value ? (
                savedEmail ? (
                  <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                ) : (
                  <Nav.Link onClick={handleSignUp}>Register</Nav.Link>
                )
              ) : (
                <Nav.Link onClick={handleSignUp}>Log In</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {show && <Modal show={show} onHide={handleClose}><UserCard showSignUp={showSignUp} showLogout={showSignUp} handleClose={handleClose} /></Modal>}
      </Navbar>
    </Headroom>
  );
}

export default NavBar;
