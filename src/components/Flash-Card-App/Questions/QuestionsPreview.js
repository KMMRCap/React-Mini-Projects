import React, { useContext, useEffect } from "react";
import { Contexts } from '../../../contexts/Context';
import { Link } from 'react-router-dom';
import PreviewCard from "./PreviewCard";
import $ from 'jquery'

const QuestionsPreview = () => {

    const { questions, setQuestions } = useContext(Contexts)

    const handleOpenCard = (index) => {

        const thisBox = `.preview-card:nth-child(${index + 1})`
        
        if ($(thisBox).hasClass('active')) {
            $(thisBox).removeClass('active')
            $('.preview-card .a').slideUp()
        } else {
            $('.preview-card').removeClass('active')
            $(thisBox).addClass('active')
            $('.preview-card .a').slideUp()
            $(`.preview-card:nth-child(${index + 1}) .a`).slideDown()
        }
    }

    const handleDeleteCard = (item) => {
        const filteredCards = questions.filter((card) => card.id !== item.id)
        setQuestions(filteredCards)
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
        <main className="questions">
            {questions.length === 0 ?
                <div className="empty">
                    <h3>There is no question</h3>
                    <span>Please start adding questions from
                        <Link to='/flash-card-app/add-question'> Here</Link>
                    </span>
                </div>
                :
                <div className="not-empty">
                    <span>Click on each card to see its answer</span>
                    <div className="cards-cont">
                        {questions.map((item, index) => (
                            <PreviewCard
                                key={item.id}
                                question={item.questionValue}
                                answer={item.answerValue}
                                index={index}
                                click={() => handleOpenCard(index)}
                                delete={() => handleDeleteCard(item)} />
                        ))}
                    </div>
                </div>
            }
        </main>
    );
}

export default QuestionsPreview;