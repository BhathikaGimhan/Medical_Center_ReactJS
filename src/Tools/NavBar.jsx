import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Row, Col, Modal, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import UserCard from './user/UserCard';
import {firestore} from '../firebase'
import {collection, getDocs, query, where} from '@firebase/firestore';

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

  const fetchData = async () => {
    const querySnapshot = await getDocs(query(collection(firestore, 'users'), where('email', '==', localStorage.getItem('email'))));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    if(data[0] && data[0].role !== null){
      // console.log('update',data[0].userRole);
      localStorage.setItem('role', data[0].role);
      localStorage.setItem('userRole', data[0].userRole);
    }else{
      console.log(localStorage.getItem('role'))
    }
  };
  // console.log("hi",localStorage.getItem('role'));
  const savedRole = localStorage.getItem('userRole');
  // console.log(savedRole);


  fetchData();

  return (
    <Headroom>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              <Row>
                <Col><img src="./assets/logo.png" className='w-10 h-10' alt="" /></Col>
                <Col><div className="pt-1">TrincCare</div></Col>
              </Row>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact-us">Contact</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about-us">About</Link></Nav.Link>
              {/* <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }}></Link></Nav.Link> */}
              <NavDropdown title="Appointment" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/appointment">Add Appointment</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/appointment-view">View History</NavDropdown.Item>
                {savedRole==='admin' && (<><NavDropdown.Divider /><NavDropdown.Item  as={Link} to="/admin-appointment-view">View All</NavDropdown.Item></>)}
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
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
