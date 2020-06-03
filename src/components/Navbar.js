import React from 'react';
import NavItem from './NavItem';
import DropDownItem from './DropDownItem';
import Logo from './Logo';
import '../styles/App.css';

const Navbar = ({ teamColors }) =>
    <nav>
        <div className="row index-header" style={{ backgroundColor: `${teamColors[0]}` }}>
            <div className="index-header-col col-md-5">
                <NavItem label="RANKINGS" color={teamColors}>
                    <DropDownItem text="AP" />
                    <DropDownItem text="Coaches" />
                    <DropDownItem text="CFP" />
                </NavItem>
                <NavItem label="SCHEDULE" color={teamColors}>
                    <span></span>
                </NavItem>

            </div>
            <div className="index-header-center col-md-2">
                <Logo color={teamColors} />
            </div>

            <div className="index-header-col col-md-5">

                <NavItem label="TEAMS" color={teamColors}>
                    <DropDownItem text="Division I FBS" />
                    <DropDownItem text="Division I FCS" />
                    <DropDownItem text="Division II" />
                    <DropDownItem text="Division III" />
                    <DropDownItem text="By Conference" />
                </NavItem>
                <NavItem label="CONFERENCES" color={teamColors}>
                    <DropDownItem text="2020" />
                    <DropDownItem text="2019" />
                    <DropDownItem text="2018" />
                    <DropDownItem text="Earlier..." />
                </NavItem>
            </div>
        </div>
    </nav>

export default Navbar;