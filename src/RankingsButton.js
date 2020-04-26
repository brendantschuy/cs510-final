import React from 'react';
import Button from './Button';

const RankingsButton = () => {
    const dropdown = false;
    // const dropdown = useState(0);
    // createDropdown = () => {
    //     this.setState({dropdown: true})
    // }

    return dropdown
        ? <div>Hello world!</div>
        : <div>No, sir.</div>
}

export default RankingsButton;