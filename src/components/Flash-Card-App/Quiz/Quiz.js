import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { Contexts } from '../../../contexts/Context';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import FlashCard from "./FlashCard";
import $ from 'jquery'

const Quiz = () => {

    const { questions, setQuestions } = useContext(Contexts)

    const [flip, setFlip] = useState(false)
    const [count, setCount] = useState(1)

    const number = useRef(0);

    const handlePrevSlide = () => {
        if (questions.length > 0) {
            let timer = 0;
            if (count > 1) {
                if (flip) {
                    setFlip(false)
                    timer = 500
                } else {
                    timer = 0
                }
                setTimeout(() => {
                    number.current = number.current + 120;
                    $('.card').css('transform', `translateX(${number.current}%)`)
                    setCount(count - 1)
                }, timer);
            }
        }
    }

    const handleNextSlide = () => {
        if (questions.length > 0) {
            let timer = 0;
            if (count < questions.length) {
                if (flip) {
                    setFlip(false)
                    timer = 500
                } else {
                    timer = 0
                }
                setTimeout(() => {
                    number.current = number.current - 120;
                    $('.card').css('transform', `translateX(${number.current}%)`)
                    setCount(count + 1)
                }, timer);
            }
        }
    }

    useEffect(() => {
        let savedQuestions = JSON.parse(localStorage.getItem('questions'));
        if (savedQuestions) {
            setQuestions(savedQuestions)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className='quiz-cont'>
            <div className={questions.length === 0 ? 'slider not-active' : 'slider'}>
                <button disabled={questions.length === 0 ? true : false} >
                    <FaChevronLeft onClick={handlePrevSlide} />
                </button>
                <div className='carousel'>
                    <div className="flash-cards">
                        {questions.length === 0 ?
                            <div className="no-question">
                                <h3>There is no question</h3>
                                <span>Please start adding questions from
                                    <Link to='/flash-card-app/add-question'> Here</Link>
                                </span>
                            </div>
                            :
                            questions.map((item, index) => (
                                <FlashCard
                                    index={index}
                                    key={item.id}
                                    question={item.questionValue}
                                    answer={item.answerValue}
                                    flip={flip}
                                    click={() => setFlip(!flip)} />
                            ))}
                    </div>
                </div>
                <button disabled={questions.length === 0 ? true : false}>
                    <FaChevronRight onClick={handleNextSlide} />
                </button>
            </div>
        </main>
    );
}

export default Quiz;