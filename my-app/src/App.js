import { React, useState, useEffect } from 'react';
import './App.css';
import Moviecard from './Components/Moviecard';
import Searchresult from './Components/Searchresults';

function App() {
    const [movies, setMovies] = useState([0]);
    const [searchValue, setSearchValue] = useState("James Bond");

    const getMovieRequest = async () => {
    const URL = `http://www.omdbapi.com/?apikey=83cfc641&s=${searchValue}`;
    const response = await fetch(URL);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
    };
    
    useEffect(() => {
        getMovieRequest();
    }, [searchValue] );


   return (
    <>
    <Searchresult searchValue={searchValue} setSearchValue={setSearchValue}/>
    <Moviecard movies={movies} />
    </>
   )
}


export default App;

//Kilde: Felleskoding i forelesning/Ann Charlotts kode fra github.

