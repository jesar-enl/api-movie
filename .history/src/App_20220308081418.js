import React, { useEffect } from 'react'

const API_URL = 'http://www.omdbapi.com?apikey=610896b9'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const 
    }

    useEffect(() => {

    }, []);

    return (
        <div>
            <h1>App</h1>
        </div>
    )
}

export default App