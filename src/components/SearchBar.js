import React from 'react';

const SearchBar = ({ update }) =>
    <div className="schedule-search">
        <input
            type="text"
            className="schedule-search-input"
            placeholder="search for a team"
            style={{ textAlign: "center" }}
            onChange={update}
        ></input>
    </div>

export default SearchBar;