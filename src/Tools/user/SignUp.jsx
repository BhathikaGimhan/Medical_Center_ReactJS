// import { Modal } from 'bootstrap'
import { Button, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

const SignUp = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    const savedEmail = localStorage.getItem('name');
    if (savedEmail) {
      setValue(savedEmail);
    }
  }, []);
  return (
    <div>
    {value ? 
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name <code>*</code></Form.Label>
        <Form.Control type="text" placeholder="Enter yor name" value={value} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select your positon <code>*</code></Form.Label>
        <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">Student</option>
        <option value="2">Lectur</option>
        <option value="3">Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Control type="hidden" name="myHiddenField" value="hiddenValue" />
      
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    :
    <h2>please signup</h2>
  }
    </div>
  )
}

export default SignUp