import React from 'react';
import Moviecard from './Moviecard';
export default function MovieList({movies}){
    return (
        <>
        <div id="MovieList">
        {movies?.map((movie, index) =>
        <Moviecard id={movie.imdbID}/>
        )}
        </div>

        </>
    )

};
