import React, { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const Notification = ({msg}) => {
    const [position, setPosition] = useState('bottom-end');
  return (
    <div>
        <ToastContainer
          className="p-10 mb-10"
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Notification</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
          </Toast>
        </ToastContainer>
    </div>
  )
}

export default Notification