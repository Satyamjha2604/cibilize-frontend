import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulsate = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(157, 78, 221, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(157, 78, 221, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(157, 78, 221, 0); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px var(--accent-purple); }
  50% { box-shadow: 0 0 10px var(--accent-blue), 0 0 20px var(--accent-blue); }
  100% { box-shadow: 0 0 5px var(--accent-purple); }
`;

const EmergencyContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    max-width: 550px;
    padding: 50px;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-blue);
  }
`;

const FormTitle = styled.h2`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

const Select = styled.select`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: var(--light-gray);
  font-size: 17px;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='var(--light-gray)' width='24px' height='24px'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px top 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 8px var(--accent-blue);
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
  ${Input}:not(:placeholder-shown) + &,
  ${Select}:focus + &,
  ${Select}:not([value=""]) + & {
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
  animation: ${pulsate} 2s infinite;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
  color: var(--light-gray);

  h3 {
    font-size: 28px;
    margin: 0;
    background: linear-gradient(
      45deg,
      var(--accent-purple),
      var(--accent-blue)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    margin: 0;
    font-size: 16px;
    opacity: 0.8;
  }
`;

const StatusMessage = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: var(--accent-blue);
`;

const Emergency = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    reason: "card_theft",
    otherReason: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && formData.name && formData.number) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2 && formData.reason) {
      setSubmissionStatus("submitting");
      setTimeout(() => {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          number: "",
          reason: "card_theft",
          otherReason: "",
        });
        setTimeout(() => {
          setSubmissionStatus("idle");
          setStep(1);
        }, 3000);
      }, 2000);
    }
  };

  return (
    <EmergencyContainer>
      <FormTitle>Emergency Support</FormTitle>
      <FormCard className="glass-card">
        {submissionStatus === "idle" && (
          <>
            <StepIndicatorContainer>
              <StepIndicator active={step === 1} />
              <StepIndicator active={step === 2} />
            </StepIndicatorContainer>
            {step === 1 && (
              <StepForm onSubmit={handleNextStep}>
                <h3>Step 1: Contact Information</h3>
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
                    type="tel"
                    name="number"
                    placeholder=" "
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  <Label htmlFor="number">Contact Number</Label>
                </InputGroup>
                <SubmitButton type="submit">Next</SubmitButton>
              </StepForm>
            )}
            {step === 2 && (
              <StepForm onSubmit={handleSubmit}>
                <h3>Step 2: Reason for Emergency</h3>
                <InputGroup>
                  <Label htmlFor="reason">Reason for Emergency</Label>
                  <Select
                    name="reason"
                    id="reason"
                    value={formData.reason}
                    onChange={handleChange}
                  >
                    <option value="card_theft">Credit Card Theft</option>
                    <option value="identity_theft">Identity Theft</option>
                    <option value="suspicious_activity">
                      Suspicious Activity
                    </option>
                    <option value="other">Other</option>
                  </Select>
                </InputGroup>
                {formData.reason === "other" && (
                  <InputGroup>
                    <Input
                      type="text"
                      name="otherReason"
                      placeholder=" "
                      value={formData.otherReason}
                      onChange={handleChange}
                      required
                    />
                    <Label htmlFor="otherReason">Please specify</Label>
                  </InputGroup>
                )}
                <SubmitButton type="submit">Submit Request</SubmitButton>
              </StepForm>
            )}
          </>
        )}
        {submissionStatus === "submitting" && (
          <StatusMessage>
            <p>Processing request...</p>
            <p>Please wait.</p>
          </StatusMessage>
        )}
        {submissionStatus === "success" && (
          <SuccessContent>
            <h3>Request Sent!</h3>
            <p>A representative will contact you shortly.</p>
            <SubmitButton onClick={() => setSubmissionStatus("idle")}>
              Go Back
            </SubmitButton>
          </SuccessContent>
        )}
      </FormCard>
    </EmergencyContainer>
  );
};

export default Emergency;
