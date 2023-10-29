import React, { useRef } from 'react'
import { Button, Container,} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {auth, provider, firestore} from '../../firebase'
import {addDoc,collection, getDocs, query, where} from '@firebase/firestore';

const UserAppointment = () => {
  const msgref = useRef();
  const optionRef = useRef();
  const emailRef = useRef();
  const ref = collection(firestore,'appointments');
  const hadelSave = (e) => {
    e.preventDefault();
    let data = {
      email:emailRef.current.value,
      name:msgref.current.value,
      role:optionRef.current.value
      
    }
    try{
      addDoc (ref,data);
      localStorage.setItem('role', optionRef.current.value);
      msgref.current.value = '';
      optionRef.current.value = '';
      emailRef.current.value = '';
      setTimeout(() => {
        window.location.reload();
    }, 3000);
      
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
    <Container>
      <Form onSubmit={hadelSave}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" disabled={true} value={localStorage.getItem('email')} ref={emailRef} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" disabled={true} value={localStorage.getItem('name')} ref={msgref} />
            </Form.Group>
          </Col>
          <Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  </div>
  )
}

export default UserAppointment