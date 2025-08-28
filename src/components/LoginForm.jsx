import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const glow = keyframes`
  0% { box-shadow: 0 0 5px var(--accent-purple); }
  50% { box-shadow: 0 0 10px var(--accent-blue), 0 0 20px var(--accent-blue); }
  100% { box-shadow: 0 0 5px var(--accent-purple); }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: var(--light-gray);
  font-size: 17px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: var(--accent-blue);
    animation: ${glow} 1.5s infinite ease-in-out;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  pointer-events: none;
  transition: all 0.3s ease;
  background: transparent;

  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: var(--accent-blue);
    background: var(--dark-black);
    padding: 0 5px;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LoginForm = ({ onSuccessAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    onSuccessAuth();
  };

  return (
    <FormWrapper>
      <FormTitle>Welcome Back!</FormTitle>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>Email</Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Label>Password</Label>
        </InputGroup>
        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;
