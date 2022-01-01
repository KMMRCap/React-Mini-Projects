import React from "react";
import { FaChevronDown } from 'react-icons/fa'

const PreviewCard = (props) => {
    return (
        <div className="preview-card" onClick={props.click}>
            <div className="q-box">
                <div className="q">
                    <h3>Question No. {props.index}</h3>
                    <p>{props.question}</p>
                </div>
                <div className="a">
                    <h3>Answer :</h3>
                    <p>{props.answer}</p>
                </div>
            </div>
            <div className="n-box">
                <FaChevronDown />
                <button onClick={props.delete}>Delete</button>
            </div>
        </div>
    );
}

export default PreviewCard;