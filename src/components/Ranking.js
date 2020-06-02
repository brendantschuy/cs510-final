import React from 'react';

const Ranking = ({ data: { id, rank, school, firstPlaceVotes, points } }) =>
    <li key={id}>
        <span className="rankings-text">{rank}</span>
        <span className="rankings-text">
            <a className="rankings-text-link" href={`/teams/${school.replace(" ", "%20")}`}>
                {school.replace("State", "St.")}
            </a>
        </span>

        <span className="rankings-text">{firstPlaceVotes}</span>
        <span className="rankings-text">{points}</span>
    </li>


export default Ranking;