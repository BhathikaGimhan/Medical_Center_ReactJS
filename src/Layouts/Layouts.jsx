import React from 'react'
import './Layouts.css';
import NavBar from '../Tools/NavBar';
import Status from '../Tools/Status';
import { Outlet } from 'react-router-dom';


const Layouts = () => {
  return (
    <>
      <NavBar /> 
      <Status status={1} /> 
      <Outlet />
    </>
  )
}

export default Layouts