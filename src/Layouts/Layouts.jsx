import React from 'react'
import './Layouts.css';
import NavBar from '../Tools/NavBar';
import Home from '../pages/Home';
import Status from '../Tools/Status';


const Layouts = () => {
  return (
    <>
      <NavBar />
      <Status status={0} />
      <Home />
    </>
  )
}

export default Layouts