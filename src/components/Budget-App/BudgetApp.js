import React, { useContext, useEffect } from "react";
import BudgetForm from './BudgetForm';
import BudgetData from './BudgetData';
import BudgetInformation from "./BudgetInformation";
import { Contexts } from './../../contexts/Context';

const BudgetApp = () => {

    const { income, expence, setIncome, setExpence,
        setTotalIncome, setTotalExpence } = useContext(Contexts)

    useEffect(() => {
        let savedIncome = JSON.parse(localStorage.getItem('income'));
        if (savedIncome) {
            setIncome(savedIncome)
            let inc = 0;
            savedIncome.forEach((item) => {
                inc = inc + item.amount
            })
            setTotalIncome(inc)
        }

        let savedExpence = JSON.parse(localStorage.getItem('expence'));
        if (savedExpence) {
            setExpence(savedExpence)
            let exp = 0;
            savedExpence.forEach((item) => {
                exp = exp + item.amount
            })
            setTotalExpence(exp)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        localStorage.setItem('income', JSON.stringify(income))
    }, [income])

    useEffect(() => {
        localStorage.setItem('expence', JSON.stringify(expence))
    }, [expence])


    return (
        <main className='budget-app'>
            <BudgetData />
            <div className='budget-form'>
                <BudgetForm />
                <BudgetInformation />
            </div>
        </main>
    );
}

export default BudgetApp;