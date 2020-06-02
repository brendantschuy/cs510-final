import React, { useCallback, useEffect, useState } from 'react';
import '../styles/teams.css';

const ConferencesPage = () => {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const conferences = [
        "American Athletic",
        "ACC",
        "Big 12",
        "Big Ten",
        "Conference USA",
        "FBS Independents",
        "Mid-American",
        "Mountain West",
        "Pac-12",
        "SEC",
        "Sun Belt"
    ];

    const year = 2019;

    const fetchData = useCallback(async () => {
        const url = `https://api.collegefootballdata.com/teams/fbs?year=${year}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
                console.log(res);
            });
    }, []); //use empty array to avoid infinite loop

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="conferences-container">

            Conference Page
        </div>
    );
};


export default ConferencesPage;