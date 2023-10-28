import { Button, Modal } from 'react-bootstrap';

const SignUp = ({handleClose}) => {

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
        <Modal.Body>
          Are you sure you want to log out your account?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={Logout}>
            Yes
          </Button>
        </Modal.Footer>
    </div>
  )
}

export default SignUp;
