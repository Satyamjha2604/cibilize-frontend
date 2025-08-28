import React, { useState } from "react";
import styled from "styled-components";

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
  background: linear-gradient(45deg, #86a8e7, #5ffbf1);
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
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #5ffbf1;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
  background: transparent;

  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: #5ffbf1;
    background: #0d0d0d;
    padding: 0 5px;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #d16ba5, #5ffbf1);
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  color: white;
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

  const handleSubmit = (e) => {
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
