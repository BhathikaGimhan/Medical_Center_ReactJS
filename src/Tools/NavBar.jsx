import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserCard from './user/UserCard';
import { Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowSignUp(false);
  }

  const handleSignIn = () => {
    setShow(true);
    setShowSignUp(false);
  }

  const handleSignUp = () => {
    setShow(true);
    setShowSignUp(true);
  }
  
  // const location = useLocation();
  // console.log(location);
  return (
    <>
    <Headroom>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><Row><Col><img src="./assets/logo.png" className='w-10 h-10' alt="" /></Col><Col> <div className="pt-1">Medical Center</div></Col></Row></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact-us">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about-us">About</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleSignIn}>Sign in</Nav.Link>
              <Nav.Link onClick={handleSignUp}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {show && <Modal show={show} onHide={handleClose}><UserCard showSignUp={showSignUp} handleClose={handleClose} /></Modal>}
      </Navbar>
    </Headroom>
      
    </>
  );
}

export default NavBar;
