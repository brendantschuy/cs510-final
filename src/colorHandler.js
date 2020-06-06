//Contains helper functions to help with the color scheme

const colorHandler = {
    /* Ensures primary & secondary colors are distinct enough to be discernible.
     * Hex math is not fun in javascript.... */
    colorDiff: function (color1, color2) {

        const threshold = 170;

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

        return this.euclidean(c1bb, c2bb, c1rr, c2rr, c1gg, c2gg, threshold);
    },

    /* Helper function which takes euclidean distance of 3 values
     * (typically should be RGB) */
    euclidean: function (a1, a2, b1, b2, c1, c2, threshold) {
        return Math.sqrt(Math.pow(a1 - a2, 2) + Math.pow(b1 - b2, 2) + Math.pow(c1 - c2, 2)) > threshold;
    },

    /* Detects whether a color is too dark, subjectively, for black 
     * text to be written on it.
     * Returns TRUE or FALSE */
    tooDark: function (color) {
        if(!color) return false;
        const colorInt = parseInt(color.substr(1), 16);
        let cbb = colorInt % 256;
        let cgg = (colorInt - cbb) % 65536;
        let crr = colorInt - cbb - cgg;

        cgg /= 256;
        crr /= 65536;

        return (cbb + cgg + crr) / 3 < 80;
    }
};

export default colorHandler;
