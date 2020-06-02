import React from 'react';

const Logo = () =>
    <a href="./">
        <div className="index-header-center">
            <span className="header-text">CFB STATS</span>
            <img
                src={require('../images/football.png')}
                id="header-img"
                alt="Header Logo"
            />
        </div>
    </a>
export default Logo;