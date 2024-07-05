import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";

const App: React.FC = () => {
  // const [expenses, setExpenses] = useState<
  //   Array<{ description: string; amount: number; date: Date }>
  // >([]); logic for when I add expenselist

  return (
    <>
      <ExpenseForm addExpense={addExpense} />
    </>
  );
};

export default App;
