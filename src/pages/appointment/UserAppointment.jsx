import React, { useRef } from 'react';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { firestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore';

const UserAppointment = () => {
  const msgref = useRef();
  const optionRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ageRef = useRef();
  const facultyRef = useRef();
  const batchRef = useRef();
  const workingRef = useRef();
  const workingRoleDateRef = useRef();
  const workingRoleTimeRef = useRef();
  const noteRef = useRef();

  const ref = collection(firestore, 'appointments');

  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      email: emailRef.current?.value || '',
      name: msgref.current?.value || '',
      role: localStorage.getItem('role'),
      phone: phoneRef.current?.value || '',
      age: ageRef.current?.value || '',
      faculty: facultyRef.current?.value || '',
      batch: batchRef.current?.value || '',
      workingRef: workingRef.current?.value || '',
      workingRoleDate: workingRoleDateRef.current?.value || '',
      workingRoleTime: workingRoleTimeRef.current?.value || '',
      note: noteRef.current?.value || '',
    };

    try {
      await addDoc(ref, data);
      localStorage.setItem('role', optionRef.current.value);
      msgref.current.value = '';
      optionRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
      ageRef.current.value = '';
      facultyRef.current.value = '';
      batchRef.current.value = '';
      workingRoleDateRef.current.value = '';
      workingRoleTimeRef.current.value = '';
      noteRef.current.value = '';
      workingRef.current.value = '';

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSave}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  disabled={true}
                  value={localStorage.getItem('email') || ''} // Added default value
                  ref={emailRef}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  disabled={true}
                  value={localStorage.getItem('name') || ''} // Added default value
                  ref={msgref}
                />
              </Form.Group>
            </Col>
          </Row>
          {localStorage.getItem('role') === '1' ? (
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" ref={phoneRef} />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Your Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter your age" ref={ageRef} />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicFaculty">
                  <Form.Label>Your Faculty</Form.Label>
                  <Form.Control type="text" placeholder="Enter faculty" ref={facultyRef} />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicBatch">
                  <Form.Label>Your Batch</Form.Label>
                  <Form.Control type="text" placeholder="Enter batch" ref={batchRef} />
                </Form.Group>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" ref={phoneRef} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Your Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter your age" ref={ageRef} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formBasicRole">
                  <Form.Label>Your Working Role</Form.Label>
                  <Form.Control type="text" placeholder="Enter working role" ref={workingRef} />
                </Form.Group>
              </Col>
            </Row>
          )}
          <Row>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Your Working Role (Date)</Form.Label>
                <Form.Control type="date" ref={workingRoleDateRef} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Your Working Role (Time)</Form.Label>
                <Form.Control type="time" ref={workingRoleTimeRef} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Your Note</Form.Label>
                <Form.Control as="textarea" placeholder="Enter working role" ref={noteRef} />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserAppointment;
