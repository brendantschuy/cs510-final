import React, { useState, useEffect } from 'react';
import colorHandler from '../colorHandler';

const NavItem = ({ label, children, color }) => {

    console.log("teamColors = ", color[0])

    const [open, setOpen] = useState();
    const [ textColor, setTextColor ] = useState("#000000");



    useEffect(() => {
        if(color && colorHandler.tooDark(color[0])) {
            setTextColor("#FFFFFF");
            console.log("this is too dark");
            console.log("color[0] = ", color[0]);
        }
        console.log("use effect, not too dark");
        //just force update if 'loading' is updated
    }, [children]);

    return (
        <div
            className="menu-nav-item"
            onMouseEnter={() => setOpen(!open)}
            style={{backgroundColor:`${color[0]}`}}
        >
            <span>
                <a
                    href={`/${label.toLowerCase()}`}
                    className="menu-nav-item-link"
                    style={{color: `${textColor}`}}
                >
                    {label}
                </a>
            </span>
            <div
                className="menu-nav-dropdown"
                style={!open ? { display: "none" } : { display: "none" }}
            >
                {open && children}
            </div>
        </div>
    )
}

export default NavItem;