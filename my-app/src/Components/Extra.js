import React, { useEffect, useState } from "react";

export default function Extra({id}) {
    const [movie, setMovie] = useState("");
    const getRequests = async () => {
        const URL = `http://www.omdbapi.com/?apikey=ad34c8a6&i=${id}`;
        const response = await fetch(URL);
        const responseJson = await response.json();
        console.log(responseJson);
        setMovie(responseJson);
        };
    useEffect(() => {
        getRequests();
    console.log(movie);

    }, [id])

    return (
        <>
        <div className="Movies">
            <h3>{movie.Title}</h3>
            <br />
            <img src={movie.Poster}></img>
            <br />
            
        </div>
        </>
    )
}