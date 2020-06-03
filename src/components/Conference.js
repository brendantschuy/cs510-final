import React, { useEffect } from 'react';

const Conference = ({ data }) => {
    return (
        <div className="conference-data">
            <span>{data[0]}</span>
            <ul className="conference-data-list">
                {data[1].map(team =>
                    <li>
                    <a href={`/teams/${team.replace(" ", "%20")}`} className="link-no-decoration">{team}</a></li>
                )}
            </ul>
        </div>
    );
};


export default Conference;