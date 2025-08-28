import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 50px;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const HeroSection = styled.div`
  margin-bottom: 100px;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
  background: linear-gradient(
    45deg,
    var(--accent-purple),
    var(--accent-pink),
    var(--accent-blue)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(144, 224, 239, 0.5);

  @media (max-width: 1024px) {
    font-size: 58px;
  }

  @media (max-width: 768px) {
    font-size: 44px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 26px;
  max-width: 700px;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0 auto;
  color: var(--light-gray);

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const CallToActionButton = styled(Link)`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 18px 45px;
  font-size: 20px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 40px;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 0 15px var(--accent-blue);
  }

  @media (max-width: 768px) {
    padding: 15px 35px;
    font-size: 18px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FeatureCard = styled.div`
  &.glass-card {
    text-align: left;
    padding: 35px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 15px var(--accent-purple);
    }
  }

  h3 {
    font-size: 28px;
    margin-bottom: 12px;
    background: linear-gradient(
      45deg,
      var(--accent-purple),
      var(--accent-blue)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 5px rgba(157, 78, 221, 0.3);

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 17px;
    opacity: 0.85;
    line-height: 1.6;
    color: var(--light-gray);
  }
`;

const Homepage = () => {
  return (
    <HomePageContainer>
      <HeroSection>
        <HeroTitle>Unlock Your Financial Potential</HeroTitle>
        <HeroSubtitle>
          Take control of your credit and expenses with Cibilize, the modern
          fintech dashboard designed for clarity, growth, and peace of mind.
        </HeroSubtitle>
        <CallToActionButton to="/signup-flow">Get Started</CallToActionButton>
      </HeroSection>

      <ContentContainer>
        <FeatureCard className="glass-card">
          <h3>Manage Expenses</h3>
          <p>
            Track your spending with animated charts and categorized insights to
            help you stay on budget and understand your financial habits better.
          </p>
        </FeatureCard>
        <FeatureCard className="glass-card">
          <h3>Improve Credit</h3>
          <p>
            Get real-time updates and personalized tips to boost your CIBIL
            score effectively, paving the way for better financial
            opportunities.
          </p>
        </FeatureCard>
        <FeatureCard className="glass-card">
          <h3>Smart Budgeting</h3>
          <p>
            Create custom budgets with intelligent recommendations and receive
            timely alerts to manage your money effortlessly, avoiding
            overspending.
          </p>
        </FeatureCard>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default Homepage;
