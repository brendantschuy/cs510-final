import React from 'react';
import Button from './Button';
import RankingsButton from './RankingsButton';
import Logo from './Logo';
import './App.css';

const Header = ({ teamColors /*WIP*/ }) =>
    <nav>
        <div class="row index-header">
            <div class="index-header-col col-md-5">
                <RankingsButton />
                <Button label="Rankings" />
                <Button label="Teams" />
            </div>
            <div class="index-header-center col-md-2">
                <Logo />
            </div>
            <div class="index-header-col col-md-5">
                <Button label="Schedule" />
                <Button label="Historical" />
            </div>
        </div>
    </nav>

export default Header;