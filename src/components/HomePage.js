import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from './SearchBar';

const HomePage = () => {

    const [search, setSearch] = useState();
    const [redir, setRedir] = useState();

    const updateSearch = ({ target: { value } }) => {
        setSearch(value);
    }

    const readyRedirect = () => {
        setRedir(true);
    }

    return <div className="row index-body row-md-5">
        <div className="col-md-4"></div>
        <div className="index-body-center col-md-4">
            <SearchBar update={updateSearch} />
            {redir && <Redirect to={`/teams/${search}`} />}
            <button onClick={readyRedirect}>GO</button>
        </div>
        <div className="col-md-4"></div>
    </div>
}

export default HomePage;