import React from 'react'
import NullLogin from '../Tools/NullLogin';
import UserAppointment from './appointment/UserAppointment';
import UserViewAppointment from './appointment/UserViewAppointment';

const Appointment = () => {
  const savedEmail = localStorage.getItem('role');
  console.log(savedEmail);
  return (
    <>
      {savedEmail ? (
        <UserViewAppointment />
      ) :(
        <NullLogin />
        )
      }
    </>
    
  )
}

export default Appointment