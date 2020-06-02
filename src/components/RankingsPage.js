import React, { useState, useEffect, useCallback } from 'react';
import ToggleButton from './ToggleButton';
import Ranking from './Ranking';
import '../styles/rankings.css';

/* rank, school [name], conference, firstPlaceVotes, points */

const RankingsPage = () => {

    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [currentYear, setCurrentYear] = useState(2019);
    const [currentWeek, setCurrentWeek] = useState(15);
    const [pollType, setPollType] = useState(1);

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
        setPollType(pollType === 1 ? 2 : 1);
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
                <ToggleButton text="AP" toggle={togglePoll} isActive={pollType === 1} />
                <ToggleButton text="Coaches" toggle={togglePoll} isActive={pollType === 2} />
            </div>
            <div className="rankings-display">
                <ul className="rankings-list">
                    {displayData.map(school =>
                        <Ranking data={school} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RankingsPage;