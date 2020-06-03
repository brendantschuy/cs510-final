import React, { useEffect, useCallback, useState } from 'react';
import TeamSelect from './TeamSelect';
import TeamPanel from './TeamPanel';
import ReturnToTopButton from './ReturnToTopButton';
import Spinner from 'react-bootstrap/Spinner'

import '../styles/teams.css';

const TeamsPage = () => {

    const [data, setData] = useState([]);
    const [sortDirection, setSortDirection] = useState("A-Z");
    const [loading, setLoading] = useState(true);

    const year = 2019;

    const sortDirections = [
        "A-Z",
        "Z-A",
        "A-Z by Conference",
        "Z-A by Conference"
    ];

    const conferences = [
        "(none)",
        "ACC",
        "American Athletic",
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

    const fetchData = useCallback(async () => {
        const url = `https://api.collegefootballdata.com/teams/fbs?year=${year}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res = res.map(team => {
                    return { ...team, highlight: true };
                });
                setData(res);
                setLoading(false);
                console.log(res);
            });
    }, []); //use empty array to avoid infinite loop

    const sortDisplay = ({ target: { value: sort } }) => {
        let sortedData;
        if (sort == "A-Z") {
            sortedData = data
                .sort((a, b) => {
                    return a.abbreviation <= b.abbreviation ? -1 : 1;
                });
        }
        else if (sort == "Z-A") {
            sortedData = data
                .sort((a, b) => {
                    return a.abbreviation >= b.abbreviation ? -1 : 1;
                });
        }
        else if (sort == "A-Z by Conference") {
            sortedData = data
                .sort((a, b) => {
                    return a.conference <= b.conference ? -1 : 1;
                });
        }
        else if (sort == "Z-A by Conference") {
            sortedData = data
                .sort((a, b) => {
                    return a.conference >= b.conference ? -1 : 1;
                });
        }
        setData(sortedData);
        setSortDirection(sort);
    }

    const highlightConferences = ({ target: { value: conf } }) => {
        console.log("conf = ", conf);
        const highlightedData = data;

        if (conf == "(none)") {
            highlightedData.forEach(team => {
                team.highlight = true;
            })
        }
        else {
            highlightedData.forEach(team => {
                team.highlight = team.conference == conf;
            });
        }

        setData(highlightedData);
        setSortDirection({});
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="teams-container">
            <div className="teams-header">
                <span style={{ float: "left" }}>Highlight:
                    <TeamSelect opts={conferences} onSelect={highlightConferences} />
                </span>
                <span style={{ float: "right" }}>Sort by:
                    <TeamSelect opts={sortDirections} onSelect={sortDisplay} />
                </span>
            </div>
            <div className="teams-mosaic">
                {loading && <Spinner animation="border" role="status"/>}
                {data.map(team => {
                    return <TeamPanel props={team} />
                })}
            </div>
            <ReturnToTopButton />
        </div>
    );
};

TeamsPage.propTypes = {};

export default TeamsPage;