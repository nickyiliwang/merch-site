import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/FirebaseUtils";
import "./Sign-in.scss";

const Signin = () => {
  const [emailPassWord, setEmailPassWord] = useState({
    email: "",
    password: ""
  });

  const { email, password } = emailPassWord;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmailPassWord({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = e => {
    const { value, name } = e.target;
    setEmailPassWord({ ...emailPassWord, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleOnChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleOnChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
