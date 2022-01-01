import React, { useContext, useEffect } from "react";
import { Contexts } from './../../contexts/Context';

const BudgetData = () => {

    const { budget, setBudget, totalIncome, totalExpence } = useContext(Contexts)

    useEffect(() => {
        
        setBudget(totalIncome - totalExpence)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalIncome, totalExpence])


    return (
        <div className='budget-data'>
            <h2>Budget : {budget}</h2>
            <div>
                <h4>Income :
                    <span className='income'> {totalIncome}</span>
                </h4>
                <h4>Expence :
                    <span className='expence'> {totalExpence}</span>
                </h4>
            </div>
        </div>
    );
}

export default BudgetData;