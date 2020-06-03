import React, { useEffect } from 'react';

const Conference = data => {

    const conferences = [
        {
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
        }
    ]

    const url = `https://api.collegefootballdata.com/teams/fbs?year=${year}`;

    const fetchData = useCallback(async () => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(conferences);
                // conferences.forEach(
                //     conf => console.log(conferences.keys());
            });
    }, []);


    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div>
            
        </div>
    );
};


export default Conference;