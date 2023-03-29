import React from 'react';
import Extra from './Extra';
export default function MovieLists({movies}){
    return (
        <>
        <div id="Moviecard">
        {movies?.map((movie, index) =>
        <Extra id={movie.imdbID}/>
        )}
        </div>

        </>
    )

};
