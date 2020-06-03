import React, { useCallback, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import '../styles/teams.css';

const TeamDetails = ({ colorPalette, match }) => {

    const { params: { teamName } } = match;

    const [data, setData] = useState([]);
    const [display, setDisplay] = useState([]);
    const [loading, setLoading] = useState(true);

    const year = 2019;

    const fetchData = useCallback(async () => {
        const url1 = `https://api.collegefootballdata.com/records?year=${year}&team=${teamName.replace(" ", "%20")}`;
        const url2 = `https://api.collegefootballdata.com/teams/fbs?year=${year}`;

        fetch(url1)
            .then(res => res.json())
            .then(res => {
                setDisplay(display => ([
                    res[0].total.wins,
                    res[0].total.losses,
                    res[0].team,
                    res[0].conference,
                    ...display
                ]));
                setLoading(false);

            });
        fetch(url2)
            .then(res => res.json())
            .then(res => {
                const thisSchool = res.find(({ school }) =>
                    school == teamName
                );
                const { mascot, color, alt_color } = thisSchool;
                const logoUrl = thisSchool.logos[0];
                colorPalette([color, alt_color]);
                setData(data => ([...data, mascot, logoUrl]));
                setDisplay(display => ([...display, mascot, logoUrl]));
            })
    }, []); //use empty array to avoid infinite loop

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="details-container">
            {loading && <Spinner animation="border" role="status" />}
            <img className="details-logo" src={display[5]}></img>
            <p className="details-title">
                <span className="details-heading">{display[2]}</span>
                <span className="details-sub-heading">{display[4]}</span>
            </p>
            <p className="details-title">
                <span className="details-sub-heading">{display[3]}</span>
            </p>
            <p className="details-title">
                <span className="details-sub-heading">{year} record: {display[0]} - {display[1]}</span>
            </p>
        </div>
    );
};

export default TeamDetails;