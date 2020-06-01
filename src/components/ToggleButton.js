import React from 'react';
import '../rankings.css';

const ToggleButton = ({ text, toggle, isActive }) => {
    const inactiveClass = "rankings-poll-toggle-button";

    return (
        <button
            className={`${inactiveClass} ${isActive ? "active" : "inactive"}`}
            onClick={toggle}
        >
            {text}
        </button>
    )

}


export default ToggleButton;