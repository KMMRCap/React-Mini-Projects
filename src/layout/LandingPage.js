import React from "react";
import { Link } from "react-router-dom";
import Header from './../common/Header';

const LandingPage = () => {
    return (
        <>
            <Header header='Landing Page' nolink />
            <main className='landing'>
                <Link to='/todo-app'>Todo App</Link>
                <Link to='/movie-app'>Movie App</Link>
                <Link to='/budget-app'>Budget App</Link>
                <Link to='/flash-card-app/add-question'>Flash Card App</Link>
                <Link to='/factor-app'>Factor App</Link>
            </main>
        </>
    );
}

export default LandingPage;