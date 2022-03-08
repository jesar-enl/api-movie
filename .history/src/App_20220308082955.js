import React, { useEffect } from 'react'
import './index.css'
import 

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
        <div>
            <h1>App</h1>
        </div>
    )
}

export default App