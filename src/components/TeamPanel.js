import React from 'react';

const TeamPanel = props => {

    // console.log("~~~~data = ", JSON.stringify(props));
    // console.log("data[0] = ", props.props.id);

    const { id, color, alt_color, abbreviation, highlight } = props.props;

    console.log(`HIGHLIGHT FOR ${abbreviation} = ${highlight}`);
    /* Ensures primary & secondary colors are distinct enough to be discernible.
     * Hex math is not fun in javascript.... */
    const colorDiff = (color1, color2) => {
        color1 = color1 ? parseInt(color1.substr(1), 16) : color1;
        color2 = color2 ? parseInt(color2.substr(1), 16) : color2;

        let c1bb = color1 % 256;
        let c1gg = (color1 - c1bb) % 65536;
        let c1rr = color1 - c1gg - c1bb;

        c1gg /= 256;
        c1rr /= 65536;

        let c2bb = color2 % 256;
        let c2gg = (color2 - c2bb) % 65536;
        let c2rr = color2 - c2gg - c2bb;

        c2gg /= 256;
        c2rr /= 65536;

        const euclidean = Math.sqrt(Math.pow(c1bb - c2bb, 2) + Math.pow(c1gg - c2gg, 2) + Math.pow(c1rr - c2rr, 2));
        return euclidean > 120;
    }

    return (
        <div
            key={id}
            className={`${highlight ? "team-square" : "team-square faded"}`}
            style={{
                color: colorDiff(alt_color, color) ? `${alt_color}` : "#FFFFFF",
                backgroundColor: `${color}`,
                borderColor: `${alt_color}`,
            }}
        >
            <span>{abbreviation}</span>
        </div>
    );
};

export default TeamPanel;