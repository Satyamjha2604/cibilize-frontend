import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

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

const ToolsContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const ToolTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CalculatorContainer = styled.div`
  width: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const TabButton = styled.button`
  background: ${(props) =>
    props.active
      ? "linear-gradient(45deg, var(--accent-purple), var(--accent-blue))"
      : "none"};
  border: 1px solid
    ${(props) => (props.active ? "transparent" : "rgba(255, 255, 255, 0.2)")};
  border-radius: 50px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.active ? "var(--dark-black)" : "var(--light-gray)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px var(--accent-blue);
    transform: translateY(-2px);
  }
`;

const CalculatorCard = styled.div`
  &.glass-card {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    animation: ${fadeIn} 0.5s ease-in-out;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-blue);
    }
  }
`;

const CardHeading = styled.h3`
  font-size: 28px;
  margin: 0;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardDescription = styled.p`
  font-size: 16px;
  opacity: 0.8;
  margin: 0;
`;

const CalculatorBody = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: var(--light-gray);
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid rgba(224, 247, 250, 0.2);
  background: rgba(224, 247, 250, 0.05);
  border-radius: 10px;
  color: var(--light-gray);
  font-size: 17px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: var(--accent-blue);
    box-shadow: 0 0 8px var(--accent-blue);
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  p {
    margin: 0;
  }
`;

const ResultValue = styled.span`
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Button = styled.button`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FormulaSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  font-size: 14px;
  font-style: italic;
  text-align: center;
  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const Tools = () => {
  const [activeTab, setActiveTab] = useState("emi");

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipTenure, setSipTenure] = useState(10);
  const [sipFutureValue, setSipFutureValue] = useState(0);

  // Lumpsum Calculator State
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [lumpsumRate, setLumpsumRate] = useState(12);
  const [lumpsumTenure, setLumpsumTenure] = useState(5);
  const [lumpsumFutureValue, setLumpsumFutureValue] = useState(0);

  // Debt Repayment State
  const [debtAmount, setDebtAmount] = useState(50000);
  const [debtRate, setDebtRate] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(2500);
  const [debtMonths, setDebtMonths] = useState(0);

  // Tax Savings State
  const [taxInvestment, setTaxInvestment] = useState(150000);
  const [taxSavings, setTaxSavings] = useState(0);
  const taxSlab = 0.3;

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTenure) * 12;
    if (principal > 0 && rate > 0 && time > 0) {
      const emiValue =
        (principal * rate * Math.pow(1 + rate, time)) /
        (Math.pow(1 + rate, time) - 1);
      const total = emiValue * time;
      setEmi(emiValue.toFixed(2));
      setTotalPayment(total.toFixed(2));
    } else {
      setEmi(0);
      setTotalPayment(0);
    }
  };

  const calculateSip = () => {
    const p = parseFloat(sipAmount);
    const r = parseFloat(sipRate) / 100 / 12;
    const n = parseFloat(sipTenure) * 12;
    if (p > 0 && r > 0 && n > 0) {
      const futureValue = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      setSipFutureValue(futureValue.toFixed(2));
    } else {
      setSipFutureValue(0);
    }
  };

  const calculateLumpsum = () => {
    const p = parseFloat(lumpsumAmount);
    const r = parseFloat(lumpsumRate) / 100;
    const t = parseFloat(lumpsumTenure);
    if (p > 0 && r > 0 && t > 0) {
      const futureValue = p * Math.pow(1 + r, t);
      setLumpsumFutureValue(futureValue.toFixed(2));
    } else {
      setLumpsumFutureValue(0);
    }
  };

  const calculateDebt = () => {
    let debt = parseFloat(debtAmount);
    const monthlyRate = parseFloat(debtRate) / 100 / 12;
    const payment = parseFloat(monthlyPayment);
    let months = 0;
    if (debt > 0 && payment > 0 && payment > debt * monthlyRate) {
      while (debt > 0) {
        debt = debt * (1 + monthlyRate) - payment;
        months++;
      }
      setDebtMonths(months);
    } else {
      setDebtMonths(0);
    }
  };

  const calculateTaxSavings = () => {
    const investment = Math.min(parseFloat(taxInvestment), 150000);
    const savings = investment * taxSlab;
    setTaxSavings(savings.toFixed(2));
  };

  const renderCalculator = () => {
    switch (activeTab) {
      case "emi":
        return (
          <CalculatorBody>
            <InputGroup>
              <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
              <Input
                type="number"
                id="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
              <Input
                type="number"
                id="loanTenure"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
              />
            </InputGroup>
            <Button onClick={calculateEmi}>Calculate EMI</Button>
            {emi > 0 && (
              <Result>
                <p>
                  Monthly EMI: <ResultValue>₹{emi}</ResultValue>
                </p>
                <p>
                  Total Payment: <ResultValue>₹{totalPayment}</ResultValue>
                </p>
                <FormulaSection>
                  <p>Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)</p>
                  <p>
                    Where P = Principal, r = monthly interest rate, n = number
                    of months
                  </p>
                </FormulaSection>
              </Result>
            )}
          </CalculatorBody>
        );
      case "sip":
        return (
          <CalculatorBody>
            <InputGroup>
              <Label htmlFor="sipAmount">Monthly Investment (₹)</Label>
              <Input
                type="number"
                id="sipAmount"
                value={sipAmount}
                onChange={(e) => setSipAmount(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="sipRate">Expected Return Rate (%)</Label>
              <Input
                type="number"
                id="sipRate"
                value={sipRate}
                onChange={(e) => setSipRate(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="sipTenure">Investment Period (Years)</Label>
              <Input
                type="number"
                id="sipTenure"
                value={sipTenure}
                onChange={(e) => setSipTenure(e.target.value)}
              />
            </InputGroup>
            <Button onClick={calculateSip}>Calculate SIP</Button>
            {sipFutureValue > 0 && (
              <Result>
                <p>
                  Est. Future Value:{" "}
                  <ResultValue>₹{sipFutureValue}</ResultValue>
                </p>
                <FormulaSection>
                  <p>Formula: FV = P * [((1+i)^n - 1)/i] * (1+i)</p>
                  <p>
                    Where P = Monthly investment, i = monthly return rate, n =
                    number of months
                  </p>
                </FormulaSection>
              </Result>
            )}
          </CalculatorBody>
        );
      case "lumpsum":
        return (
          <CalculatorBody>
            <InputGroup>
              <Label htmlFor="lumpsumAmount">Total Investment (₹)</Label>
              <Input
                type="number"
                id="lumpsumAmount"
                value={lumpsumAmount}
                onChange={(e) => setLumpsumAmount(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="lumpsumRate">Expected Return Rate (%)</Label>
              <Input
                type="number"
                id="lumpsumRate"
                value={lumpsumRate}
                onChange={(e) => setLumpsumRate(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="lumpsumTenure">Investment Period (Years)</Label>
              <Input
                type="number"
                id="lumpsumTenure"
                value={lumpsumTenure}
                onChange={(e) => setLumpsumTenure(e.target.value)}
              />
            </InputGroup>
            <Button onClick={calculateLumpsum}>Calculate Lumpsum</Button>
            {lumpsumFutureValue > 0 && (
              <Result>
                <p>
                  Est. Future Value:{" "}
                  <ResultValue>₹{lumpsumFutureValue}</ResultValue>
                </p>
                <FormulaSection>
                  <p>Formula: FV = P * (1 + r)^t</p>
                  <p>
                    Where P = Principal, r = annual interest rate, t = number of
                    years
                  </p>
                </FormulaSection>
              </Result>
            )}
          </CalculatorBody>
        );
      case "debt":
        return (
          <CalculatorBody>
            <InputGroup>
              <Label htmlFor="debtAmount">Total Debt (₹)</Label>
              <Input
                type="number"
                id="debtAmount"
                value={debtAmount}
                onChange={(e) => setDebtAmount(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="debtRate">Interest Rate (%)</Label>
              <Input
                type="number"
                id="debtRate"
                value={debtRate}
                onChange={(e) => setDebtRate(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="monthlyPayment">Monthly Payment (₹)</Label>
              <Input
                type="number"
                id="monthlyPayment"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
              />
            </InputGroup>
            <Button onClick={calculateDebt}>Calculate Repayment</Button>
            {debtMonths > 0 && (
              <Result>
                <p>
                  It will take <ResultValue>{debtMonths} months</ResultValue> to
                  pay off your debt.
                </p>
                <FormulaSection>
                  <p>
                    This is an iterative calculation, not a single-step formula.
                  </p>
                </FormulaSection>
              </Result>
            )}
          </CalculatorBody>
        );
      case "tax":
        return (
          <CalculatorBody>
            <InputGroup>
              <Label htmlFor="taxInvestment">Investment Amount (₹)</Label>
              <Input
                type="number"
                id="taxInvestment"
                value={taxInvestment}
                onChange={(e) => setTaxInvestment(e.target.value)}
              />
            </InputGroup>
            <Button onClick={calculateTaxSavings}>Calculate Savings</Button>
            {taxSavings > 0 && (
              <Result>
                <p>
                  Estimated Tax Savings:{" "}
                  <ResultValue>₹{taxSavings}</ResultValue>
                </p>
                <FormulaSection>
                  <p>Formula: Savings = Investment Amount * Tax Slab</p>
                  <p>Max Investment for 80C: ₹150,000</p>
                </FormulaSection>
              </Result>
            )}
          </CalculatorBody>
        );
      default:
        return null;
    }
  };

  return (
    <ToolsContainer>
      <ToolTitle>Financial Tools & Calculators</ToolTitle>
      <CalculatorContainer>
        <TabContainer>
          <TabButton
            active={activeTab === "emi"}
            onClick={() => setActiveTab("emi")}
          >
            EMI
          </TabButton>
          <TabButton
            active={activeTab === "sip"}
            onClick={() => setActiveTab("sip")}
          >
            SIP
          </TabButton>
          <TabButton
            active={activeTab === "lumpsum"}
            onClick={() => setActiveTab("lumpsum")}
          >
            Lumpsum
          </TabButton>
          <TabButton
            active={activeTab === "debt"}
            onClick={() => setActiveTab("debt")}
          >
            Debt
          </TabButton>
          <TabButton
            active={activeTab === "tax"}
            onClick={() => setActiveTab("tax")}
          >
            Tax
          </TabButton>
        </TabContainer>
        <CalculatorCard className="glass-card">
          <CardHeading>
            {activeTab === "emi" && "EMI Calculator"}
            {activeTab === "sip" && "SIP Calculator"}
            {activeTab === "lumpsum" && "Lumpsum Calculator"}
            {activeTab === "debt" && "Debt Repayment Calculator"}
            {activeTab === "tax" && "Tax Savings Calculator"}
          </CardHeading>
          <CardDescription>
            {activeTab === "emi" && "Estimate your monthly loan installments."}
            {activeTab === "sip" &&
              "Calculate the future value of your mutual fund investments."}
            {activeTab === "lumpsum" &&
              "Estimate the future value of a one-time investment."}
            {activeTab === "debt" &&
              "Find out how long it will take to pay off your debt."}
            {activeTab === "tax" &&
              "Calculate your potential tax savings from investments."}
          </CardDescription>
          {renderCalculator()}
        </CalculatorCard>
      </CalculatorContainer>
    </ToolsContainer>
  );
};

export default Tools;
