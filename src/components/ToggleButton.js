import React from 'react';
import '../styles/rankings.css';

const ToggleButton = ({ text, toggle, isActive }) => {
    const inactiveClass = "rankings-poll-toggle-button";

    return (
        <button
            className={`${inactiveClass} ${isActive ? "active" : "inactive"}`}
            onClick={toggle}
            aria-label={`Click to view ${text} poll.`}
        >
            {text}
        </button>
    )

}


export default ToggleButton;