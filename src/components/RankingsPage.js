import React, { useState, useEffect, useCallback } from 'react';

const rankingsUrl = "https://api.collegefootballdata.com/rankings?year=2019&seasonType=regular";

const RankingsPage = () => {

    const [data, setData] = useState();

    const fetchData = useCallback(async () => {
        let response = await fetch(rankingsUrl);
        response = await response.json();
        setData(response);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <div>data: {JSON.stringify(data)}</div>
        </div>
    )
}

export default RankingsPage;