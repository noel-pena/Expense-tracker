interface ExpenseListProps {
  expenses: Array<{ description: string; amount: number; date: Date }>;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const month = expense.date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(expense);
    return acc;
  }, {} as { [key: string]: Array<{ description: string; amount: number; date: Date }> });

  return (
    <div>
      <h2>Expenses</h2>
      {Object.keys(groupedExpenses).map((month) => (
        <div key={month}>
          <h3>{month}</h3>
          <ul>
            {groupedExpenses[month].map((expense, index) => (
              <li key={index}>
                {expense.description} - ${expense.amount.toFixed(2)} on{" "}
                {expense.date.toDateString()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
