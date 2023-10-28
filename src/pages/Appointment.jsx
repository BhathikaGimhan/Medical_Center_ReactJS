import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore';
import { firestore } from '../firebase';
import NullLogin from '../Tools/NullLogin';

const Appointment = () => {
  const savedEmail = localStorage.getItem('role');
  return (
    <>
      {savedEmail ? <div>Appointment</div> :<NullLogin />}
    </>
    
  )
}

export default Appointment