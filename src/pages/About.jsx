import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap';
import {firestore} from '../firebase';
import {addDoc,collection} from '@firebase/firestore';

const About = () => {
  const msgref = useRef();
  const ageref = useRef();
  const ref = collection(firestore,'users');
  const hadelSave = (e) => {
    e.preventDefault();
    console.log(msgref.current.value);
    let data = {
      name:msgref.current.value,
      age:ageref.current.value
    }
    try{
      addDoc (ref,data);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <Form onSubmit={hadelSave}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={msgref}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Your Age</Form.Label>
        <Form.Control type="text" placeholder="age" ref={ageref} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default About