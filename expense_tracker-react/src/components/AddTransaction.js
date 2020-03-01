import React, { useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id:  Math.floor(Math.random() * 1000000000), // susbtituir esta lógica por um RANGE
            text, //text: text
            amount: +amount // sinal de + foi inserido para trabsformar o valor em um Number, senão receberiamos um erro 'TypeError: amounts.reduce(...).toFixed is not a function'
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Expense title</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction title..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative: expense, positive: income)
                    </label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."></input>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
