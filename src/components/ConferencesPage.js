import React, { useCallback, useEffect, useState } from 'react';
import Conference from './Conference';
import '../styles/teams.css';
import ReturnToTopButton from './ReturnToTopButton';

const ConferencesPage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const conferences = {
        "American Athletic": [],
        "ACC": [],
        "Big 12": [],
        "Big Ten": [],
        "Conference USA": [],
        "FBS Independents": [],
        "Mid-American": [],
        "Mountain West": [],
        "Pac-12": [],
        "SEC": [],
        "Sun Belt": []
    };

    const year = 2019;

    const fetchData = useCallback(async () => {
        const url = `https://api.collegefootballdata.com/teams/fbs?year=${year}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res.forEach(team => {
                    for (const conf in conferences) {
                        if (conf === team.conference) {
                            conferences[conf] = [...conferences[conf], team.school];
                        }
                    }
                });
                setData(conferences);
                setLoading(false);
            });
    }, []); //use empty array to avoid infinite loop

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="conferences-container">
            {Object.entries(data).map(conf =>  <Conference data={conf} />)}
            <ReturnToTopButton />
        </div>
    );
};


export default ConferencesPage;