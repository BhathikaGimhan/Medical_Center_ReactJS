import React, { useRef, useState } from 'react';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { firestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore';
import Notification from '../../Tools/Notification';

const UserAppointment = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [Mssage, setMssage] = useState('');
  const msgref = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ageRef = useRef();
  const facultyRef = useRef();
  const batchRef = useRef();
  const workingRef = useRef();
  const workingRoleDateRef = useRef();
  const workingRoleTimeRef = useRef();
  const noteRef = useRef();
  const userRole = useRef();
  const formRef = useRef();

  const ref = collection(firestore, 'appointments');

  const handleSave = async (e) => {
    e.preventDefault();
    let AppointmentData = {
      email: emailRef.current?.value || '',
      name: msgref.current?.value || '',
      role: userRole.current?.value || '',
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
      await addDoc(ref, AppointmentData);
      formRef.current.reset();
      setMssage("Your Appointment has been recoded");
      setShowNotification(true);
    } catch (err) {
      setShowNotification(true);
      setMssage(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <Form ref={formRef} onSubmit={handleSave} className='border p-10 rounded-md shadow-lg relative lg:top-20 max-lg:top-10 shadow-black'>
        <Form.Control type="text" style={{ display:'none' }} placeholder="Enter email" value={localStorage.getItem('role')} ref={userRole} />
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
                  <Form.Label>Index Number</Form.Label>
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
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="Enter working role" ref={workingRef} />
                </Form.Group>
              </Col>
            </Row>
          )}
          <Row>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Appointment date</Form.Label>
                <Form.Control type="date" ref={workingRoleDateRef} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Appointment time</Form.Label>
                <Form.Control type="time" ref={workingRoleTimeRef} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter working role" ref={noteRef} />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      {showNotification && (<Notification msg={Mssage} />)}
    </div>
  );
};

export default UserAppointment;
