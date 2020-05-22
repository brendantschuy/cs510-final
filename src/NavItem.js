import React, { useState } from 'react';

const NavItem = ({ label, children }) => {

    const [open, setOpen] = useState();



    return (
        <div
            class="menu-nav-item"
            onMouseEnter={() => setOpen(!open)}
        >
            <a
                href="#"
                className="menu-nav-item-link"
            >
                {label}
            </a>
            <div
                class="menu-nav-dropdown"
                style={!open ? { display: "none" } : { display: "block" }}
            >
                {open && children}
            </div>
        </div>
    )
}

export default NavItem;