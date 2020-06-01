import React, { useState, useEffect, useCallback } from 'react';

/* rank, school [name], conference, firstPlaceVotes, points */

const rankingsUrl = "https://api.collegefootballdata.com/rankings?year=2019&seasonType=regular";

const RankingsPage = () => {

    const [data, setData] = useState([]);
    let [annualData, setAnnualData] = useState([]);

    const fetchData = useCallback(async () => {
        fetch(rankingsUrl)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
                selectWeek(res);
            });
    }, []);

    const selectYear = (res, year = 2020) => 
        `https://api.collegefootballdata.com/rankings?year=${year}&seasonType=regular`;

    const selectWeek = (res, week = 15) => {
        setAnnualData(res[week].polls[1].ranks);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <ol>
                {annualData.map(item => <li key={item.id}>{item.school}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default RankingsPage;