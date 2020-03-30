import React, { useState } from "react";
import "./sign-up.scss";
import { SignupStyles } from "./SignupStyles";

// components
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
// firebase
import { auth, createUserProfileDocument } from "../../firebase/FirebaseUtils";

const Signup = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = signupCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("passwords don't match");
      return;
    }

    try {
      // this destructuring get the user from our Promise object
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
    <SignupStyles>
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
    </SignupStyles>
  );
};

export default Signup;
