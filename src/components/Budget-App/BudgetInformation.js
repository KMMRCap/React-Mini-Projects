import React, { useContext } from "react";
import BudgetItem from "./BudgetItem";
import { Contexts } from './../../contexts/Context';
import { v4 as uuidv4 } from 'uuid';

const BudgetInformation = () => {

    const { income, setIncome, expence, setExpence,
        totalIncome, setTotalIncome,
        totalExpence, setTotalExpence } = useContext(Contexts)

    const handleDeleteIncome = (item) => {
        const newIncomes = income.filter((e) => e.id !== item.id);
        setIncome(newIncomes);
        setTotalIncome(totalIncome - item.amount)
    }

    const handleDeleteExpence = (item) => {
        const newExpences = expence.filter((e) => e.id !== item.id);
        setExpence(newExpences)
        setTotalExpence(totalExpence - item.amount)
    }

    return (
        <div className='budget-information'>
            <div className='budget-column'>Incomes
                {income.map((item) => (
                    <BudgetItem click={() => handleDeleteIncome(item)} key={uuidv4()} text={item.text} amount={item.amount} />
                ))}
            </div>
            <div className='budget-column'>Expences
                {expence.map((item) => (
                    <BudgetItem click={() => handleDeleteExpence(item)} key={uuidv4()} text={item.text} amount={item.amount} />
                ))}
            </div>
        </div>
    );
}

export default BudgetInformation;