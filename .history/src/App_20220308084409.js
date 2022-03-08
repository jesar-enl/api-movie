import React, { useEffect } from 'react'
import './index.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=610896b9'

const movie1 = {
    "Title": "The Fast and the Furious",
    "Year": "2001",
    "imdbID": "tt0232500",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
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

            <div className="container" >
                <div className="movie" >
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App