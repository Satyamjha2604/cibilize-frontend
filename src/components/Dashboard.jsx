import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- Styled Components ---

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DashboardContainer = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
`;

const Card = styled.div`
  &.glass-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 40px;
    min-height: 250px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--electric-blue);
    }
  }
`;

const CibilScoreCard = styled(Card)`
  grid-column: span 1;
`;

const ScoreCircle = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(224, 247, 250, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
  border: 4px solid var(--electric-blue);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      var(--electric-blue) 0%,
      transparent 70%
    );
    filter: blur(20px);
    opacity: 0.8;
    z-index: -1;
  }
`;

const Score = styled.span`
  font-size: 80px;
  font-weight: 800;
  background: linear-gradient(45deg, var(--bright-cyan), var(--electric-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 230, 255, 0.5);
`;

const ChartCard = styled(Card)`
  grid-column: span 1;
`;

const RecommendedCardsContainer = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CreditCardWrapper = styled.div`
  background: rgba(224, 247, 250, 0.08);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(224, 247, 250, 0.15);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  width: 300px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-12px) scale(1.04);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--bright-cyan);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CreditCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 15px;

  h3 {
    margin: 0 0 12px 0;
    font-size: 24px;
    background: linear-gradient(
      45deg,
      var(--electric-blue),
      var(--bright-cyan)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 17px;
    opacity: 0.9;
    margin-bottom: 20px;
  }
`;

const SimulatorCard = styled(Card)`
  grid-column: span 2;
  width: 100%;
  padding: 50px;
`;

const SimulatorForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 650px;
  margin-top: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  color: var(--light-blue);
  text-shadow: 0 0 8px rgba(224, 247, 250, 0.3);
`;

const Select = styled.select`
  padding: 15px;
  border: 1px solid rgba(224, 247, 250, 0.2);
  background: rgba(224, 247, 250, 0.05);
  border-radius: 10px;
  color: var(--light-blue);
  font-size: 17px;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='var(--light-blue)' width='24px' height='24px'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px top 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 8px var(--electric-blue);
  }
`;

const StyledInput = styled.input`
  padding: 15px;
  border: 1px solid rgba(224, 247, 250, 0.2);
  background: rgba(224, 247, 250, 0.05);
  border-radius: 10px;
  color: var(--light-blue);
  font-size: 17px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--electric-blue);
    box-shadow: 0 0 8px var(--electric-blue);
  }
`;

const resultRise = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ResultContainer = styled.div`
  margin-top: 30px;
  padding: 25px;
  background: rgba(224, 247, 250, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(8px);
  animation: ${resultRise} 0.6s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(224, 247, 250, 0.15);
`;

const ResultScore = styled.p`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const ResultMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--light-blue);
  margin: 10px 0 0 0;
`;

const GoalTrackerCard = styled(Card)`
  grid-column: span 2;
  width: 100%;
  padding: 50px;
  text-align: center;
`;

const GoalInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  width: 100%;
  max-width: 650px;
  margin-top: 30px;
`;

const ProgressBarContainer = styled.div`
  width: 85%;
  max-width: 550px;
  height: 30px;
  background: rgba(224, 247, 250, 0.1);
  border-radius: 15px;
  margin: 40px auto 25px auto;
  overflow: hidden;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--electric-blue), var(--bright-cyan));
  width: ${(props) => props.progress}%;
  transition: width 0.8s ease-in-out;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  font-weight: bold;
  font-size: 16px;
  color: var(--navy-blue);
  white-space: nowrap;
`;

const GoalPercentageText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--electric-blue);
  margin-top: 15px;
  text-shadow: 0 0 8px rgba(0, 230, 255, 0.4);
`;

const ScoreBreakdownCard = styled(Card)`
  grid-column: span 2;
  width: 100%;
  padding: 50px;
  text-align: left;
`;

const ScoreBreakdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const BreakdownItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(224, 247, 250, 0.15);

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 0;
    font-size: 18px;
  }
`;

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
];

const Dashboard = () => {
  const initialScore = 810;
  const [currentScore, setCurrentScore] = useState(initialScore);
  const [action, setAction] = useState("pay_on_time");
  const [simulationResult, setSimulationResult] = useState(null);

  const [goalAmount, setGoalAmount] = useState(100000);
  const [currentSavings, setCurrentSavings] = useState(25000);

  const [scoreFactors] = useState([
    { factor: "Payment History", percentage: 35 },
    { factor: "Credit Utilization", percentage: 30 },
    { factor: "Credit Age", percentage: 15 },
    { factor: "Credit Mix", percentage: 10 },
    { factor: "New Credit", percentage: 10 },
  ]);

  const calculateProgress = () => {
    const goal = parseFloat(goalAmount);
    const savings = parseFloat(currentSavings);
    if (isNaN(goal) || goal <= 0) return 0;
    const progress = (savings / goal) * 100;
    return Math.min(progress, 100);
  };

  const simulate = () => {
    let scoreChange = 0;
    if (action === "pay_on_time") {
      scoreChange = Math.floor(Math.random() * 10) + 5;
    } else if (action === "pay_off_debt") {
      scoreChange = Math.floor(Math.random() * 20) + 10;
    } else if (action === "miss_payment") {
      scoreChange = -(Math.floor(Math.random() * 40) + 20);
    } else if (action === "new_credit_card") {
      scoreChange = -(Math.floor(Math.random() * 15) + 5);
    }
    const newScore = initialScore + scoreChange;
    setCurrentScore(newScore);
    setSimulationResult({ newScore, scoreChange });
  };

  const progressPercentage = calculateProgress();

  return (
    <DashboardContainer>
      <CibilScoreCard className="glass-card">
        <h2>Your CIBIL Score</h2>
        <ScoreCircle>
          <Score>{currentScore}</Score>
          <p>Excellent</p>
        </ScoreCircle>
      </CibilScoreCard>

      <ChartCard className="glass-card">
        <h2>Expense Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="var(--light-blue)" />
            <YAxis stroke="var(--light-blue)" />
            <Tooltip />
            <Bar dataKey="value" fill="var(--electric-blue)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <SimulatorCard className="glass-card">
        <h2>Credit Score Simulator</h2>
        <p>See how your financial actions can affect your score.</p>
        <SimulatorForm>
          <InputGroup>
            <Label htmlFor="action">Select an Action:</Label>
            <Select
              id="action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
            >
              <option value="pay_on_time">Pay your bills on time</option>
              <option value="pay_off_debt">Pay off a large debt</option>
              <option value="miss_payment">Miss a credit card payment</option>
              <option value="new_credit_card">Open a new credit card</option>
            </Select>
          </InputGroup>
          <button onClick={simulate} className="cta-button">
            Simulate
          </button>
        </SimulatorForm>
        {simulationResult && (
          <ResultContainer>
            <ResultMessage>
              {simulationResult.scoreChange > 0
                ? "Your score could increase to"
                : "Your score could decrease to"}
            </ResultMessage>
            <ResultScore>{simulationResult.newScore}</ResultScore>
            <p>
              A change of{" "}
              {simulationResult.scoreChange > 0
                ? `+${simulationResult.scoreChange}`
                : simulationResult.scoreChange}
            </p>
          </ResultContainer>
        )}
      </SimulatorCard>

      <GoalTrackerCard className="glass-card">
        <h2>Financial Goal Tracker</h2>
        <p>Track your progress towards a goal.</p>
        <GoalInputGrid>
          <InputGroup>
            <Label htmlFor="goalAmount">Goal Amount (₹)</Label>
            <StyledInput
              type="number"
              id="goalAmount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="currentSavings">Current Savings (₹)</Label>
            <StyledInput
              type="number"
              id="currentSavings"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
            />
          </InputGroup>
        </GoalInputGrid>
        <ProgressBarContainer>
          <ProgressBar progress={progressPercentage}>
            {progressPercentage.toFixed(0)}%
          </ProgressBar>
        </ProgressBarContainer>
        <GoalPercentageText>
          You are **{progressPercentage.toFixed(0)}%** of the way to your goal!
        </GoalPercentageText>
      </GoalTrackerCard>

      <ScoreBreakdownCard className="glass-card">
        <h2>CIBIL Score Breakdown</h2>
        <p>This shows the key factors influencing your score.</p>
        <ScoreBreakdownList>
          {scoreFactors.map((item, index) => (
            <BreakdownItem key={index}>
              <p>{item.factor}</p>
              <p>**{item.percentage}%**</p>
            </BreakdownItem>
          ))}
        </ScoreBreakdownList>
      </ScoreBreakdownCard>

      <RecommendedCardsContainer>
        <CreditCardWrapper>
          <CreditCard>
            <h3>Cibilize Platinum</h3>
            <p>1234 **** **** 5678</p>
            <button className="cta-button">Apply Now</button>
          </CreditCard>
        </CreditCardWrapper>
        <CreditCardWrapper>
          <CreditCard>
            <h3>Rewards Plus</h3>
            <p>9876 **** **** 5432</p>
            <button className="cta-button">Apply Now</button>
          </CreditCard>
        </CreditCardWrapper>
      </RecommendedCardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
