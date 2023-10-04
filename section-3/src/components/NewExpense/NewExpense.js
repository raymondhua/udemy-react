import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const [displayNewExpense, setDisplayNewExpense] = useState(false);

    const displayNewExpenseHandler = () =>{
        setDisplayNewExpense(prevDisplay => !prevDisplay);
    }

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        displayNewExpenseHandler();
    }

    var newExpenseHandler = (<button onClick={displayNewExpenseHandler} type="submit">Add New Expense</button>);

    if (displayNewExpense){
        newExpenseHandler = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelNewExpense={displayNewExpenseHandler}/>;
    }

    return <div className="new-expense">
       {newExpenseHandler}
    </div>
};

export default NewExpense;