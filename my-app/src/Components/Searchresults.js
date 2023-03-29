import React from 'react';
export default function Searchresult({searchValue, setSearchValue}) {
    function handleChange(event) {
        event.preventDefault();
        setSearchValue(event.target.value);
    }
    return (
        <div>
        <form>
            <input value={searchValue} onChange={handleChange} placeholder='Søk'></input>
        </form>
        </div>
    )
}
