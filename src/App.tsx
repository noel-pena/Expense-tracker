import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<
    Array<{ description: string; amount: number; date: Date }>
  >([]);

  const addExpense = (expense: {
    description: string;
    amount: number;
    date: Date;
  }) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
