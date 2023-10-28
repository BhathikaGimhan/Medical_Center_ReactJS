import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import UserCard from './user/UserCard';

const NullLogin = () => {
    const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowSignUp(false);
  }
    const handleSignUp = () => {
    setShow(true);
    setShowSignUp(true);
  }
  return (
    <>
        <div className="null-body">
            <h5>Oops! It seems there's been a little detour...</h5>
            <h4>To unlock the full experience, please log in.</h4><br />
            <Button onClick={handleSignUp}>Click for Log In</Button>
            {show && <Modal show={show} onHide={handleClose}><UserCard showSignUp={showSignUp} handleClose={handleClose} /></Modal>}
        </div>

    </>
  )
}

export default NullLogin