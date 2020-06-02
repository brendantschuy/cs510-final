import React from 'react';

const GameEvent = ({data}) => {

    const { home_team, away_team, start_date, venue } = data;

    const parseDate = dateTime => {
        const date = dateTime.split("T")[0];
        const usDate = date.split("-");
        return `${usDate[1]}/${usDate[2]}/${usDate[0].slice(-2)}`
    }

    return (
        <div className="schedule-game">
            <span className="schedule-game-teams">
                {home_team} @ {away_team}
                <br/>
                {parseDate(start_date)} at {venue}
            </span>
        </div>
    );
};


export default GameEvent;