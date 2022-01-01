import React from "react";

const MovieSearchResult = (props) => {
    return (
        <div className='search-result' onClick={props.click}>
            <img src={props.img} alt={props.alt} />
            <span>{props.title + ' ' + props.year}</span>
        </div>
    );
}

export default MovieSearchResult;