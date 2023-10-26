// import { Modal } from 'bootstrap'
import { Button, Form } from 'react-bootstrap'
import React from 'react'

const SignUp = ({ handleShowSignUp }) => {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name <code>*</code></Form.Label>
        <Form.Control type="text" placeholder="Enter yor name" />
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
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SignUp