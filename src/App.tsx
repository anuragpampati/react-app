import { useState } from "react";
import ExpenseList from "./expense-tracker/Components/ExpenseList";

function App() {
  const [expense, setExpense] = useState([
    {
      id: 1,
      decription: "a",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      decription: "a",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      decription: "a",
      amount: 10,
      category: "Utilities",
    },
  ]);
  if (expense.length == 0) return null;
  return (
    <div>
      <ExpenseList
        expense={expense}
        onDelete={(id) => setExpense(expense.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
