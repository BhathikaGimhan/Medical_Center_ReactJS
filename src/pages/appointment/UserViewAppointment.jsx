import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import {auth, provider, firestore} from '../../firebase'
import {addDoc,collection, getDocs, query, where} from '@firebase/firestore';

const UserViewAppointment = () => {
  const msgref = useRef();
  const optionRef = useRef();
  const emailRef = useRef();
  const ref = collection(firestore,'users');
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
      <Form onSubmit={hadelSave}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" disabled={true} ref={emailRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" disabled={true} ref={msgref}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your positon <code>*</code></Form.Label>
          <Form.Select aria-label="Default select example" ref={optionRef}>
          <option>Open this select menu</option>
          <option value="1">Student</option>
          <option value="2">Lectur</option>
          <option value="3">Other</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UserViewAppointment