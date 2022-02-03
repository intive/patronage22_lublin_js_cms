import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import classes from "../Layout/AuthLayout/AuthLayout.module.css";
import useHttp from "../../hooks/use-http";
import { Formik, Form } from "formik";

interface MyFormValues {
  email: string;
  password: string;
}

const AuthForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, sendRequest: sendAuthRequest } = useHttp();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB89swc_F8hFkPq8xqnZVhKGmv0MrXMkP4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB89swc_F8hFkPq8xqnZVhKGmv0MrXMkP4";
    }

    sendAuthRequest({
      url: url,
      method: "POST",
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form onSubmit={submitHandler} className={classes.form}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            ref={emailInputRef}
            required
          />
          <FormHelperText>
            We'll never share your email with anyone else.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordInputRef}
            required
          />
        </FormControl>

        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthForm;
