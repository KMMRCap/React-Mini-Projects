import React from "react";

const MovieSearchPreview = (props) => {
    return (
        <div className='movie-box'>
            <div className='movie'>
                <div className='movie-cover'>
                    <img src={props.poster} alt={props.alt} />
                </div>
                <div className='movie-details'>
                    <h3>{props.title + ' ' + props.year}</h3>
                    <h4>Type : {props.type}</h4>
                </div>
            </div>
        </div>
    );
}

export default MovieSearchPreview;