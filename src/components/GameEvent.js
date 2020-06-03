import React, {forwardRef} from 'react';

const GameEvent = forwardRef((props, ref) => {

    const { home_team, away_team, start_date, venue } = props.data;

    const parseDate = dateTime => {
        const date = dateTime.split("T")[0];
        const usDate = date.split("-");
        return `${usDate[1]}/${usDate[2]}/${usDate[0].slice(-2)}`
    }

    return (
        <div className={`schedule-game${ref ? " highlight" : ""}`} ref={ref}>
            <span className={`schedule-game-teams`}>
                <span style={{float: "left"}}>
                    <a href={`/teams/${home_team.replace(" ", "%20")}`} className="schedule-game-link">{home_team} </a>
                    @
                    <a href={`/teams/${away_team.replace(" ", "%20")}`} className="schedule-game-link"> {away_team}</a>
                    </span>
                <span style={{float: "right"}}>{parseDate(start_date)} at {venue}</span>
            </span>
        </div>
    );
});


export default GameEvent;