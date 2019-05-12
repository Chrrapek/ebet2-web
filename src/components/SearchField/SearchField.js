import React from 'react';

const SearchField = ({searchChange}) => {
    return (
        <div className="center tm1">
            <input
                type='search'
                placeholder='Filtruj ligi'
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchField;
