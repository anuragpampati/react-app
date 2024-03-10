import { useState } from "react";
import ExpenseFilter from "./expense-tracker/Components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/Components/ExpenseForm";
import ExpenseList from "./expense-tracker/Components/ExpenseList";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setselectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    {
      id: 1,
      description: "a",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "a",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "a",
      amount: 10,
      category: "Utilities",
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  if (expenses.length == 0) return null;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setselectedCategory(category)}
        />
      </div>

      <ExpenseList
        expense={visibleExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
