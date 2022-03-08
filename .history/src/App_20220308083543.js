import React, { useEffect } from 'react'
import './index.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=610896b9'

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
            </div>
        </div>
    )
}

export default App