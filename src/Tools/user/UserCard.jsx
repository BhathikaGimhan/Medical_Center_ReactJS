import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container, Modal } from 'react-bootstrap';

const UserCard = ({ showSignUp, handleClose }) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Popup Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {showSignUp ? <SignUp /> : <SignIn />}
        </Container>
      </Modal.Body>
    </>
  );
};

export default UserCard;
