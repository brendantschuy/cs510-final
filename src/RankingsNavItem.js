import React from 'react';
import NavItem from './NavItem';

const RankingsNavItem = () => {

    let dropdown = false;

    // toggleDropdown = () => {
    //     this.dropdown = !(this.dropdown);
    // }

    if(dropdown) {
        return <div>
                <NavItem label="Rankings"></NavItem>
                <div class="button-dropdown">Hello world!</div>
            </div>
    }
    else {
        return <div>
                <NavItem label="Rankings"></NavItem>
            </div>
    }
    // const dropdown = useState(0);
    // createDropdown = () => {
    //     this.setState({dropdown: true})
    // }
}

export default RankingsNavItem;