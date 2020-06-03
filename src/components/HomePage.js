import React, { useEffect, useState } from 'react';

const HomePage = () => {

    const [search, setSearch] = useState();

    const updateSearch = ({ target: { value }}) => {
        
    }

    return <div className="row index-body row-md-5">
        <div className="col-md-4"></div>
        <div className="index-body-center col-md-4">
            <input
                type="text"
                className="index-input"
                placeholder="Search for your favorite team.">
            </input>
            <button>GO</button>
        </div>
        <div className="col-md-4"></div>
    </div>
}

export default HomePage;