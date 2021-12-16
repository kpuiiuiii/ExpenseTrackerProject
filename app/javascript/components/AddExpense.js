import React, { useState } from "react";
import "./AddExpense.css"
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
            <div className="title">Add expense</div>
            <div className="input-container ic1">
                <input
                    id="expense-name"
                    type="text"
                    placeholder=" "
                    value={enteredExpense}
                    onChange={expenseChangeHandler} />
                <div className="cut"></div>
                <label className="placeholder">Expense Name</label>
            </div>
            <div className="input-container ic2">
                <input id="classification"
                    type="text"
                    placeholder=" "
                    value={enteredClassification}
                    onChange={classificationChangeHandler} />
                <div className="cut"></div>
                <label className="placeholder">Classification</label>
            </div>
            <div className="input-container ic2">
                <input id="date"
                    type="date"
                    placeholder=" "
                    value={enteredDate}
                    onChange={dateChangeHandler} />
                <div className="cut cut-short"></div>
                <label className="placeholder">Date</label>
            </div>
            <div className="input-container ic2">
                <input id="amount"
                    type="number"
                    placeholder=" "
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
                <div className="cut cut-short"></div>
                <label className="placeholder">Amount</label>
            </div>
            <Button type="submit" >submit</Button>
        </form>


    )
}

export default AddExpense