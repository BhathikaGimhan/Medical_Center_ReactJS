import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container, Modal } from 'react-bootstrap';

const UserCard = ({ showSignUp, handleClose }) => {
  console.log(handleClose);
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          {showSignUp ? "Sign In" : "Confirm Log Out"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {showSignUp ? <SignIn /> : <SignUp />}
        </Container>
      </Modal.Body>
    </>
  );
};

export default UserCard;