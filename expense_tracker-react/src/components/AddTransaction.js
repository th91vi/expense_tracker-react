import React, { useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h3>Add new transaction</h3>
            <form >
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
