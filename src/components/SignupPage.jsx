import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px var(--accent-purple); }
  50% { box-shadow: 0 0 10px var(--accent-blue), 0 0 20px var(--accent-blue); }
  100% { box-shadow: 0 0 5px var(--accent-purple); }
`;

const SignupPageContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally centers content */
  justify-content: center; /* Vertically centers content */
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FormCard = styled.div`
  &.glass-card {
    width: 100%;
    max-width: 600px;
    padding: 50px;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center; /* Ensures inner elements are centered */
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-blue);
  }
`;

const PageTitle = styled.h2`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(144, 224, 239, 0.5);
`;

const StepForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
  width: 100%;
  animation: ${slideIn} 0.5s ease-in-out;
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
`;

const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  pointer-events: none;
  transition: all 0.3s ease;

  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: var(--accent-blue);
    background: var(--dark-black);
    padding: 0 5px;
  }
`;

const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  width: 100%;
`;

const StepIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "var(--accent-blue)" : "rgba(255, 255, 255, 0.3)"};
  transition: background 0.3s ease;
  box-shadow: ${(props) =>
    props.active ? "0 0 10px var(--accent-blue)" : "none"};
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
  margin-top: 25px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: var(--card-dark);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    appearance: none;
    position: relative;

    &:checked {
      background: var(--accent-blue);
      border-color: var(--accent-blue);
    }

    &:checked::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--dark-black);
      font-size: 16px;
    }
  }
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  opacity: 0.8;
  a {
    color: var(--accent-blue);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    aadhaar: "",
    pan: "",
    username: "",
    password: "",
    termsAccepted: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setError("");
    if (step === 1) {
      if (
        formData.name &&
        formData.dob &&
        formData.mobile &&
        formData.mobile.length === 10
      ) {
        setStep(2);
      } else {
        setError("Please fill in all details correctly.");
      }
    } else if (step === 2) {
      if (
        formData.aadhaar &&
        formData.aadhaar.length === 12 &&
        formData.pan &&
        formData.pan.length === 10
      ) {
        setStep(3);
      } else {
        setError("Please fill in all details correctly.");
      }
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setError("You must agree to the Terms and Conditions.");
      return;
    }
    if (formData.username && formData.password) {
      console.log("Final Signup Data:", formData);
      alert("Signup successful!");
      navigate("/dashboard");
    } else {
      setError("Please create a username and password.");
    }
  };

  return (
    <SignupPageContainer>
      <PageTitle>Create Your Cibilize Account</PageTitle>
      <FormCard className="glass-card">
        <StepIndicatorContainer>
          <StepIndicator active={step === 1} />
          <StepIndicator active={step === 2} />
          <StepIndicator active={step === 3} />
        </StepIndicatorContainer>

        {error && <p style={{ color: "var(--accent-pink)" }}>{error}</p>}

        {step === 1 && (
          <StepForm onSubmit={handleNextStep}>
            <h3>Step 1: Personal Details</h3>
            <InputGroup>
              <Input
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Label htmlFor="name">Full Name</Label>
            </InputGroup>
            <InputGroup>
              <Input
                type="date"
                name="dob"
                placeholder=" "
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <Label htmlFor="dob">Date of Birth</Label>
            </InputGroup>
            <InputGroup>
              <Input
                type="tel"
                name="mobile"
                placeholder=" "
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength="10"
              />
              <Label htmlFor="mobile">Mobile Number</Label>
            </InputGroup>
            <SubmitButton type="submit">Next</SubmitButton>
          </StepForm>
        )}

        {step === 2 && (
          <StepForm onSubmit={handleNextStep}>
            <h3>Step 2: KYC Information</h3>
            <InputGroup>
              <Input
                type="text"
                name="aadhaar"
                placeholder=" "
                value={formData.aadhaar}
                onChange={handleChange}
                required
                maxLength="12"
              />
              <Label htmlFor="aadhaar">Aadhaar Card Number</Label>
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                name="pan"
                placeholder=" "
                value={formData.pan}
                onChange={handleChange}
                required
                maxLength="10"
              />
              <Label htmlFor="pan">PAN Card Number</Label>
            </InputGroup>
            <SubmitButton type="submit">Next</SubmitButton>
          </StepForm>
        )}

        {step === 3 && (
          <StepForm onSubmit={handleFinalSubmit}>
            <h3>Step 3: Create Account</h3>
            <InputGroup>
              <Input
                type="text"
                name="username"
                placeholder=" "
                value={formData.username}
                onChange={handleChange}
                required
              />
              <Label htmlFor="username">Username</Label>
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Label htmlFor="password">Password</Label>
            </InputGroup>
            <CheckboxGroup>
              <Input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <CheckboxLabel>
                I agree to the <a href="#">Terms and Conditions</a>
              </CheckboxLabel>
            </CheckboxGroup>
            <SubmitButton type="submit">Sign Up</SubmitButton>
          </StepForm>
        )}
      </FormCard>
    </SignupPageContainer>
  );
};

export default SignupPage;
