import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 40px;
  width: 90%;
  max-width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: white;

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 350px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--pink);
  }
`;

const ToggleFormText = styled.p`
  font-size: 14px;
  text-align: center;
  span {
    color: var(--blue-dark);
    cursor: pointer;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AuthModal = ({
  show,
  formType,
  onClose,
  onToggleForm,
  onSuccessAuth,
}) => {
  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {formType === "login" ? (
          <LoginForm onSuccessAuth={onSuccessAuth} />
        ) : (
          <SignupForm onSuccessAuth={onSuccessAuth} />
        )}
        <ToggleFormText>
          {formType === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span onClick={onToggleForm}>
            {formType === "login" ? "Sign Up" : "Log In"}
          </span>
        </ToggleFormText>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthModal;
