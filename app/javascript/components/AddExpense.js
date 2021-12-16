import React, { useState } from "react";
import classes from "./AddExpense.module.css"
import Button from "./Button";



const AddExpense = (props) => {
    const [enteredExpense, setEnteredExpense] = useState("");
    const [enteredClassification, setEnteredClassification] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");


    const addExpenseHandler = (event) => {
        event.preventDefault();
        if (enteredAmount.trim().length === 0 ||
            enteredClassification.trim().length === 0 ||
            enteredDate.trim().length === 0 ||
            enteredAmount.trim().length === 0) {
            return;
        }
        if (enteredAmount <= 0) {
            return;
        }
        console.log(enteredExpense, enteredClassification, enteredDate, enteredAmount)
        setEnteredExpense("");
        setEnteredClassification("");
        setEnteredDate("");
        setEnteredAmount("");

    }

    const expenseChangeHandler = (event) => {
        setEnteredExpense(event.target.value)
    }
    const classificationChangeHandler = (event) => {
        setEnteredClassification(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    return (

        <form onSubmit={addExpenseHandler}>
            <h1>Add Expense</h1>
            <label htmlFor="expense-name">Expense Name</label>
            <input id="expense-name" type="text" onChange={expenseChangeHandler} />

            <label htmlFor="classification">Classification</label>
            <input id="classification" type="text" onChange={classificationChangeHandler} />

            <label htmlFor="date">Date</label>
            <input id="date" type="date" onChange={dateChangeHandler} />

            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" onChange={amountChangeHandler} />

            <Button type="submit" >submit</Button>
        </form>

    )
}

export default AddExpense