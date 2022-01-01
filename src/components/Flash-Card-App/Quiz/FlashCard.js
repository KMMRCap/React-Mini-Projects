import React from "react";

const FlashCard = (props) => {
    return (
        <div className={props.flip ? 'card active' : 'card'} onClick={props.click}>
            <div className='front'>
                <h3>Question No. {props.index+1}:</h3>
                <span>{props.question}</span>
            </div>
            <div className='back'>
                <h3>Answer :</h3>
                <span>{props.answer}</span>
            </div>
        </div>
    );
}

export default FlashCard;