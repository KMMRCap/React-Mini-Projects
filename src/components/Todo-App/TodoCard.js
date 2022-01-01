import React from "react";
import { ImCross } from 'react-icons/im'

const TodoCard = (props) => {
    return (
        <div className='todo-card'>
            <span className={props.checked ? 'checked' : null}>{props.text}</span>
            <div>
                <button className='check-todo' onClick={props.setCheck}>Complete</button>
                <button className='delete-todo' onClick={props.delete}>
                    <ImCross color='white' />
                </button>
            </div>
        </div>
    );
}

export default TodoCard;