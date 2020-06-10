import React from 'react'

export const AddTransaction = () => {
    return (
        <>
        <h3>Add new transaction</h3>
        <form className="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." />
          </div>
          <div className="htmlForm-control">
            <label HtmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
        </>
    )
}