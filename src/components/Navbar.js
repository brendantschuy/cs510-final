import React from 'react';
import NavItem from './NavItem';
import DropDownItem from './DropDownItem';
// import RankingsNavItem from './RankingsNavItem';
import Logo from './Logo';
import '../styles/App.css';

const Navbar = ({ teamColors /*WIP*/ }) =>
    <nav>
        <div className="row index-header">
            <div className="index-header-col col-md-5">
                <NavItem label="Rankings">
                    <DropDownItem text="AP" />
                    <DropDownItem text="Coaches" />
                    <DropDownItem text="CFP" />
                </NavItem>
                <NavItem label="Teams">
                    <DropDownItem text="Division I FBS" />
                    <DropDownItem text="Division I FCS" />
                    <DropDownItem text="Division II" />
                    <DropDownItem text="Division III" />
                    <DropDownItem text="By Conference" />
                </NavItem>
            </div>
            <div className="index-header-center col-md-2">
                <Logo />
            </div>
            <div className="index-header-col col-md-5">
                <NavItem label="Schedule" />
                <NavItem label="Historical">
                    <DropDownItem text="2020" />
                    <DropDownItem text="2019" />
                    <DropDownItem text="2018" />
                    <DropDownItem text="Earlier..." />
                </NavItem>
            </div>
        </div>
    </nav>

export default Navbar;