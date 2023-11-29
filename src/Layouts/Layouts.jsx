import React from 'react'
import './Layouts.css';
import NavBar from '../Tools/NavBar';
import Status from '../Tools/Status';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Layouts = () => {
  return (
    <>
      <NavBar /> 
      <Status status={2} /> 
      {/* <Container> */}
        <Outlet />
      {/* </Container> */}
    </>
  )
}

export default Layouts