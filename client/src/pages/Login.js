import React from "react";
import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <Logo>hiNote</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}
// const Wrapper = styled.header`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   padding: 8px;
  
// `;
const Logo = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
//   color: #30C3B3;
  color: #363636;
  margin: 8px 0 40px;
  
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
color: #363636;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;


export default Login;