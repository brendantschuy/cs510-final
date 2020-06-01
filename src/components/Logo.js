import React from 'react';

const Logo = () =>
    <div className="index-header-center">
        <span className="header-text">CFB STATS</span>
        <img
            src={require('../images/football.png')}
            id="header-img"
            alt="Header Logo"
        />
    </div>

export default Logo;