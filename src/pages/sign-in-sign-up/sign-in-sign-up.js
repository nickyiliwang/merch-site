import React from "react";
// component
import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/sign-up/Sign-up";
// styled-component
import styled from "styled-components";

const SignInAndSignupStyles = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const signInSignUp = () => (
  <SignInAndSignupStyles>
    <SignIn />
    <SignUp />
  </SignInAndSignupStyles>
);

export default signInSignUp;
