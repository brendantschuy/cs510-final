import React from 'react';

const SearchBar = ({ update }) =>
    <div className="schedule-search">
        <input
            type="text"
            className="schedule-search-input"
            placeholder="enter team name"
            style={{ textAlign: "center" }}
            onChange={update}
        ></input>
    </div>

export default SearchBar;