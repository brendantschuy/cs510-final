import React, { useCallback, useEffect, useState } from 'react';
import GameEvent from './GameEvent';
import Spinner from 'react-bootstrap/Spinner'

import '../styles/schedule.css';

const SchedulePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        const url = `https://api.collegefootballdata.com/games?year=2020&week=1&seasonType=regular`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res.map(({ home_team, away_team, start_date, venue }) => {
                    const gameObj = { home_team, away_team, start_date, venue };
                    setData(data => [...data, gameObj]);
                })
                setLoading(false);
                console.log(res);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    console.log("data  ", data);

    return (
        <div className="schedule-container">
            Upcoming games:
            {loading && <Spinner animation="border" role="status"/>}
            {data.map(game => <GameEvent data={game} />)}
        </div>
    );
};


export default SchedulePage;