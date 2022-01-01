import React from "react";
import Header from './../common/Header';
import MovieApp from './../components/Movie-App/MovieApp';

const MovieAppLanding = () => {
    return (
        <>
            <Header header='Movie App' />
            <MovieApp />
        </>
    );
}

export default MovieAppLanding;