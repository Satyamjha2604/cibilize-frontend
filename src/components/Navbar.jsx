import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const navSlideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${navSlideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--light-gray);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--accent-blue);
    transform: translateY(-2px);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(
      45deg,
      var(--accent-purple),
      var(--accent-blue)
    );
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 14px;
  }
`;

const ProfileIcon = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-black);
  font-weight: bold;
  box-shadow: 0 0 10px var(--accent-blue);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;

  span {
    height: 3px;
    width: 25px;
    background: linear-gradient(
      45deg,
      var(--accent-purple),
      var(--accent-blue)
    );
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  padding-top: 80px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
  z-index: 999;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileNavLink = styled(Link)`
  color: var(--light-gray);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-blue);
  }
`;

const Navbar = ({ isLoggedIn, onOpenAuthModal, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavContainer>
      <Logo to="/">Cibilize</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/expenses">Expenses</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/emergency">Emergency</NavLink>
        <NavLink to="/recommendations">Recommendations</NavLink>
      </NavLinks>
      <NavButtons>
        {isLoggedIn ? (
          <>
            <ProfileIcon to="/profile">P</ProfileIcon>
            <Button onClick={onLogout}>Log Out</Button>
          </>
        ) : (
          <Button onClick={() => onOpenAuthModal("login")}>Log In</Button>
        )}
      </NavButtons>
      <Hamburger
        onClick={toggleMobileMenu}
        className={mobileMenuOpen ? "open" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <MobileMenu open={mobileMenuOpen}>
        <MobileNavLink onClick={toggleMobileMenu} to="/">
          Home
        </MobileNavLink>
        <MobileNavLink onClick={toggleMobileMenu} to="/dashboard">
          Dashboard
        </MobileNavLink>
        <MobileNavLink onClick={toggleMobileMenu} to="/expenses">
          Expenses
        </MobileNavLink>
        <MobileNavLink onClick={toggleMobileMenu} to="/tools">
          Tools
        </MobileNavLink>
        <MobileNavLink onClick={toggleMobileMenu} to="/emergency">
          Emergency
        </MobileNavLink>
        <MobileNavLink onClick={toggleMobileMenu} to="/recommendations">
          Recommendations
        </MobileNavLink>
        {isLoggedIn ? (
          <>
            <MobileNavLink
              onClick={() => {
                onLogout();
                toggleMobileMenu();
              }}
              to="#"
            >
              Log Out
            </MobileNavLink>
          </>
        ) : (
          <MobileNavLink
            onClick={() => {
              onOpenAuthModal("login");
              toggleMobileMenu();
            }}
            to="#"
          >
            Log In
          </MobileNavLink>
        )}
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;
