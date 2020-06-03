import React, { useEffect } from 'react';

const Conference = ({ data }) => {

    console.log("conf ddata = ", data[1]);

    return (
        <div class="conference-data">
            {data[0]}
            <ul>
                {data[1].map(team =>
                    <li>{team}</li>
                )}
            </ul>
        </div>
    );
};


export default Conference;