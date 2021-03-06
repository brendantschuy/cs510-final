import React, { useCallback, useEffect, useRef, useState } from 'react';
import GameEvent from './GameEvent';
import ReturnToTopButton from './ReturnToTopButton';
import SearchBar from './SearchBar';
import Spinner from 'react-bootstrap/Spinner'

import '../styles/schedule.css';

const SchedulePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSearched,] = useState(false);
    const [searchState, setSearchState] = useState("");

    const searchRef = useRef(null);

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
    }, [isSearched]);

    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    const executeScroll = () => scrollToRef(searchRef);
    const updateSearchState = ({target: {value: query}}) => {
        console.log("seach query = ", query);
        setSearchState(query.toLowerCase());
    };
    

    return (
        <div className="schedule-container">
            Upcoming games:
            <SearchBar update={updateSearchState} />
            <button className="schedule-search-button" onClick={executeScroll}>Find</button>
            {loading && <Spinner animation="border" role="status" />}
            {data.map(game =>
                <GameEvent
                    data={game}
                    ref={(game.home_team.toLowerCase() === searchState || game.away_team.toLowerCase() === searchState)
                         ? searchRef 
                         : null}
                />
            )}
            <ReturnToTopButton />
        </div>
    );
};


export default SchedulePage;