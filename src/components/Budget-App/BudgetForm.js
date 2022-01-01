import React, { useContext, useState } from "react";
import { Contexts } from './../../contexts/Context';
import $ from 'jquery';
import { v4 as uuid } from 'uuid'

const BudgetForm = () => {

    const { income, setIncome, expence, setExpence,
        totalIncome, setTotalIncome, totalExpence, setTotalExpence } = useContext(Contexts);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddBudget = () => {
        const budgetType = $('#budgetType').val()

        if (text && amount && amount >= 0) {
            let newBudget = { text, amount: parseInt(amount), id: uuid() }

            if (budgetType === 'income') {
                setIncome([...income, newBudget]);
                setTotalIncome(totalIncome + newBudget.amount)
            }
            else {
                setExpence([...expence, newBudget])
                setTotalExpence(totalExpence + newBudget.amount)
            }

            setText('')
            setAmount('')
        }
    }

    return (

        <div className='budget-input'>
            <label htmlFor='budgetType'>Choose Type :</label>
            <select name="budgetType" id="budgetType">
                <option value="income">Income</option>
                <option value="expence">Expence</option>
            </select>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Description'
            />
            <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min='0'
                placeholder='Amount'
            />
            <button onClick={handleAddBudget}>Add</button>
        </div>
    );
}

export default BudgetForm;