import React from "react";
import classes from "./TransactionList.module.css"
import Card from "./Card";

const TransactionList = props => {
    return (
        <Card className={classes.transactions}>

            <ul>
                {props.transactions.map(transaction => (

                    <li>
                        {transaction.id}
                        {transaction.name}
                        {transaction.classification}
                        {transaction.date}
                        {transaction.amount}
                    </li>))}

            </ul>
        </Card>

    )
}

export default TransactionList;