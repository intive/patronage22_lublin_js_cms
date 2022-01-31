//import { Form } from "react-bootstrap";
import axios from "axios";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react'


import React, { useRef, useState, useContext } from 'react'
import classes from '../Layout/AuthLayout/AuthLayout.module.css'
import AuthContext from '../../store/auth-context'
import { useHistory } from "react-router-dom"


const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;


    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB89swc_F8hFkPq8xqnZVhKGmv0MrXMkP4';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB89swc_F8hFkPq8xqnZVhKGmv0MrXMkP4';
    }
    
    axios(url, {
      method: 'POST',
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status === 200) {
        console.log(response.data)
        authCtx.login(response.data.idToken);
        history.replace('/dashboard');
      }
      else {
        throw new Error("Authenfication Fail!");
      }
      
    })
    .catch(error => {
      console.log(error)
      alert(error.response.data.error.message)
      setIsLoading(false)
    })
  }
   


  return (
    
<form onSubmit={submitHandler} className={classes.form}>
<h1>{isLogin ? 'Login' : 'Sign Up'}</h1> 
  <FormControl>
    <FormLabel htmlFor='email'>Email address</FormLabel>
    <Input id='email' type="email" placeholder="Enter email" ref={emailInputRef}/>
    <FormHelperText>
      We'll never share your email with anyone else.
    </FormHelperText>
  </FormControl>

  <FormControl>
    <FormLabel htmlFor='password'>Password</FormLabel>
    <Input id='password' type="password" placeholder="Password" ref={passwordInputRef}/>
  </FormControl>
  
  <div className={classes.actions}>
    {!isLoading && (
      <button>{isLogin ? 'Login' : 'Create Account'}</button>
    )}
    {isLoading && <p>Sending request...</p>}
      <button
        type='button'
        className={classes.toggle}
        onClick={switchAuthModeHandler}
      >
      {isLogin ? 'Create new account' : 'Login with existing account'}
      </button>
  </div>
</form>

    )
}


export default AuthForm;

//'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQ0HBjZ1TpByvZIYEP5hkBG9FtSWgxW0k'