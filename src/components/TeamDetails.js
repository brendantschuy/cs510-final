import React, { useCallback, useEffect, useState } from 'react';

const TeamDetails = ({ match, location }) => {

    const { params: { teamName } } = match;
    
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState([]);

    const year = 2019;

    const placeHolder = {
        abbreviation: "AFA",
        alt_color: "#ffffff",
        alt_name1: null,
        alt_name2: "AFA",
        alt_name3: "Air Force",
        color: "#004a7b",
        conference: "Mountain West",
        division: "Mountain",
        highlight: true,
        id: 2005,
        logos: ["http://a.espncdn.com/i/teamlogos/ncaa/500/2005.png", "http://a.espncdn.com/i/teamlogos/ncaa/500-dark/2005.png"],
        mascot: "Falcons",
        school: "Air Force",
    };

    const { abbreviation, alt_color, alt_name2, color, conference, division, logos, mascot, school } = placeHolder;
    const logo1 = logos[0];
    const logo2 = logos[1];

    const fetchData = useCallback(async () => {
        const url = `https://api.collegefootballdata.com/records?year=${year}&team=${teamName.replace(" ","%20")}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
                setDisplay(
                    [res[0].total.wins,
                    res[0].total.losses,
                    res[0].team,
                    res[0].conference]
                );
            });
    }, []); //use empty array to avoid infinite loop

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="details-container">
            {/* <img className="details-logo" src={logo1}></img> */}
            <p class="details-title">
                <span className="details-heading">{display[2]}</span>
                {/* <span className="details-sub-heading">{mascot}</span> */}
            </p>
            <p class="details-title">
                <span className="details-sub-heading">{display[3]}</span>
            </p>
            <p class="details-title">
                <span className="details-sub-heading">{year} record: {display[0]} - {display[1]}</span>
            </p>
        </div>
    );
};

export default TeamDetails;