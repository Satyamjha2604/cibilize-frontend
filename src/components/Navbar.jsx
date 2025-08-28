import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(15px);
  background-color: rgba(224, 247, 250, 0.1);
  border-bottom: 1px solid rgba(224, 247, 250, 0.18);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

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
  color: var(--light-blue);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--electric-blue);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--electric-blue);
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
`;

const Button = styled.button`
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  color: var(--navy-blue);
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
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--navy-blue);
  font-weight: bold;
  box-shadow: 0 0 10px var(--bright-cyan);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = ({ isLoggedIn, onOpenAuthModal, onLogout }) => {
  return (
    <NavContainer>
      <Logo>Cibilize</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/expenses">Expenses</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/emergency">Emergency</NavLink>
        <NavLink to="/recommendations">Recommendations</NavLink>{" "}
        {/* <-- New NavLink */}
      </NavLinks>
      <NavButtons>
        {isLoggedIn ? (
          <>
            <ProfileIcon to="/profile">P</ProfileIcon>
            <Button onClick={onLogout}>Log Out</Button>
          </>
        ) : (
          <Button onClick={() => onOpenAuthModal("signup")}>Sign Up</Button>
        )}
      </NavButtons>
    </NavContainer>
  );
};

export default Navbar;
