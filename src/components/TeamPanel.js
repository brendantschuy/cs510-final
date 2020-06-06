import React from 'react';
import colorHandler from '../colorHandler';

const TeamPanel = ({ props }) => {
    
    const { id, color, alt_color, abbreviation, highlight, school } = props;

    return (
        <div
            key={id}
            className={`${highlight ? "team-square" : "team-square faded"}`}
            style={{
                backgroundColor: `${color}`,
                borderColor: `${alt_color}`,
            }}
            aria-label={`${school} details page`}
        >
            <a
                href={`/teams/${school}`}
                className="link-no-decoration"
                style={{ color: colorHandler.colorDiff(alt_color, color) ? `${alt_color}` : "#FFFFFF" }}
            >
                <span>{abbreviation}</span>
            </a>
        </div>
    );
};

export default TeamPanel;