import React from 'react'

const MovieCard = () => {
    return (
        <div className="movie" >
            <div>
                <p>{movie1.Year}</p>
            </div>
                    <div>
                        <img src={movie1.Poster} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <p>{movie1.Title}</p>
                    </div>
                </div>
    )
}