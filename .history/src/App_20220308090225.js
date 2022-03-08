import React, { useEffect, useState } from 'react'
import './index.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=610896b9'

const movie1 = {
    "Title": "The Fast and the Furious",
    "Year": "2001",
    "imdbID": "tt0232500",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Fast and furious');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value=""
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={() => {}}
                />
            </div>

            {
                
            }

            <div className="container" >
                <MovieCard movie1={movies[0]} />
            </div>
        </div>
    )
}

export default App