import React, { useState } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    padding: 30px;
  }
`;

const ProfileHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const PageTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 10px rgba(144, 224, 239, 0.5);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const UserHeaderCard = styled.div`
  &.glass-card {
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-blue);
    }
  }
`;

const UserAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  color: var(--dark-black);
  box-shadow: 0 0 20px rgba(144, 224, 239, 0.5);
`;

const ProfileName = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: var(--light-gray);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProfileEmail = styled.p`
  font-size: 18px;
  opacity: 0.8;
  margin: 0;
  color: var(--light-gray);
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
`;

const SettingsCard = styled.div`
  &.glass-card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-purple);
    }
  }
`;

const SettingsTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 10px 0;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    margin: 0;
    font-size: 16px;
    opacity: 0.9;
    color: var(--light-gray);
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + .slider {
    background-color: var(--accent-blue);
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 12px 25px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoutButton = styled.button`
  background: linear-gradient(45deg, var(--accent-pink), var(--accent-purple));
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  color: var(--light-gray);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  margin-top: 30px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Profile = ({ onLogout }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ProfileContainer>
      <PageTitle>My Profile</PageTitle>

      <UserHeaderCard className="glass-card">
        <UserAvatar>P</UserAvatar>
        <ProfileName>Priya Sharma</ProfileName>
        <ProfileEmail>priya.sharma@cibilize.com</ProfileEmail>
      </UserHeaderCard>

      <SettingsGrid>
        <SettingsCard className="glass-card">
          <SettingsTitle>Personal Information</SettingsTitle>
          <SettingsItem>
            <p>Name:</p>
            <p>Priya Sharma</p>
          </SettingsItem>
          <SettingsItem>
            <p>Email:</p>
            <p>priya.sharma@cibilize.com</p>
          </SettingsItem>
          <SettingsItem>
            <p>Phone:</p>
            <p>+91 98765 43210</p>
          </SettingsItem>
        </SettingsCard>

        <SettingsCard className="glass-card">
          <SettingsTitle>App Preferences</SettingsTitle>
          <SettingsItem>
            <p>Dark Mode</p>
            <ToggleSwitch>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleThemeChange}
              />
              <span className="slider" />
            </ToggleSwitch>
          </SettingsItem>
          <SettingsItem>
            <p>Enable Notifications</p>
            <ToggleSwitch>
              <input type="checkbox" defaultChecked />
              <span className="slider" />
            </ToggleSwitch>
          </SettingsItem>
        </SettingsCard>

        <SettingsCard className="glass-card">
          <SettingsTitle>Security Center</SettingsTitle>
          <SettingsItem>
            <p>Two-Factor Authentication</p>
            <ToggleSwitch>
              <input type="checkbox" />
              <span className="slider" />
            </ToggleSwitch>
          </SettingsItem>
          <SettingsItem>
            <p>Change Password</p>
            <StyledButton>Manage</StyledButton>
          </SettingsItem>
        </SettingsCard>

        <SettingsCard className="glass-card">
          <SettingsTitle>Data & Privacy</SettingsTitle>
          <SettingsItem>
            <p>Download My Data</p>
            <StyledButton>Export</StyledButton>
          </SettingsItem>
          <SettingsItem>
            <p>Delete Account</p>
            <StyledButton>Delete</StyledButton>
          </SettingsItem>
        </SettingsCard>
      </SettingsGrid>

      <LogoutButton onClick={onLogout}>Log Out</LogoutButton>
    </ProfileContainer>
  );
};

export default Profile;
