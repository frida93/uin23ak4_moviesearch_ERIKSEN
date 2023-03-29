import React from 'react';
export default function Searchresult({searchValue, setSearchValue}) {
    function handleChange(event) {
        event.preventDefault();
        setSearchValue(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div className="search">
        <form>
            <input value={searchValue} onChange={handleChange} placeholder='Type some movie'></input>
        </form>
        </div>
    )
}
