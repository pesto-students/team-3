import React from "react";
import LabelWithIcon from "../../components/LabelWithIcon";
import { ButtonWithOutStyle } from "../../components/Button";
import FloatingLabel from "react-styled-floating-label";
import styled from "styled-components";
import BigText from "../../components/BigText";
const ButtonForSignIn = styled(ButtonWithOutStyle)`
  background-color: var(--clr-primary);
  padding: 0 24px;
  height: 34px;
  border-radius: 2px;
  font-weight: 400 !important;
`;
const BlueFloatingLabel = styled(FloatingLabel)``;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border: none;
  border-bottom: 0.5px solid;
  font-size: 1.25rem;
  padding-top: 0.25rem;
  margin-bottom: 1.25rem;
  width: 100%;
  :focus {
    border-color: var(--clr-primary);
    outline: none;
  }
`;

const Div = styled.div`
  margin-top: 0.8rem;
  .header {
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const Login = (props) => {
  return (
    <Div>
      <BigText className="header">Sign In</BigText>
      <form>
        <BlueFloatingLabel text="Email">
          <Input type="email" />
        </BlueFloatingLabel>
        <BlueFloatingLabel text="Password">
          <Input type="Password" />
        </BlueFloatingLabel>
        <ButtonForSignIn type="submit">
          <LabelWithIcon fontSize="1rem" color="white" label="Login" />
        </ButtonForSignIn>
      </form>
    </Div>
  );
};

export const Register = (props) => {
  return (
    <Div>
      <BigText className="header">Sign Up</BigText>
      <form>
        <BlueFloatingLabel text="User name">
          <Input type="text" />
        </BlueFloatingLabel>
        <BlueFloatingLabel text="Email">
          <Input type="email" />
        </BlueFloatingLabel>
        <BlueFloatingLabel text="Password">
          <Input type="Password" />
        </BlueFloatingLabel>
        <BlueFloatingLabel text="Confirm Password">
          <Input type="Password" />
        </BlueFloatingLabel>
        <ButtonForSignIn type="submit">
          <LabelWithIcon fontSize="1rem" color="white" label="Register" />
        </ButtonForSignIn>
      </form>
    </Div>
  );
};
