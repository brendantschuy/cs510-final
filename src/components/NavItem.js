import React, { useState } from 'react';

const NavItem = ({ label, children }) => {

    const [open, setOpen] = useState();

    return (
        <div
            className="menu-nav-item"
            onMouseEnter={() => setOpen(!open)}
        >
            <span>
                <a
                    href={`/${label.toLowerCase()}`}
                    className="menu-nav-item-link"
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