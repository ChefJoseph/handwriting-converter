import React from "react";

function SearchBar({search, setSearch}){

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };

    return(
    <form action="/" method="get" className="live-search-form"
    >
        <input
        type="text"
        id="header-search"
        placeholder="Search"
        value= {search}
        onChange = {handleChange}
        className="live-search-form-field"
        />
           
    </form>
    )
}

export default SearchBar