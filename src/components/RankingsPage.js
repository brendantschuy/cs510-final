import React, { useState, useEffect, useCallback } from 'react';
import '../rankings.css';

/* rank, school [name], conference, firstPlaceVotes, points */

const rankingsUrl = "https://api.collegefootballdata.com/rankings?year=2019&seasonType=regular";

const RankingsPage = () => {

    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [currentYear, setCurrentYear] = useState(2019);
    const [currentWeek, setCurrentWeek] = useState(15);
    const [pollType, setPollType] = useState(1);
    const [update, setUpdate] = useState([]);

    const fetchData = useCallback(async (poll) => {
        const url = `https://api.collegefootballdata.com/rankings?year=${currentYear}&seasonType=regular`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
                selectTime();
                setDisplayData(res[currentWeek].polls[poll].ranks);
            });
    }, []); //use empty array to avoid infinite loop

    const togglePoll = () => {
        /* 1 = AP, 2 = Coaches */
        setPollType(pollType == 1 ? 2 : 1);
        console.log(`updated polltype to: ${pollType}`);
    }

    const selectTime = (year = 2019, week = 15) => {
        setCurrentYear(year);
    }

    useEffect(() => {
        fetchData(pollType);
    }, [currentWeek, currentYear, pollType]);

    return (
        <div className="rankings-container">
            <div className="rankings-poll-toggle">
                <button className="rankings-poll-toggle-button" onClick={() => togglePoll()}>AP</button>
                <button className="rankings-poll-toggle-button" onClick={() => togglePoll()}>Coaches</button>
            </div>
            <div className="rankings-display">
                <ol>
                    {displayData.map(({id, school, firstPlaceVotes, points}) => 
                        <li key={id}>
                            <span className="rankings-text">{school}</span>
                            <span className="rankings-text">{firstPlaceVotes}</span>
                            <span className="rankings-text">{points}</span>
                        </li>)}
                </ol>
            </div>
        </div>
    )
}

export default RankingsPage;