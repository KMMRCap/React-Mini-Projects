import React, { useContext, useEffect, useState } from "react";
import { Contexts } from '../../../contexts/Context';
import { v4 as uuid } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FlashCardApp = () => {

    const { questions, setQuestions } = useContext(Contexts)

    const [questionValue, setQuestionValue] = useState('')
    const [answerValue, setAnswerValue] = useState('')

    const handleAddQuestion = () => {

        if (questionValue.length > 0 && answerValue.length > 0) {

            const newQuestion = { questionValue, answerValue, id: uuid() }
            setQuestions([...questions, newQuestion])

            toast.success('Question added successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });

            setQuestionValue('')
            setAnswerValue('')
        }
    }

    useEffect(() => {
        let savedQuestions = JSON.parse(localStorage.getItem('questions'));
        if (savedQuestions) {
            setQuestions(savedQuestions)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify(questions))
    }, [questions])

    return (
        <main className='add-question'>
            <p>Number of Questions : {questions.length}</p>
            <div className='question-inputs'>
                <h2>Question</h2>
                <input
                    type='text'
                    placeholder='Write the question here ...'
                    value={questionValue}
                    onChange={(e) => setQuestionValue(e.target.value)} />
                <h2>Answer</h2>
                <input
                    type='text'
                    placeholder='Write the answer here ...'
                    value={answerValue}
                    onChange={(e) => setAnswerValue(e.target.value)} />
                <button onClick={handleAddQuestion}>Add</button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
        </main>
    );
}

export default FlashCardApp;