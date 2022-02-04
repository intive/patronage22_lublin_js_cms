import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import React, { useRef } from "react";
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

  const { isLoading, error, loginUserRequest: sendAuthRequest } = useHttp();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    sendAuthRequest(enteredEmail, enteredPassword);
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
        <h1>Login</h1>
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
          {!isLoading && <button>Login</button>}
          {isLoading && <p>Sending request...</p>}
          {error && <p className={classes.error}>{error}</p>}
        </div>
      </Form>
    </Formik>
  );
};

export default AuthForm;
