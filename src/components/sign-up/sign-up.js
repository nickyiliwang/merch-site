import React, { useState, useEffect } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/FirebaseUtils";

import "./sign-up.scss";

const Signup = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    // console.log(signupCredentials);
  }, [signupCredentials]);

  const { displayName, email, password, confirmPassword } = signupCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // pass the user in and create it with the display name destructured like {displayName: displayName}, so we can use it in a spread
      await createUserProfileDocument(user, { displayName });

      setSignupCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setSignupCredentials({ ...signupCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
        ></FormInput>
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
