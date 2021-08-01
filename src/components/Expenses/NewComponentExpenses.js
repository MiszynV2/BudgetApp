
import "./NewComponentExpenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

function NewComponentExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(el => {
      return el.date.getFullYear().toString() === filteredYear
  })

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default NewComponentExpenses;
