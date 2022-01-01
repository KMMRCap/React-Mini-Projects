import React, { useState } from "react";
import MovieSearchResult from './MovieSearchResult';
import MovieSearchPreview from './MovieSearchPreview';
import { v4 as uuid } from "uuid";

const MovieApp = () => {

    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])
    const [poster, setPoster] = useState('https://mobileimages.lowes.com/marketingimages/985580d5-865e-45e7-9b08-0e9ca0b31bea/in-small-space-balcony-garden-102804295-10.jpg?scl=1&fmt=webp')
    const [title, setTitle] = useState('Not Chosen Yet')
    const [type, setType] = useState('Undefined')
    const [year, setYear] = useState('Undefined')

    const handleSearch = async (value) => {
        value.preventDefault()
        if (searchValue.length > 0) {
            const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=e64b3825`)
            const res = await response.json()
            setResults([...res.Search])
        }
    }

    const handleSetPreview = (item) => {
        setPoster(item.Poster)
        setTitle(item.Title)
        setType(item.Type)
        setYear(item.Year)
    }

    return (
        <main className='movie-app'>
            <MovieSearchPreview
                poster={poster}
                alt={title + ' ' + year}
                title={title}
                type={type}
                year={year} />
            <div className='search-box'>
                <form onSubmit={(e) => handleSearch(e)}>
                    <input
                        type='text'
                        placeholder='Write the movie name here ...'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />
                    <input type='submit' value='Search' />
                </form>
                <div className={results.length > 0 ? "result-box" : null}>
                    {results.map((item) => (
                        <MovieSearchResult
                            title={item.Title}
                            year={item.Year}
                            img={item.Poster}
                            alt={item.Title}
                            key={uuid()}
                            click={() => handleSetPreview(item)} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default MovieApp;