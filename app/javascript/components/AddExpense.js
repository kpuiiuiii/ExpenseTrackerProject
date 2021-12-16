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

            {/* <div class="title">Add expense</div>
            <div className="input-container ic1">
                <input id="expense-name" type="text" placeholder=" " onChange={expenseChangeHandler} />
                <div className="cut" />
                <label className="placeholder">Expense Name</label>
            </div>

            <div className="input-container ic2">
                <input id="classification" type="text" placeholder=" " onChange={classificationChangeHandler} />
                <div className="cut" />
                <label className="placeholder">Classification</label>
            </div>
            <div className="input-container ic2">
                <input id="date" type="date" placeholder=" " onChange={dateChangeHandler} />
                <div className="cut cut-short" />
                <label className="placeholder">Date</label>
            </div>
            <div className="input-container ic2">
                <input id="amount" type="number" placeholder=" " onChange={amountChangeHandler} />
                <div className="cut cut-short" />
                <label className="placeholder">Amount</label>
            </div> */}
            <Button type="submit" >submit</Button>
        </form>

    )
}

export default AddExpense