import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const sampleCreditCards = [
  {
    id: "platinum",
    name: "Cibilize Platinum Rewards",
    benefits: [
      "5x points on dining",
      "Travel insurance",
      "No annual fee for 1st year",
    ],
    idealFor: ["travel", "dining", "high_spender"],
    income: "high",
    cibil: "excellent",
    imageUrl:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    applyLink: "https://example.com/apply/platinum",
  },
  {
    id: "cashback",
    name: "Cibilize Everyday Cashback",
    benefits: [
      "2% cashback on all purchases",
      "No annual fee",
      "Free movie tickets",
    ],
    idealFor: ["everyday_spending", "cashback"],
    income: "medium",
    cibil: "good",
    imageUrl:
      "https://images.unsplash.com/photo-1616782298716-1f7c75691d74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    applyLink: "https://example.com/apply/cashback",
  },
  {
    id: "fuel",
    name: "Cibilize Fuel Saver",
    benefits: [
      "5% cashback on fuel",
      "Roadside assistance",
      "Complimentary car wash",
    ],
    idealFor: ["commuter", "everyday_spending"],
    income: "medium",
    cibil: "good",
    imageUrl:
      "https://images.unsplash.com/photo-1596541579291-7f938092a06b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    applyLink: "https://example.com/apply/fuel",
  },
  {
    id: "travel_pro",
    name: "Cibilize Travel Pro Elite",
    benefits: [
      "Airport lounge access",
      "10x points on international travel",
      "Premium concierge",
    ],
    idealFor: ["travel", "high_spender"],
    income: "very_high",
    cibil: "excellent",
    imageUrl:
      "https://images.unsplash.com/photo-1582719508461-901d516703b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    applyLink: "https://example.com/apply/travel",
  },
  {
    id: "starter",
    name: "Cibilize Starter Credit",
    benefits: [
      "Build credit history",
      "Low credit limit",
      "Financial education access",
    ],
    idealFor: ["new_to_credit"],
    income: "low",
    cibil: "poor",
    imageUrl:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    applyLink: "https://example.com/apply/starter",
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const RecommendationsContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const QuestionCard = styled.div`
  &.glass-card {
    width: 100%;
    max-width: 700px;
    padding: 50px;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: ${slideIn} 0.5s ease-in-out;
  }
`;

const QuestionText = styled.h3`
  font-size: 32px;
  margin-bottom: 30px;
  color: var(--light-gray);
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-bottom: 30px;
`;

const OptionButton = styled.button`
  background: ${(props) =>
    props.selected
      ? "linear-gradient(45deg, var(--accent-purple), var(--accent-blue))"
      : "rgba(255, 255, 255, 0.1)"};
  border: 2px solid
    ${(props) =>
      props.selected ? "var(--accent-blue)" : "rgba(255, 255, 255, 0.2)"};
  border-radius: 15px;
  padding: 25px 20px;
  color: ${(props) =>
    props.selected ? "var(--dark-black)" : "var(--light-gray)"};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.selected ? "0 0 15px var(--accent-blue)" : "none"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px var(--accent-purple);
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const NavButton = styled.button`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 12px 30px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RecommendedCard = styled.div`
  &.glass-card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--accent-purple);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const CardName = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  li {
    font-size: 16px;
    margin-bottom: 8px;
    opacity: 0.9;
    &:before {
      content: "• ";
      color: var(--accent-blue);
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const ApplyButton = styled.a`
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  color: var(--dark-black);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  text-decoration: none;
  width: 100%;
  text-align: center;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const CreditCardRecommendations = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    spendingHabit: null,
    incomeLevel: null,
    cibilScore: null,
    desiredBenefit: null,
  });
  const [recommendations, setRecommendations] = useState([]);

  const questions = [
    {
      id: "spendingHabit",
      text: "What are your primary spending habits?",
      options: [
        { label: "Travel", value: "travel" },
        { label: "Dining & Entertainment", value: "dining" },
        { label: "Everyday Purchases", value: "everyday_spending" },
        { label: "Fuel & Commuting", value: "commuter" },
      ],
    },
    {
      id: "incomeLevel",
      text: "What is your approximate annual income level?",
      options: [
        { label: "Below ₹3 Lakhs", value: "low" },
        { label: "₹3 - ₹7 Lakhs", value: "medium" },
        { label: "₹7 - ₹15 Lakhs", value: "high" },
        { label: "Above ₹15 Lakhs", value: "very_high" },
      ],
    },
    {
      id: "cibilScore",
      text: "What is your current CIBIL Score range?",
      options: [
        { label: "Below 600 (Poor)", value: "poor" },
        { label: "600 - 700 (Average)", value: "average" },
        { label: "700 - 750 (Good)", value: "good" },
        { label: "Above 750 (Excellent)", value: "excellent" },
        { label: "New to Credit", value: "new_to_credit" },
      ],
    },
    {
      id: "desiredBenefit",
      text: "What kind of benefit do you value most?",
      options: [
        { label: "Cashback", value: "cashback" },
        { label: "Travel Rewards", value: "travel" },
        { label: "Points & Miles", value: "points" },
        { label: "Building Credit", value: "build_credit" },
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const goToNextStep = () => {
    if (step < questions.length) {
      setStep((prev) => prev + 1);
    } else {
      generateRecommendations();
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const generateRecommendations = () => {
    const filtered = sampleCreditCards.filter((card) => {
      let matches = 0;
      let totalCriteria = 0;

      if (
        answers.spendingHabit &&
        card.idealFor.includes(answers.spendingHabit)
      ) {
        matches++;
      }
      totalCriteria++;

      if (answers.incomeLevel === "low" && card.income === "low") {
        matches++;
      } else if (
        answers.incomeLevel === "medium" &&
        (card.income === "medium" || card.income === "low")
      ) {
        matches++;
      } else if (
        answers.incomeLevel === "high" &&
        (card.income === "high" || card.income === "medium")
      ) {
        matches++;
      } else if (
        answers.incomeLevel === "very_high" &&
        (card.income === "very_high" || card.income === "high")
      ) {
        matches++;
      }
      totalCriteria++;

      if (answers.cibilScore === "new_to_credit" && card.cibil === "poor") {
        matches++;
      } else if (answers.cibilScore === "poor" && card.cibil === "poor") {
        matches++;
      } else if (
        answers.cibilScore === "average" &&
        (card.cibil === "average" || card.cibil === "good")
      ) {
        matches++;
      } else if (
        answers.cibilScore === "good" &&
        (card.cibil === "good" || card.cibil === "excellent")
      ) {
        matches++;
      } else if (
        answers.cibilScore === "excellent" &&
        card.cibil === "excellent"
      ) {
        matches++;
      }
      totalCriteria++;

      if (answers.desiredBenefit) {
        if (
          answers.desiredBenefit === "cashback" &&
          card.benefits.some((b) => b.includes("cashback"))
        ) {
          matches++;
        } else if (
          answers.desiredBenefit === "travel" &&
          card.benefits.some((b) => b.includes("travel"))
        ) {
          matches++;
        } else if (
          answers.desiredBenefit === "points" &&
          card.benefits.some((b) => b.includes("points"))
        ) {
          matches++;
        } else if (
          answers.desiredBenefit === "build_credit" &&
          card.benefits.some((b) => b.includes("Build credit"))
        ) {
          matches++;
        }
      }
      totalCriteria++;

      return matches >= 2;
    });
    setRecommendations(filtered.length > 0 ? filtered : [sampleCreditCards[4]]);
  };

  const currentQuestion = questions[step - 1];
  const isCurrentStepAnswered = answers[currentQuestion?.id] !== null;

  return (
    <RecommendationsContainer>
      <PageTitle>Credit Card Recommender</PageTitle>

      {recommendations.length === 0 ? (
        <QuestionCard className="glass-card">
          <QuestionText>{currentQuestion.text}</QuestionText>
          <OptionsGrid>
            {currentQuestion.options.map((option) => (
              <OptionButton
                key={option.value}
                selected={answers[currentQuestion.id] === option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
              >
                {option.label}
              </OptionButton>
            ))}
          </OptionsGrid>
          <NavigationButtons>
            <NavButton onClick={goToPreviousStep} disabled={step === 1}>
              Previous
            </NavButton>
            <NavButton onClick={goToNextStep} disabled={!isCurrentStepAnswered}>
              {step < questions.length ? "Next" : "Get Recommendations"}
            </NavButton>
          </NavigationButtons>
        </QuestionCard>
      ) : (
        <>
          <PageTitle>Your Recommended Cards</PageTitle>
          <RecommendationsGrid>
            {recommendations.map((card) => (
              <RecommendedCard key={card.id} className="glass-card">
                <CardImage src={card.imageUrl} alt={card.name} />
                <CardName>{card.name}</CardName>
                <BenefitsList>
                  {card.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </BenefitsList>
                <ApplyButton
                  href={card.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </ApplyButton>
              </RecommendedCard>
            ))}
          </RecommendationsGrid>
          <NavButton
            onClick={() => {
              setRecommendations([]);
              setStep(1);
              setAnswers({});
            }}
          >
            Start Over
          </NavButton>
        </>
      )}
    </RecommendationsContainer>
  );
};

export default CreditCardRecommendations;
