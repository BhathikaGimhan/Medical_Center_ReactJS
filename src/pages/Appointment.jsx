import React from 'react'
import NullLogin from '../Tools/NullLogin';
import UserAppointment from './appointment/UserAppointment';

const Appointment = () => {
  const savedEmail = localStorage.getItem('role');
  console.log(savedEmail);
  return (
    <>
      {savedEmail ? (
        <UserAppointment />
      ) :(
        <NullLogin />
        )
      }
    </>
    
  )
}

export default Appointment