import React from "react"
import AddExpense from "./AddExpense"
import TransactionList from "./TransactionList"


class App extends React.Component {
    render() {
        return (
            <div>
                <AddExpense />
                <TransactionList transactions={[]} />

            </div>
        )
    }
}

export default App