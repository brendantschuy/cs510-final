import React, { useEffect, useCallback, useState } from 'react';
import SortSelect from './SortSelect';
import '../teams.css';

const TeamsPage = () => {

    const [data, setData] = useState([]);
    const [sortDirection, setSortDirection] = useState(0);

    const year = 2020;

    const sortDirections = [
        "A-Z",
        "Z-A",
        "Conference",
        "State"
    ]

    /* Ensures primary & secondary colors are distinct enough to be discernible.
     * Hex math is not fun in javascript.... */
    const colorDiff = (color1, color2) => {
        color1 = color1 ? parseInt(color1.substr(1), 16) : color1;
        color2 = color2 ? parseInt(color2.substr(1), 16) : color2;

        let c1bb = color1 % 256;
        let c1gg = (color1 - c1bb) % 65536;
        let c1rr = color1 - c1gg - c1bb;

        c1gg /= 256;
        c1rr /= 65536;

        let c2bb = color2 % 256;
        let c2gg = (color2 - c2bb) % 65536;
        let c2rr = color2 - c2gg - c2bb;

        c2gg /= 256;
        c2rr /= 65536;

        const euclidean = Math.sqrt(Math.pow(c1bb - c2bb, 2) + Math.pow(c1gg - c2gg, 2) + Math.pow(c1rr - c2rr, 2));
        return euclidean > 120;
    }

    const fetchData = useCallback(async () => {
        const url = `https://api.collegefootballdata.com/teams/fbs?year=${year}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
            });
    }, []); //use empty array to avoid infinite loop

    const sortDisplay = () => {
        const sortedData = data.reverse();
        setData(sortedData);
        setSortDirection(1);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="teams-container">
            <div className="teams-header">
                <span style={{float: "left"}}>Teams ordered by: {sortDirection}</span>
                <span style={{float: "right"}}>Sort by: 
                    <SortSelect opts={sortDirections} onSelect={sortDisplay}/>
                </span>
            </div>
            <div className="teams-mosaic">
                {data.map(({ id, abbreviation, mascot, color, alt_color }) =>
                    <div
                        key={id}
                        className="team-square"
                        style={{
                            color: colorDiff(alt_color, color) ? `${alt_color}` : "#FFFFFF",
                            backgroundColor: `${color}FF`,
                            borderColor: `${alt_color}`,
                        }}
                    >
                        <span>{abbreviation}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

TeamsPage.propTypes = {};

export default TeamsPage;