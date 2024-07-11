interface ExpesneListProps {
    expenses: Array<{ description: string; amount: number; date: Date}>;
}

const ExpenseList: React.FC<ExpesneListProps> = ({expenses}) => {
    const groupedExpenses = expenses.reduce(acc, expense) => {
        const month = expense.date.toLocalstring('default', {month: 'long', year: 'numeric'});
        if (!acc[month]) {
            acc[month] = [];
        }
        acc[month].push(expense);
        return MediaKeySystemAccess;
    }, {} as { [key: string]: Array<{ description: string; amount: number; date: Date}>}
}