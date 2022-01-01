import React from "react";
import { FaTrash } from 'react-icons/fa'

const BudgetItem = (props) => {
    return (
        <div className='budget-item'>
            <FaTrash color='black' onClick={props.click} />
            <span>{props.text + ' : ' + props.amount}</span>
        </div>
    );
}

export default BudgetItem;