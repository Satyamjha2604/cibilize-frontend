import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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

const ExpensesContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 1400px;
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
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  &.glass-card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 25px var(--electric-blue);
    }
  }
`;

const FormCard = styled(Card)``;
const ChartCard = styled(Card)`
  align-items: center;
  gap: 30px;
`;
const ExpensesListCard = styled(Card)`
  margin-top: 30px;
  width: 100%;
`;
const BillsCard = styled(Card)`
  margin-top: 30px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: var(--light-blue);
  text-shadow: 0 0 8px rgba(224, 247, 250, 0.3);
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid rgba(224, 247, 250, 0.2);
  background: rgba(224, 247, 250, 0.05);
  border-radius: 10px;
  color: var(--light-blue);
  font-size: 17px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: var(--electric-blue);
    box-shadow: 0 0 8px var(--electric-blue);
  }
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

const Option = styled.option`
  background-color: var(--navy-blue);
  color: var(--light-blue);
`;

const AddExpenseButton = styled.button`
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  color: var(--navy-blue);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ExpenseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border-bottom: 1px solid rgba(224, 247, 250, 0.15);
    padding: 15px;
    text-align: left;
    color: var(--light-blue);
  }

  th {
    background-color: rgba(224, 247, 250, 0.1);
    font-weight: 600;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const BillsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 24px;
    background: linear-gradient(
      45deg,
      var(--electric-blue),
      var(--bright-cyan)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BillList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0;
`;

const BillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(224, 247, 250, 0.15);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(224, 247, 250, 0.05);
    transform: translateX(5px);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const BillDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  h4 {
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
  }
`;

const BillAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const Expenses = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food 🍔");
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [bills, setBills] = useState([
    { id: 1, name: "Rent", amount: "15000", due: "28-09-2025" },
    { id: 2, name: "Electricity Bill", amount: "2500", due: "05-10-2025" },
    { id: 3, name: "Internet", amount: "800", due: "12-10-2025" },
  ]);

  const categories = [
    "Food 🍔",
    "Travel ✈️",
    "Shopping 🛍️",
    "Bills 💡",
    "Entertainment 🎮",
    "Utilities ⚡",
    "Other ❓",
  ];

  const generateChartData = (currentExpenses) => {
    const dataMap = {};
    currentExpenses.forEach((exp) => {
      const cat = exp.category.split(" ")[0];
      dataMap[cat] = (dataMap[cat] || 0) + parseFloat(exp.amount);
    });

    return Object.keys(dataMap).map((cat) => ({
      category: cat,
      amount: dataMap[cat],
    }));
  };

  useEffect(() => {
    setChartData(generateChartData(expenses));
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!description || !amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid description and amount.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount).toFixed(2),
      category,
      date: new Date().toLocaleDateString(),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setDescription("");
    setAmount("");
    setCategory("Food 🍔");
  };

  return (
    <ExpensesContainer>
      <PageTitle>Expense Tracker</PageTitle>

      <TwoColumnLayout>
        <FormCard className="glass-card">
          <h3>Add New Expense</h3>
          <Form onSubmit={handleAddExpense}>
            <InputGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., Coffee, groceries"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g., 250"
                step="0.01"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="category">Category</Label>
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <Option key={cat} value={cat}>
                    {cat}
                  </Option>
                ))}
              </Select>
            </InputGroup>
            <AddExpenseButton type="submit">Add Expense</AddExpenseButton>
          </Form>
        </FormCard>

        <ChartCard className="glass-card">
          <h3>Expense Overview by Category</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(224, 247, 250, 0.3)"
              />
              <XAxis dataKey="category" stroke="var(--light-blue)" />
              <YAxis stroke="var(--light-blue)" />
              <Tooltip
                cursor={{ fill: "rgba(224, 247, 250, 0.1)" }}
                contentStyle={{
                  background: "rgba(0,0,0,0.7)",
                  border: "none",
                  borderRadius: "5px",
                }}
                itemStyle={{ color: "var(--electric-blue)" }}
                labelStyle={{ color: "var(--light-blue)" }}
              />
              <Bar dataKey="amount" fill="var(--electric-blue)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </TwoColumnLayout>

      {expenses.length > 0 && (
        <ExpensesListCard className="glass-card">
          <h3>Recent Expenses</h3>
          <ExpenseTable>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount (₹)</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.description}</td>
                  <td>{exp.amount}</td>
                  <td>{exp.category}</td>
                  <td>{exp.date}</td>
                </tr>
              ))}
            </tbody>
          </ExpenseTable>
        </ExpensesListCard>
      )}

      <BillsCard className="glass-card">
        <BillsHeader>
          <h3>Upcoming Bills</h3>
        </BillsHeader>
        <BillList>
          {bills.map((bill) => (
            <BillItem key={bill.id}>
              <BillDetails>
                <h4>{bill.name}</h4>
                <p>Due: {bill.due}</p>
              </BillDetails>
              <BillAmount>₹{bill.amount}</BillAmount>
            </BillItem>
          ))}
        </BillList>
      </BillsCard>
    </ExpensesContainer>
  );
};

export default Expenses;
