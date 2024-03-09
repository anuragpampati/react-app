import { useState } from "react";
import ExpenseFilter from "./expense-tracker/Components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/Components/ExpenseForm";
import ExpenseList from "./expense-tracker/Components/ExpenseList";

export const categories = ["Groceries", "Utilities", "Entertainment"];
function App() {
  const [selectedCategory, setselectedCategory] = useState("");
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
  const visibleExpenses = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;
  if (expense.length == 0) return null;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setselectedCategory(category)}
        />
      </div>

      <ExpenseList
        expense={visibleExpenses}
        onDelete={(id) => setExpense(expense.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
