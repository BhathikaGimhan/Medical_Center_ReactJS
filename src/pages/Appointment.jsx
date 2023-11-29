import React from 'react'
import NullLogin from '../Tools/NullLogin';
// import UserAppointment from './appointment/UserAppointment';
// import UserViewAppointment from './appointment/UserViewAppointment';
import AdminViewAppintment from './appointment/AdminViewAppintment';

const Appointment = () => {
  const savedEmail = localStorage.getItem('role');
  console.log(savedEmail);
  return (
    <>
      {savedEmail ? (
        <AdminViewAppintment />
      ) :(
        <NullLogin />
        )
      }
    </>
    
  )
}

export default Appointment