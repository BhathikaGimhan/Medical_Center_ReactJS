import React, {useRef, useEffect, useState } from 'react'
import {auth, provider, firestore} from '../../firebase'
import { signInWithPopup } from '@firebase/auth'
import { Button, Form } from 'react-bootstrap';
import {addDoc,collection} from '@firebase/firestore';


const SignIn = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setDisplayName(data.user.displayName)
      localStorage.setItem('name', data.user.displayName)
      setEmail(data.user.email)
      localStorage.setItem('email', data.user.email)
      window.location.reload();
    })
    
  }
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }

    const savedName = localStorage.getItem('name');
    if (savedName) {
      setDisplayName(savedName);
    }
  }, []);


  // const [showForm, setShowForm] = useState(true);
  const msgref = useRef();
  const optionRef = useRef();
  const emailRef = useRef();
  const ref = collection(firestore,'users');
  const hadelSave = (e) => {
    e.preventDefault();
    console.log(msgref.current.value);
    let data = {
      email:emailRef.current.value,
      name:msgref.current.value,
      role:optionRef.current.value
    }
    try{
      addDoc (ref,data);
      msgref.current.value = '';
      optionRef.current.value = '';
      emailRef.current.value = '';
      setShowForm(false);
      setTimeout(() => {
        window.location.reload();
    }, 3000);
      
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <>
    {email ? (
      showForm ?(<Form onSubmit={hadelSave} className={`fade-in-out ${showForm ? '' : 'hide'}`}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" disabled={true} ref={emailRef} value={email}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" disabled={true} ref={msgref} value={displayName}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your positon <code>*</code></Form.Label>
          <Form.Select aria-label="Default select example" ref={optionRef}>
          <option>Open this select menu</option>
          <option value="1">Student</option>
          <option value="2">Lectur</option>
          <option value="3">Other</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> ): 
      <>
      <br />
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
        <br />
        </>
      ) : (
      <div>
        <h5>Login with email and register this account:</h5><br />
        <button type="button" onClick={handleClick} class="login-with-google-btn w-full" >
          Sign in with Google
        </button><br /><br />
      </div>
      )
    }
    </>

  )
}

export default SignIn