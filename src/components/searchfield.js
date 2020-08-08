import React from 'react';

import '../styling/search-field.css';

const SearchField = ({ placeholder, handleChange }) => {
    return (
        <div className="search-div"> 
            <input type="search" placeholder={placeholder} onChange={handleChange} className="search"/>
        </div>
    )
};

export default SearchField