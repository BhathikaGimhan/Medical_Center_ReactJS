import React, { useEffect, useState } from 'react'
import {auth, provider} from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { Button } from 'react-bootstrap';

const SignIn = () => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
    })
  }
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setValue(savedEmail);
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
    {value ? <Button onClick={handleLogout}>Log Out the {value}</Button> : 
      <button type="button" onClick={handleClick} class="login-with-google-btn w-full" >
        Sign in with Google
      </button>
    }
    </>

  )
}

export default SignIn